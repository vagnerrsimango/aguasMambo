import { StyleSheet, View, Image, FlatList, ScrollView } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import Header from "../screens/comp/Header";
import Client from "../components/Client";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../services/Context";
import { getOfflineClients } from "../controller/Clients.controller";
import SearchBar from "./comp/SearchBar";
import { filterByValue } from "../services/utill";

const DataCollection = (props) => {
  const [clients, setClients] = useState([]);
  const [auxclients, setAuxClients] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const [zone, setZone] = useState(props.route.params.item);
  const [isSearching, setSearching] = useState(false);
  const [filter, setFilter] = useState("");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    async function getZone() {
      const response = await getOfflineClients(zone.name);
      setClients(response);
      setAuxClients(response);
    }
    getZone();

    return () => {};
  }, []);
  const navigation = useNavigation();

  const retornar = () => {
    setUser(null);
  };

  const handleFilterChange = (e) => {
    setFilter(e);

    if (isSearching) {
      setClients(filterByValue(auxclients, e));
    } else {
      setClients(auxclients);
    }
  };
  const handleSearchChange = () => {
    if (!isSearching) {
      setSearching(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <ScrollView>
          <View style={styles.header}>
            {isSearching ? (
              <SearchBar
                filter={filter}
                setFilter={setFilter}
                clicked={clicked}
                setClicked={setClicked}
                cancel={() => {
                  setFilter("");
                  setSearching(false);
                  setClients(auxclients);
                }}
                handleFilterChange={handleFilterChange}
              />
            ) : (
              <Header
                txt1={zone.name}
                txt2={zone.houses}
                retornar={retornar}
                navigateTo={handleSearchChange}
              />
            )}
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

export default DataCollection;
