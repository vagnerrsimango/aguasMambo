import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { getAllData } from "../controller/AuthController";
import { storeData } from "../services/localstorage";

const UpdateScreen = () => {
  const [loading, setLoading] = useState("Atualização dos dados");
  const navigation = useNavigation();
  const [inputIp, setInputIp] = useState("192.168.1.1");
  const handleUpload = () => {
    alert("Its up!");
  };

  const handleDownload = () => {
    setLoading("Estabelecendo conexão");
    getAllData(inputIp)
      .then((data) => {
        setLoading("Conexão estabelecida");
        storeData("@local", data, (result) => {
          if (result === true) {
            setLoading("Sincronizado com sucesso");
          } else {
            console.log("error storing data=>", result);
            setLoading("Falha na conexão");
          }
        });
      })
      .catch((err) => console.error(err));
  };

  const retornar = () => {
    alert("sdjsdhsjdjsgdj");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => Alert("sdhsdhsdh")}>
        <Icon
          style={styles.back}
          name="arrow-back"
          size={30}
          color="#2196F3"
          onPress={() => Alert("dsdsdsdjsjd")}
        />
      </TouchableOpacity>

      <Image style={styles.img} source={require("../img/logoshadow.png")} />

      <Text style={styles.subtitle}>{loading}</Text>

      <TextInput
        style={styles.input}
        placeholder="ip:192.158.1.38"
        placeholderTextColor={"grey"}
        onChangeText={setInputIp}
        value={inputIp}
      />

      <TouchableOpacity style={styles.button} onPress={handleUpload}>
        <Icon name="cloud-upload" size={30} color="#fff" />
        <Text style={styles.buttonText}>Upload</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#2196F3" }]}
        onPress={handleDownload}
      >
        <Icon name="cloud-download" size={30} color="#fff" />
        <Text style={styles.buttonText}>Download</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: "#666",
  },
  back: {
    right: 160,
    bottom: 130,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFA21A",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: "80%",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "transparent",
    width: "80%",
    color: "black",
    marginVertical: 10,
    color: "black",
    fontSize: 17,
    borderRadius: 5,
    padding: 10,
    borderColor: "#2196F3",
    borderWidth: 1,
    textAlign: "left",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
    marginLeft: 10,
    textTransform: "uppercase",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default UpdateScreen;
