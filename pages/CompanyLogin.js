import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Alert,
} from "react-native";
import InputWithIcon from "../components/input/InputWithIcon";
import { getCompanies } from "../API/ApiManager";
import { ScrollView } from "react-native-gesture-handler";
import Global from "../Global/Global";

export default function CompanyLogin({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [listCompanies, setListCompanies] = useState([]);
  const [loading, isLoading] = useState(false);

  const pressSave = async () => {
    if (email == "" && password == "") {
      Alert.alert("Aviso", "Algum campo não foi preenchido");
      return;
    }
    isLoading(true);
    const res = await getCompanies();
    listCompanies.push(res);
    const isValid = listCompanies[0].filter((val) => {
      if (val.email == email && val.senha == password) {
        Global.estabInSession = val;
        return "Entrou";
      }
    });
    if (isValid.length > 0) {
      isLoading(false);
      navigation.navigate("MenuScreen");
    } else {
      isLoading(false);
      Alert.alert("Aviso", "Email ou Senha incorretos");
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", height: "13%" }}>
        <Image source={require("../assets/logo.png")} style={styles.imagem} />
      </View>
      <View>
        <Image
          source={require("../assets/LoginImg.png")}
          style={styles.imagemLogin}
        />
      </View>
      <View style={styles.containerSecondary}>
        <View style={{ alignItems: "center", height: "6%", marginBottom: 15 }}>
          <Text style={styles.titulo}>Login de Empresa</Text>
        </View>
        <ScrollView>
          <InputWithIcon title="E-mail" onChange={setEmail}></InputWithIcon>
          <InputWithIcon title="Senha" onChange={setPassword}></InputWithIcon>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: 30,
                marginRight: 30,
              }}
              onPress={() => navigation.navigate("LoginOrRegister")}
            >
              <Text style={styles.btnVoltar}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ display: "flex", alignItems: "center", marginTop: 30 }}
              onPress={pressSave}
            >
              {loading && (
                <Text style={styles.btnEnable}>
                  <ActivityIndicator size="large" color="#fff" />
                </Text>
              )}
              {!loading && <Text style={styles.btnEnable}>Login</Text>}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imgView: {
    width: "100%",
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
  titulo: {
    fontSize: 26,
    flexWrap: "wrap",
    textAlign: "center",
    color: "#666",
    marginTop: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  imagem: {
    width: 200,
    height: 60,
    marginTop: 30,
    marginBottom: 40,
  },
  containerSecondary: {
    flex: 1,
    backgroundColor: "#B7DBD2",
    height: "100%",
    maxWidth: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    display: "flex",
    alignItems: "center",
  },
  btnVoltar: {
    height: 50,
    paddingBottom: 5,
    width: 130,
    color: "white",
    borderRadius: 8,
    color: "#a0a0a0",
    backgroundColor: "#ebebeb",
    textAlignVertical: "center",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 20,
  },
  btnEnable: {
    height: 50,
    width: 130,
    paddingBottom: 5,
    color: "white",
    borderRadius: 8,
    color: "#fff",
    backgroundColor: "#CC5353",
    textAlignVertical: "center",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 20,
  },
  imagemLogin: {
    width: 400,
    height: 350,
    marginTop: 10,
  },
});
