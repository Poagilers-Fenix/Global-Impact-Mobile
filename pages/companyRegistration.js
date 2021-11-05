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
export default function InitialSreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", height: "13%" }}>
        <Image source={require("../assets/logo.png")} style={styles.imagem} />
      </View>
      <View style={{ alignItems: "center", height: "6%", marginBottom: 15 }}>
        <Text style={styles.titulo}>Cadastro de Empresa</Text>
      </View>
      <View style={styles.containerSecondary}>
        <InputWithIcon title="Nome fantasia"></InputWithIcon>
        <InputWithIcon title="E-mail para login"></InputWithIcon>
        <InputWithIcon title="Endereço"></InputWithIcon>
        <InputWithIcon title="Cnpj"></InputWithIcon>
        <InputWithIcon title="Nova Senha"></InputWithIcon>
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
  donateImagem: {
    width: 400,
    height: 300,
    marginTop: 30,
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
});
