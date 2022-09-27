// SearchBar.js
import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import styles from "./styles";

const SearchBar = ({
  clicked,
  filter,
  setFilter,
  setClicked,
  handleFilterChange,
  cancel,
}) => {
  const cancelSearch = (e) => {
    cancel(e);
  };
  return (
    <View style={styles.container}>
      <View
        style={
          clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Pesquisar cliente"
          value={filter}
          onChangeText={handleFilterChange}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo
            name="cross"
            size={20}
            color="black"
            style={{ padding: 1 }}
            onPress={() => {
              setFilter("");
            }}
          />
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {clicked && (
        <View>
          <Button
            title="Cancelar"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
              cancel(true);
            }}
          ></Button>
        </View>
      )}
    </View>
  );
};
export default SearchBar;
