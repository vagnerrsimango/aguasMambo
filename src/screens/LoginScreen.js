import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import call from "react-native-phone-call";
import ProgressDialog from "react-native-progress-dialog";
import { useNavigation } from "@react-navigation/native";
import { loginOffine, loginValidator } from "../controller/AuthController";
import { UserContext } from "../services/Context";
import Icon from "react-native-vector-icons/MaterialIcons";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [margem, setMargem] = useState(new Animated.Value(0));
  const [username, setUsername] = useState();
  const [loading, isLoading] = useState(false);
  const { setUser } = useContext(UserContext);

  const makeLogin = async () => {
    isLoading(true);
    if (loginValidator(username) === true) {
      try {
        // const response = await api.get(`users/login?username=${username}`);

        // const user = response.data;

        const user = await loginOffine(username);

        user ? setUser(user) : isLoading(false);
      } catch (error) {
        console.log(
          "🚀 ~ file: LoginScreen.js ~ line 42 ~ makeLogin ~ error",
          error
        );
        alert("Falha ao autenticar, verifique a conexao");
        isLoading(false);
      }
    } else {
      alert("Por favor preencha o campo de nome do utilizador");
      isLoading(false);
    }
  };

  const triggerCall = () => {
    const args = {
      number: "+258846805329",
      prompt: true,
      skipCanOpen: true,
    };
    //Fazer a chamada
    call(args).catch((error) => alert("Usa um celular"));
  };

  Animated.timing(margem, {
    toValue: 100,
    duration: 1000,
    useNativeDriver: false,
  }).start();

  return (
    <KeyboardAvoidingView
      style={styles.background}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ProgressDialog
        visible={loading}
        label="Por favor aguarde!"
        loaderColor="#FF9800"
      />
      <Animated.View
        style={{
          justifyContent: "center",
          marginTop: margem,
        }}
      >
        <TouchableOpacity
          style={styles.btnAdmin}
          onPress={() => {
            navigation.navigate("UpdateScreen");
          }}
        >
          <Icon name="sync" size={30} color="#ACDAEF" />
        </TouchableOpacity>

        <Image style={styles.img} source={require("../img/logoshadow.png")} />
      </Animated.View>

      <View style={styles.shadow}>
        <Image
          style={styles.imgShadow}
          source={require("../img/mainBackground.png")}
        />
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Utilizador/Contacto"
          placeholderTextColor={"grey"}
          onChangeText={(text) => setUsername(text)}
        />

        <TouchableOpacity style={styles.btnSubmit} onPress={makeLogin}>
          <Text style={styles.submitText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contact} onPress={triggerCall}>
          <Text style={styles.contactTxt}>Contactar Administrador</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  containerLogo: {},

  btnAdmin: {
    position: "absolute",
    bottom: 220,
    left: 150,
  },

  btnText: {
    color: "grey",
  },

  img: {
    width: 120,
    height: 200,
    resizeMode: "stretch",
  },

  shadow: {
    position: "absolute",
    top: 0,
    right: 0,
  },

  imgShadow: {
    height: 600,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    paddingBottom: 50,
  },
  input: {
    backgroundColor: "transparent",
    width: "90%",
    color: "black",
    marginBottom: 15,
    color: "black",
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
    borderColor: "#03A9F4",
    borderWidth: 1,
    textAlign: "center",
  },

  btnSubmit: {
    backgroundColor: "#FFA21A",
    width: "90%",
    height: 45,
    padding: 10,
    borderRadius: 7,
  },

  submitText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
  },

  contact: {
    marginTop: 50,
  },

  contactTxt: {
    fontSize: 14,
    color: "#B9BCBE",
    fontFamily: "Roboto_100Thin",
  },
});
