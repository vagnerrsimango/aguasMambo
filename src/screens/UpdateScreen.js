import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const UpdateScreen = () => {
  const handleUpload = () => {};

  const handleDownload = () => {};

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../img/logoshadow.png")} />
      <Text style={styles.subtitle}>Atualização dos dados</Text>
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
