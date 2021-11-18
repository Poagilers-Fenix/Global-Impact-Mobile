import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Modal,
} from "react-native";
import InputWithIcon from "../components/input/InputWithIcon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { deleteItemById } from "../API/ApiManager";
import SideBar from "../components/SideBar";

export default function MenuScreen({ navigation, route }) {
  const [modalVisible, setModalVisible] = useState(false);
  let { itemsSelected } = route.params;
  const deleteItem = async (val) => {
    await deleteItemById(val);
    itemsSelected.map((itemInList, i) => {
      if (itemInList.itemId == val) {
        itemsSelected.splice(i, 1);
        navigation.navigate({
          name: "ResumeSreen",
          params: { itemsSelected },
        });
      }
    });
  };
  const renderItem = ({ item }) => (
    <View style={styles.containerFletList}>
      <View style={styles.subContainer}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Image
            style={styles.imgList}
            source={{
              uri:
                item.foto == null
                  ? "https://raw.githubusercontent.com/Poagilers-Fenix/WebApp-Challenge/main/Imagens/no-image-found.png?token=AOXNWKVBRD3WDDJKASDBZT3BHUBDY"
                  : item.foto,
            }}
          ></Image>
          <View style={styles.cardList}>
            <Text
              style={
                (styles.cardText, { color: "#CC5353", fontWeight: "bold" })
              }
            >
              {item.nome}
            </Text>
            <Text
              style={(styles.cardText, { color: "#666", fontWeight: "bold" })}
            >
              {item.doacoesItens.quantidade} {item.doacoesItens.medida}
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() =>
              navigation.navigate({
                name: "EditItem",
                params: { item, itemsSelected },
              })
            }
          >
            <MaterialCommunityIcons
              name={"account-edit"}
              size={26}
              color="#CC5353"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteItem(item.itemId)}>
            <MaterialCommunityIcons
              name={"trash-can-outline"}
              size={26}
              color="#CC5353"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          height: "13%",
          flexDirection: "row",
        }}
      >
        <SideBar navigation={navigation}></SideBar>
        <Image source={require("../assets/logo.png")} style={styles.imagem} />
      </View>
      <View style={{ alignItems: "center", height: "8%", marginBottom: 15 }}>
        <Text style={styles.titulo}>Concluir Solicitaçao</Text>
        <Text>Existem {itemsSelected.length} item(s) para envio</Text>
      </View>
      <View style={styles.containerSecondary}>
        {itemsSelected.length == 0 && (
          <View>
            <Text style={styles.titulo}>Nada por aqui!</Text>
            <TouchableOpacity
              style={{ display: "flex", alignItems: "center" }}
              onPress={() => navigation.navigate("MenuScreen")}
            >
              <Text style={styles.btnEnable}>Voltar</Text>
            </TouchableOpacity>
          </View>
        )}
        {itemsSelected.length != 0 && (
          <SafeAreaView style={(styles.container, { marginBottom: 210 })}>
            <FlatList
              data={itemsSelected}
              renderItem={renderItem}
              keyExtractor={(item) => item.itemId}
            />
            <TouchableOpacity
              style={{ display: "flex", alignItems: "center" }}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.btnEnable}>Finalizar</Text>
            </TouchableOpacity>
          </SafeAreaView>
        )}
      </View>
      {modalVisible && (
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <View style={styles.containerModal}>
            <Image
              style={styles.img}
              source={require("../assets/ConfirmIcon.png")}
            />
            <Text style={styles.titulo}>Solicitação enviada para ONG!</Text>
            <TouchableOpacity
              style={{ display: "flex", alignItems: "center" }}
              onPress={() => navigation.navigate("MenuScreen")}
            >
              <Text style={styles.btnVoltar}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
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
    fontWeight: "bold",
  },
  imagem: {
    width: 200,
    height: 60,
    marginLeft: 50,
  },
  containerSecondary: {
    paddingTop: 25,
    backgroundColor: "#B7DBD2",
    height: "100%",
    width: "100%",
    borderRadius: 30,
    display: "flex",
    alignItems: "center",
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
    marginBottom: 15,
    fontSize: 20,
  },
  btnVoltar: {
    height: 50,
    marginTop: 10,
    paddingHorizontal: 15,
    paddingBottom: 5,
    color: "white",
    borderRadius: 8,
    color: "#fff",
    backgroundColor: "#CC5353",
    textAlignVertical: "center",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 15,
    fontSize: 20,
  },
  img: {
    width: 180,
    height: 180,
  },
  imagemItem: {
    width: 400,
    height: 300,
    marginTop: 10,
  },
  imgList: {
    width: 40,
    height: 40,
    borderRadius: 7,
    marginRight: 9,
  },
  containerFletList: {
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    width: 330,
    borderRadius: 7,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardText: {
    marginHorizontal: 0,
  },
  cardList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",

    borderRadius: 7,
  },
  containerModal: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
