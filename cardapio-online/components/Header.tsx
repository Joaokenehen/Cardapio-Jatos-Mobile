import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Cardápio Digital</Text>
      <TouchableOpacity>
        <Text style={styles.menu}>Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginBottom: 22,
    bottom: 20,
    backgroundColor: "#FF9500",
    paddingTop: 50,
    paddingBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 8,
  },

  menu: {
    marginTop: 10,
    fontSize: 18,
  },
});
