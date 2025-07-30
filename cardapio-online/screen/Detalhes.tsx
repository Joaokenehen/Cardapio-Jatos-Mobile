import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Animated,
} from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation";

const { height } = Dimensions.get("window");

type DetalhesRouteProp = RouteProp<RootStackParamList, "Detalhes">;

const Detalhes = () => {
  const route = useRoute<DetalhesRouteProp>();

  const { aviao } = route.params;

  const [mensagem, setMensagem] = useState("");
  const animacao = useRef(new Animated.Value(height)).current;

  const handleAdicionar = () => {
    setMensagem(`Você adicionou ${aviao.nome} ao seu carrinho!`);

    setTimeout(() => {
      setMensagem("");
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: aviao.imagem }} style={styles.imagem} />
      <Text style={styles.nome}>{aviao.nome}</Text>
      <Text style={styles.descricao}>{aviao.descricao}</Text>
      <Text style={styles.preco}>{aviao.preco}</Text>

      <TouchableOpacity style={styles.button} onPress={handleAdicionar}>
        <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>

      {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  imagem: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
  nome: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF9500",
    marginTop: 20,
  },
  descricao: {
    color: "#fff",
    marginTop: 10,
    fontSize: 16,
  },
  preco: {
    color: "#19A400",
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  mensagem: {
    color: "#19A400",
    marginTop: 15,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Detalhes;
