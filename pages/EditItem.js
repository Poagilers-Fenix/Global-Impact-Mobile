import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import InputWithIcon from "../components/input/InputWithIcon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { updateItem } from "../API/ApiManager";
import SideBar from "../components/SideBar";
import { ScrollView } from "react-native-gesture-handler";

export default function EditItem({ navigation, route }) {
  const { item } = route.params;
  const { itemsSelected } = route.params;
  const [name, setName] = useState(false);
  const [image, setImage] = useState("");
  const [loading, isLoading] = useState(false);

  const pressSave = async () => {
    isLoading(true);
    await updateItem({
      itemId: item.itemId,
      nome: name,
      foto: image == "" ? item.foto : image,
    });
    itemsSelected.map((val) => {
      if (val.itemId == item.itemId) {
        val.itemId = item.itemId;
        val.nome = name;
        val.image == "" ? item.foto : image;
      }
    });
    isLoading(false);
    navigation.navigate({
      name: "ResumeSreen",
      params: { itemsSelected },
    });
  };

  return (
    <View style={styles.container}>
      <View
        style={{ alignItems: "center", height: "13%", flexDirection: "row" }}
      >
        <SideBar navigation={navigation}></SideBar>
        <Image source={require("../assets/logo.png")} style={styles.imagem} />
      </View>
      <View>
        <View style={{ alignItems: "center", height: "12%", marginBottom: 15 }}>
          <Text style={styles.titulo}>Cadastro de um item</Text>
        </View>
        <Image
          source={require("../assets/CreateItemImg.png")}
          style={styles.imagemItem}
        />
      </View>
      <View style={styles.containerSecondary}>
        <ScrollView>
          <InputWithIcon
            title="Nome"
            onChange={setName}
            value={item.nome}
          ></InputWithIcon>
          <InputWithIcon
            title="Imagem"
            onChange={setImage}
            value={item.foto}
          ></InputWithIcon>
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
              onPress={pressSave}
            >
              {loading && (
                <Text style={styles.btnEnable}>
                  <ActivityIndicator size="large" color="#fff" />
                </Text>
              )}
              {!loading && <Text style={styles.btnEnable}>Salvar </Text>}
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
    marginLeft: 50,
  },
  containerSecondary: {
    flex: 1,
    backgroundColor: "#B7DBD2",
    height: "100%",
    width: "100%",
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
    borderRadius: 10,
    color: "#fff",
    backgroundColor: "#CC5353",
    textAlignVertical: "center",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 20,
  },
  imagemItem: {
    width: 400,
    height: 300,
    marginTop: 10,
  },
});
