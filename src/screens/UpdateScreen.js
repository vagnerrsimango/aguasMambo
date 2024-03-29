import React, { useState, useEffect } from "react";
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
import { clientOffline, getAllData } from "../controller/AuthController";
import { storeData } from "../services/localstorage";
import api from "../services/api";
import ProgressDialog from "react-native-progress-dialog";

import { getIpAdress } from "../services/Network";

const UpdateScreen = () => {
  const [loading, setLoading] = useState(false);
  const [loadingLabel, setLoadingLabel] = useState("");
  const navigation = useNavigation();
  const [inputIp, setInputIp] = useState("192.168.1.1");

  useEffect(() => {
    getIpAdress((ip) => {
      setInputIp(ip);
    });
  }, [inputIp]);

  const handleUpload = async () => {
    const baseurl = `http://${inputIp}:3333/`;
    clientOffline()
      .then(async (res) => {
        await api.put(baseurl + "clients/upload", { data: 5 });
        res.forEach((element) => {
          console.log(element.cliente_id);
        });
      })
      .catch((err) => console.error(err));
  };

  const handleDownload = () => {
    setLoading(true);
    setLoadingLabel("Verificando ip...");
    getAllData(inputIp)
      .then((data) => {
        setLoadingLabel("Conexão estabelecida");
        storeData("@local", data, (result) => {
          if (result === true) {
            setLoadingLabel("Sincronizado com sucesso");
            setLoading(false);
            alert("Descarregamento finalizado com sucesso");
          } else {
            console.log("error storing data=>", result);
            setLoadingLabel("Falha na conexão");
          }
        });
      })
      .catch((err) => {
        setLoading(false);
        alert("Falha de conexão: " + err.message);
        console.error(err);
      });
  };

  const retornar = () => {
    alert("sdjsdhsjdjsgdj");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ProgressDialog
        visible={loading}
        label={loadingLabel}
        loaderColor="#FF9800"
      />
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

      <Text style={styles.subtitle}>Sincronização de dados</Text>

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
