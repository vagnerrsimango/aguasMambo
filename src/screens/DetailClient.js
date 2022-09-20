import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Header from "./comp/Header";
import { useNavigation } from "@react-navigation/native";
import { Roboto_100Thin, Roboto_900Black } from "@expo-google-fonts/roboto";
import { AntDesign } from "@expo/vector-icons";
import { UserContext } from "../services/Context";

const DetailClient = ({ route }) => {
  const [userInfo, setUserInfo] = useState();
  const [leitura, setLeitura] = useState(0);
  const [oldLeitura, setOldLeitura] = useState(0);
  const [value, setValue] = useState(0);

  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log(
      "🚀 ~ file: DetailClient.js ~ line 23 ~ DetailClient ~ user",
      user
    );
  });
  const addLeituraM3 = (add) => {
    setLeitura(add);
  };

  const addLeituraMT = (add) => {
    setLeitura(add);
  };

  const addLeitura2 = (add) => {
    setOldLeitura(add);
  };

  const convertMetical = () => {
    if (leitura > oldLeitura) {
      setValue(25.5 * leitura);
    } else {
      alert("A nova fatura deve ser superior a anterior!");
    }
  };

  const navigation = useNavigation();

  const retornar = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View styler={styles.header}>
        <Header txt1="Detalhes de Leitura" txt2="0001" retornar={retornar} />
      </View>

      <View style={styles.body}>
        <TextInput
          style={styles.txtBox1}
          placeholder="Identificação"
          placeholderTextColor={"orange"}
          textAlign={"center"}
          fontSize={18}
        ></TextInput>
        <TextInput
          style={styles.txtBox2}
          placeholder="Leitura anterior"
          placeholderTextColor={"black"}
          textAlign={"center"}
          fontSize={18}
          onChangeText={addLeitura2}
        ></TextInput>
        <TextInput
          style={styles.txtBox2}
          placeholder="Nova Leitura (metros cúbicos)"
          placeholderTextColor={"black"}
          textAlign={"center"}
          fontSize={18}
          editable={user.admin === true ? false : true}
          selectTextOnFocus={false}
          onChangeText={addLeituraM3}
        ></TextInput>
        {user.admin === true ? (
          <TextInput
            style={styles.txtBox2}
            placeholder="Nova Leitura (meticais)"
            placeholderTextColor={"black"}
            textAlign={"center"}
            fontSize={18}
            onChangeText={addLeituraMT}
          ></TextInput>
        ) : null}
        <TextInput
          style={styles.txtBox3}
          placeholder="Saldo Atual"
          placeholderTextColor={"black"}
          textAlign={"center"}
          fontSize={18}
        ></TextInput>
        <TextInput
          style={styles.txtBox3}
          placeholder="Estado"
          placeholderTextColor={"black"}
          textAlign={"center"}
          fontSize={18}
        ></TextInput>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.btnLeitura} onPress={convertMetical}>
          <Text style={styles.txtLeitura}>Leitura</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}></View>
    </View>
  );
};

export default DetailClient;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#03293A",
  },

  header: {
    backgroundColor: "#03293A",
    flex: 0.9,
  },

  body: {
    flex: 2,
    backgroundColor: "#F2F2F2",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    alignItems: "center",
    justifyContent: "center",
  },

  valuem3: {
    flexDirection: "row",
    marginTop: 50,
  },

  footer: {
    height: 50,
    borderRadius: 50,
    alignItems: "center",
  },

  txtBox1: {
    textAlign: "left",
    fontSize: 13,
    textAlignVertical: "top",
    fontFamily: "Roboto_100Thin",
    borderColor: "orange",
    borderWidth: 2,
    marginTop: 10,
    width: 300,
    height: 50,
  },

  txtBox2: {
    textAlign: "left",
    textAlignVertical: "top",
    fontSize: 13,
    fontFamily: "Roboto_100Thin",
    borderColor: "#03293A",
    borderWidth: 2,
    marginTop: 10,
    width: 300,
    height: 50,
  },

  txtBox3: {
    textAlign: "left",
    fontSize: 13,
    textAlignVertical: "top",
    fontFamily: "Roboto_100Thin",
    borderColor: "black",
    borderWidth: 2,
    marginTop: 10,
    width: 300,
    height: 50,
  },

  txtLeitura: {
    color: "#fff",
    fontFamily: "Roboto_900Black",
    fontSize: 25,
    textAlign: "center",
  },

  billText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#fff",
    fontFamily: "Roboto_100Thin",
  },

  billText2: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#fff",
    fontFamily: "Roboto_900Black",
  },

  btnLeitura: {
    backgroundColor: "#FFA21A",
    height: 56,
    width: 154,
    padding: 8,
    top: 8,

    marginTop: 18,
    borderRadius: 30,
  },

  agendaIMG: {
    justifyContent: "flex-end",
    flexDirection: "row",
    position: "absolute",
    right: 80,
  },

  settingsIMG: {
    justifyContent: "flex-end",
    flexDirection: "row",
    position: "absolute",
    right: 30,
  },

  alt: {
    flexDirection: "row",
    color: "#fff",
    justifyContent: "space-evenly",
    backgroundColor: "#03293A",
    padding: 15,
    width: 200,
    height: 50,
    borderColor: "#FFA21A",
    borderRadius: 10,
    borderWidth: 1,
  },
  alt2: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#FFA21A",
    padding: 15,
    borderRadius: 10,
    width: 100,
    height: 50,
  },

  footerItems: {
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    position: "absolute",
    right: 0,
    width: 15,
    height: 25,
  },

  gota1: {
    position: "absolute",
    left: 0,
    bottom: 0,
    opacity: 0.2,
  },

  imgGotas: {
    position: "absolute",
    justifyContent: "space-evenly",
    bottom: 0,
    right: 0,
  },

  gota2: {
    opacity: 0.2,
  },
});
