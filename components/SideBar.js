import React, { useState } from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Global from "../Global/Global";

export default function SideBar({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.containerSideBar}>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <MaterialIcons
                name="format-list-bulleted"
                size={43}
                color="#666"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
              backgroundColor: "#fff",
            }}
          >
            <MaterialIcons name="person" size={53} color="#CC5353" />
            <View>
              <Text
                style={{ fontSize: 20, color: "#CC5353", fontWeight: "bold" }}
              >
                {Global.estabInSession.nome}
              </Text>
              <Text style={{ fontWeight: "bold", color: "#666" }}>
                {console.log(Global.estabInSession)}
                {Global.estabInSession.email}
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
              marginLeft: 20,
            }}
          >
            <AntDesign name="caretleft" size={30} color="#666" />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 16, color: "#666" }}>
                Doações anteriores
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
              marginLeft: 20,
            }}
          >
            <AntDesign name="pluscircle" size={30} color="#666" />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 16, color: "#666" }}>Novo item</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#666",
              height: 2,
              marginTop: 20,
              marginHorizontal: 15,
            }}
          ></View>
          <View>
            <Text
              style={{
                color: "#666",
                textAlign: "center",
                margin: 10,
              }}
              onPress={() =>
                Linking.openURL("https://brasil.un.org/pt-br/sdgs/2")
              }
            >
              Fome Zero e Agricultura Sustentável
            </Text>
            <Text
              style={{
                color: "#666",
                textAlign: "center",
                margin: 10,
              }}
              onPress={() =>
                Linking.openURL(
                  "https://www.redebrasilatual.com.br/cidadania/2021/10/fome-brasil-19-milhoes-inseguranca-alimentar/"
                )
              }
            >
              20 milhões de brasileiros sentem fome
            </Text>
            <Text
              style={{
                color: "#666",
                textAlign: "center",
                margin: 10,
              }}
              onPress={() =>
                Linking.openURL(
                  "https://www.ecycle.com.br/desperdicio-de-alimentos/"
                )
              }
            >
              Por que o desperdício gera fome?
            </Text>
            <Text
              style={{
                color: "#666",
                textAlign: "center",
                margin: 10,
              }}
              onPress={() =>
                Linking.openURL(
                  "https://www.embrapa.br/busca-de-noticias/-/noticia/59945046/indice-global-do-desperdicio-de-alimentos-da-onu-estima-em-121-quilos-o-desperdicio-de-comida-per-capita-anual"
                )
              }
            >
              Desperdício de toneladas de alimentos
            </Text>
            <Text
              style={{
                color: "#666",
                textAlign: "center",
                margin: 10,
              }}
              onPress={() =>
                Linking.openURL(
                  "https://neogrid.com/br/blog/varejo-mais-sustentavel-como-a-tecnologia-pode-reduzir-o-desperdicio"
                )
              }
            >
              Reduzir o desperdício com tecnologia
            </Text>
            <Text
              style={{
                color: "#666",
                textAlign: "center",
                margin: 10,
              }}
              onPress={() =>
                Linking.openURL(
                  "https://conferenciassan.org.br/ativismo-contra-a-fome/"
                )
              }
            >
              Ativismo contra a fome?
            </Text>
          </View>
        </View>
      </Modal>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <MaterialIcons name="format-list-bulleted" size={43} color="#666" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    marginBottom: 20,
  },
  button: {
    marginTop: 35,
    marginLeft: 10,
    marginRight: -10,
  },
  containerSideBar: {
    height: "100%",
    width: "60%",
    backgroundColor: "rgba(255, 255, 255, 0.96)",
  },
});
