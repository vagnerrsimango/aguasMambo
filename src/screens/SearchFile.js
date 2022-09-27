import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useEffect, useState, useContext } from "react";
import Header from "../screens/comp/Header";
import Client from "../components/Client";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../services/Context";
import api from "../services/api";
import { getOfflineClients } from "../controller/Clients.controller";

const SearchFile = ({ route }) => {
  const [clients, setClients] = useState(route.params.clients);
  const { user, setUser } = useContext(UserContext);

  const navigation = useNavigation();

  const retornar = () => {
    setUser(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <ScrollView>
          <View style={styles.header}>
            <Header navigateTo={() => navigation.goBack()} />
          </View>
          {/* <Client/> */}
          <View style={styles.body}>
            <FlatList
              style={styles.card}
              data={clients}
              renderItem={(item) => (
                <Client
                  client={item}
                  callScreen={() => navigation.navigate("DetailClient", item)}
                />
              )}
              key={(item) => item.phone}
            />
          </View>
        </ScrollView>
        <Image style={styles.gota1} source={require("../img/bg1.png")} />
        <View style={styles.imgGotas}>
          <Image
            style={styles.gota2}
            source={require("../img/waterdrop.png")}
          />
          <Image
            style={styles.gota2}
            source={require("../img/waterdrop2.png")}
          />
          <Image
            style={styles.gota2}
            source={require("../img/waterdrop.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#03293A",
    alignContent: "center",
    justifyContent: "center",
  },
  container2: {
    top: "1%",
    borderBottomRightRadius: 1,
    height: "100%",
    zIndex: 10,
  },
  card: {
    padding: 16,
    backgroundColor: "white",
    borderRadius: 60,
    marginTop: 8,
  },
  header: {
    backgroundColor: "#03293A",
    flex: 0.6,
  },

  body: {
    backgroundColor: "#F2F2F2",
    height: "100%",
    borderRadius: 60,
    paddingBottom: "100%",
  },

  clients: {
    backgroundColor: "#fff",
    flex: 1,
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

export default SearchFile;
