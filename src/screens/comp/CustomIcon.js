import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

const CustomIcon = ({ icon, source = 'AntDesign' }) => {
  switch (source) {
    case 'FontAwesome':
      return <FontAwesome name={icon} size={24} color="white" />;
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons name={icon} size={24} color="white" />;

    default:
      return <AntDesign name={icon} size={24} color="white" />;
  }
};

export default CustomIcon;
