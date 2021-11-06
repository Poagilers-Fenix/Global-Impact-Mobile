import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  SafeAreaView,
  FlatList,
} from "react-native";
import InputWithIcon from "../components/input/InputWithIcon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const getItems = require("../API/getItems.json");
import { Picker } from "@react-native-picker/picker";
export default function MenuScreen({ navigation }) {
  const [isLoading, setLoading] = useState(false);
  const [estadoItem, setEstadoItem] = useState("");
  const renderItem = ({ item }) => (
    <View style={styles.subContainer}>
      <View style={styles.cardList}>
        <Text
          style={(styles.cardText, { color: "#CC5353", fontWeight: "bold" })}
        >
          {item.name}
        </Text>
      </View>
      <View style={styles.viewPicker}>
        <Picker
          style={styles.pickerStyle}
          selectedValue={estadoItem}
          onValueChange={(itemValue) => setEstadoItem(itemValue)}
        >
          <Picker.Item label="Crítico" value={"critico"} />
          <Picker.Item label="Moderado" value={"moderado"} />
          <Picker.Item label="Bom" value={"bom"} />
        </Picker>
      </View>
      <Image
        style={styles.imgList}
        source={{
          uri:
            item.image == null
              ? "https://raw.githubusercontent.com/Poagilers-Fenix/WebApp-Challenge/main/Imagens/no-image-found.png?token=AOXNWKVBRD3WDDJKASDBZT3BHUBDY"
              : item.image,
        }}
      ></Image>
    </View>
  );
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
            paddingLeft: 15,
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
          onPress={() => navigation.navigate("CreateItem")}
        >
          <Text style={styles.btnEnable}>Novo item</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerSecondary}>
        <SafeAreaView style={(styles.container, { marginBottom: 140 })}>
          {isLoading && (
            <View style={styles.messageContainer}>
              <ActivityIndicator size="large" color="blue" />
            </View>
          )}
          <FlatList
            data={getItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
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
    color: "#666",
    marginTop: 10,
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
  imgList: {
    width: 100,
    height: 100,
    borderRadius: 7,
    marginRight: 9,
  },
  cardList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",

    borderRadius: 7,

    width: 80,
  },
  cardText: {
    marginHorizontal: 0,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 7,
  },
  pickerStyle: {
    width: 130,
  },
  viewPicker: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: 20,
    marginVertical: 25,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 7,
  },
});
