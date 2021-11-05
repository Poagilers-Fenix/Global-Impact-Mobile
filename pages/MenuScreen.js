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
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{ alignItems: "center", height: "13%", flexDirection: "row" }}
      >
        <MaterialCommunityIcons
          name="format-list-bulleted"
          size={42}
          color="#666"
          style={{ marginLeft: 10, marginTop: 18 }}
        />
        <Image source={require("../assets/logo.png")} style={styles.imagem} />
      </View>
      <View style={{ display: "flex", flexDirection: "row", padding: 15 }}>
        <TextInput
          style={{
            paddingLeft: 5,
            flex: 1,
            height: 50,
            borderWidth: 2,
            borderColor: "#666",
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
          placeholder="Pesquisar"
        />
        <TouchableOpacity
          style={{ display: "flex", alignItems: "center" }}
          onPress={() => navigation.navigate("MenuScreen")}
        >
          <Text style={styles.btnEnable}>Novo item</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerSecondary}></View>
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
    marginLeft: 50,
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
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
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
