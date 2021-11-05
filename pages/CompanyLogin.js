import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import InputWithIcon from "../components/input/InputWithIcon";
export default function CompanyLogin({ navigation }) {
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
        <InputWithIcon title="E-mail"></InputWithIcon>
        <InputWithIcon title="Senha"></InputWithIcon>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 30,
              marginRight: 30,
            }}
          >
            <Text style={styles.btnVoltar}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ display: "flex", alignItems: "center", marginTop: 30 }}
            onPress={() => navigation.navigate("CompanyRegistration")}
          >
            <Text style={styles.btnEnable}>Salvar</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: "#B7DBD2",
    height: "100%",
    width: "100%",
    borderRadius: 30,
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
