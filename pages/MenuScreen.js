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
  Alert,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RadioForm from "react-native-simple-radio-button";

import { getItems } from "../API/ApiManager";
const getItemsMock = require("../API/ItemsMock.json");
import SideBar from "../components/SideBar";
export default function MenuScreen({ navigation }) {
  const [isCheckList, setIsCheckList] = useState([]);
  const [listItens, setListItens] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const [loading, isLoading] = useState(false);
  const [list, setList] = useState(listItens[0]);
  const [load, setLoad] = useState(true);

  var radio_props = [
    { label: "un", value: "un" },
    { label: "kg", value: "Kg" },
    { label: "L", value: "L" },
  ];

  // Ativar ou desativar mock
  let MOCK = false;

  useEffect(() => {
    async function fetchData() {
      navigation.addListener("focus", async () => {
        setLoad(!load);
        setListItens([]);
      });
      isLoading(true);
      const res = MOCK == true ? getItemsMock : await getItems();
      listItens.push(res);
      if (listItens.length > 0) {
        if (searchText === "") {
          setList(listItens[0]);
        } else {
          setList(
            listItens[0].filter((item) => {
              if (item.nome.indexOf(searchText) > -1) {
                return true;
              } else {
                return false;
              }
            })
          );
        }
      }
      isLoading(false);
    }
    fetchData();
  }, [load, searchText]);

  const updateListItens = (item) => {
    item.doacoesItens = { quantidade: 1, medida: "un" };
  };

  const notCheck = (item) => {
    isCheckList.map((itemInList, i) => {
      if (itemInList.id == item.id) {
        isCheckList.splice(i, 1);
      }
    });
  };
  const renderItem = ({ item }) => (
    <View style={styles.containerFletList}>
      {updateListItens(item)}
      <View style={styles.cardList}>
        <Text
          style={(styles.cardText, { color: "#CC5353", fontWeight: "bold" })}
        >
          {item.nome}
        </Text>
      </View>
      <View
        style={{ height: 2, backgroundColor: "#CC5353", marginBottom: 6 }}
      ></View>
      <View style={styles.subContainer}>
        <BouncyCheckbox
          onPress={(isChecked) => {
            if (isChecked) {
              isCheckList.push(item);
            } else {
              notCheck(item);
            }
          }}
          fillColor="#CC5353"
        />
        <View style={styles.input}>
          <TextInput
            placeholder="Qtd"
            style={{ paddingLeft: 5, flex: 1, height: 50 }}
            onChangeText={(val) => (item.doacoesItens.quantidade = val)}
            keyboardType="numeric"
            placeholder={item.doacoesItens.quantidade.toString()}
          ></TextInput>
        </View>
        <View style={styles.viewPicker}>
          <View>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              onPress={(val) => (item.doacoesItens.medida = val)}
              buttonSize={10}
              buttonColor={"#CC5353"}
            />
          </View>
        </View>
        <Image
          style={styles.imgList}
          source={{
            uri:
              item.foto == null
                ? "https://raw.githubusercontent.com/Poagilers-Fenix/WebApp-Challenge/main/Imagens/no-image-found.png?token=AOXNWKVBRD3WDDJKASDBZT3BHUBDY"
                : item.foto,
          }}
        ></Image>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <View
        style={{ alignItems: "center", height: "13%", flexDirection: "row" }}
      >
        <SideBar navigation={navigation}></SideBar>
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
          onChangeText={setSearchText}
        />
        <TouchableOpacity
          style={{ display: "flex", alignItems: "center" }}
          onPress={() => navigation.navigate("CreateItem")}
        >
          <Text style={styles.btnNewItem}>Novo item</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerSecondary}>
        {loading && (
          <View style={styles.messageContainer}>
            <ActivityIndicator size="large" color="blue" />
          </View>
        )}
        {!loading && (
          <SafeAreaView style={(styles.container, { marginBottom: 140 })}>
            <FlatList
              data={list}
              renderItem={renderItem}
              keyExtractor={(item) => item.itemId}
            />
            <TouchableOpacity
              style={{ display: "flex", alignItems: "center", marginTop: 20 }}
              onPress={() =>
                navigation.navigate({
                  name: "ResumeSreen",
                  params: { itemsSelected: isCheckList },
                })
              }
            >
              <Text style={styles.btnEnable}>Próxima Etapa</Text>
            </TouchableOpacity>
          </SafeAreaView>
        )}
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
    paddingTop: 25,
    paddingBottom: 45,
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
  btnNewItem: {
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
  },
  cardText: {
    marginHorizontal: 0,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
  },
  containerFletList: {
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 7,
  },
  pickerStyle: {
    width: 90,
  },
  viewPicker: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: 70,
    marginHorizontal: 20,
    marginVertical: 5,
  },
  input: {
    borderColor: "#aaa",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 30,
    width: 50,
  },
});
