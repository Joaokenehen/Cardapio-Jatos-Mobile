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
import BotaoLucas from "../components/BotaoLucas";

const { height } = Dimensions.get("window");

type DetalhesRouteProp = RouteProp<RootStackParamList, "Detalhes">;

const Detalhes = () => {
  const route = useRoute<DetalhesRouteProp>();

  const { aviao } = route.params;

  const [mensagem, setMensagem] = useState("");
  const animacao = useRef(new Animated.Value(height)).current;

  const [animando, setAnimando] = useState(false);

  const handleAdicionar = () => {
    if (animando) return;

    setMensagem(`Você adicionou ${aviao.nome} ao seu carrinho!`);
    setAnimando(true);

    Animated.timing(animacao, {
      toValue: height - 150,
      duration: 400,
      useNativeDriver: false,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(animacao, {
          toValue: height,
          duration: 400,
          useNativeDriver: false,
        }).start(() => {
          setMensagem("");
          setAnimando(false);
        });
      }, 2500);
    });
  };

  const handleLucas = () => {
    if (animando) return;

    setMensagem(`${aviao.nome} adicionado aos favoritos`);
    setAnimando(true);

    Animated.timing(animacao, {
      toValue: height - 120,
      duration: 400,
      useNativeDriver: false,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(animacao, {
          toValue: height,
          duration: 400,
          useNativeDriver: false,
        }).start(() => {
          setMensagem("");
          setAnimando(false);
        });
      }, 2500);
    });
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: aviao.imagem }} style={styles.imagem} />
      <View style={styles.nomeComBandeira}>
        <Image source={{ uri: aviao.bandeira }} style={styles.bandeira} />
        <Text style={styles.nome}>{aviao.nome}</Text>
      </View>
      <Text style={styles.descricao}>{aviao.descricao}</Text>
      <Text style={styles.preco}>{aviao.preco}</Text>
      <BotaoLucas onPress={handleLucas} />

      {mensagem !== "" && (
        <Animated.View style={[styles.mensagemContainer, { top: animacao }]}>
          <Text style={styles.mensagem}>{mensagem}</Text>
        </Animated.View>
      )}

      <TouchableOpacity style={styles.button} onPress={handleAdicionar}>
        <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>
      {mensagem !== "" && (
        <Animated.View style={[styles.mensagemContainer, { top: animacao }]}>
          <Text style={styles.mensagem}>{mensagem}</Text>
        </Animated.View>
      )}
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
    backgroundColor: "#222",
    color: "#19A400",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  mensagemContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  nomeComBandeira: {
    flexDirection: "row", // Essencial para alinhar itens lado a lado
    alignItems: "center", // Essencial para alinhar verticalmente
    justifyContent: "center", // Opcional: para centralizar o conjunto
    marginVertical: 15,
  },
  bandeira: {
    width: 32, // Tamanho de exemplo
    height: 24, // Tamanho de exemplo
    marginRight: 15,
    top: 10,
  },
});

export default Detalhes;
