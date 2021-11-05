import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function InitialSreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", height: "15%" }}>
        <Image source={require("../assets/logo.png")} style={styles.imagem} />
      </View>
      <View style={{ alignItems: "center", height: "45%" }}>
        <Image
          source={require("../assets/initialSreenImg.png")}
          style={styles.donateImagem}
        />
      </View>
      <View style={styles.containerSecondary}>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.titulo}>Comece já!!</Text>
          <Text style={styles.titulo}>É totalmente gratuito.</Text>
        </View>
        <TouchableOpacity
          style={{ display: "flex", alignItems: "center", marginTop: 30 }}
        >
          <Text style={styles.btnDisable}>Sou pessoa física</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ display: "flex", alignItems: "center", marginTop: 20 }}
          onPress={() => navigation.navigate("CompanyRegistration")}
        >
          <Text style={styles.btnEnable}>weFeed para empresas</Text>
        </TouchableOpacity>
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
  },
  donateImagem: {
    width: 400,
    height: 300,
    marginTop: 30,
  },
  btnDisable: {
    height: 50,
    width: "75%",
    paddingBottom: 5,
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
    width: "75%",
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
