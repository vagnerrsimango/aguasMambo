import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomIcon from './CustomIcon';

export default function HeaderAdmin({ retornar }) {
  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.backBtn} onPress={retornar}>
        <CustomIcon
          icon="angle-left"
          source="FontAwesome"
          style={{ alignItems: 'center' }}
        />
      </TouchableOpacity>

      <View style={styles.header}>
        <View style={styles.alt}>
          <Text style={styles.headerText}>Administrador</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop: '12%',
    marginBottom: '3%',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 0,
  },
  backBtn: {
    position: 'absolute',
    left: '2%',
    width: 'auto',
    height: '45%',
    top: '42%',

    paddingHorizontal: 18,
    paddingVertical: 8,
    backgroundColor: '#0080BA40',
    borderRadius: 20,
    zIndex: 10,
  },
  headerText: {
    fontSize: 18,
    color: '#fff',
    textTransform: 'uppercase',
    fontFamily: 'Roboto_300Thin',
  },

  alt: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#0080BA40',
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 40,
  },
});
