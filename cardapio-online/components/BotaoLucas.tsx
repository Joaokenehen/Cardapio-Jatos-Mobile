import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  onPress: () => void;
};

const BotaoLucas = ({ onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.botaoTexto}>Favoritar</Text>
    </TouchableOpacity>
  );
};

export default BotaoLucas;

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "#FF9500", // cor laranja forte
    paddingVertical: 12, // espaço em cima e embaixo
    paddingHorizontal: 20, // espaço nas laterais
    borderRadius: 10, // cantos arredondados
    alignItems: "center", // centraliza o texto
    marginVertical: 10, // espaço externo
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // sombra no Android
  },
  botaoTexto: {
    color: "#fff", // texto branco
    fontSize: 16,
    fontWeight: "bold",
  },
});
