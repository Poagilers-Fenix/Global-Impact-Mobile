import React, { useState } from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

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
          <View></View>
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
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
});
