import react from "react";
import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import FiltrarPorPais from "@/components/FiltroPorPais";
import { avioes } from "../data/ItensCardapio";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Cardapio">;

export default function Cardapio() {
  const navigation = useNavigation<NavigationProp>();
  const [paisFiltro, setPaisFiltro] = useState("Todos");

  const filtrarAvioes = () => {
    if (paisFiltro === "Todos") return avioes;
    return avioes.filter((a) =>
      a.pais.toLowerCase().includes(paisFiltro.toLowerCase())
    );
  };

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("Detalhes", { aviao: item })}
    >
      <Image source={{ uri: item.imagem }} style={styles.imagem} />
      <View style={styles.nomeComBandeira}>
        <Image source={{ uri: item.bandeira }} style={styles.bandeira} />
        <Text style={styles.nome}>{item.nome}</Text>
      </View>

      <Text style={styles.preco}>{item.preco}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Catálogo de Caças</Text>
      <FiltrarPorPais
        onFiltrar={(paisSelecionado) => setPaisFiltro(paisSelecionado)}
        paisSelecionado={paisFiltro}
      />
      <FlatList
        data={filtrarAvioes()} // ← aqui!
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={1}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Centraliza verticalmente
    alignItems: "center", // Centraliza horizontalmente
    backgroundColor: "#000",
  },
  lista: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#222",
    flex: 1,
    margin: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    width: 350,
  },
  imagem: {
    width: 280,
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
    marginTop: 30,
    bottom: 10,
  },
  nome: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  descricao: {
    color: "#ccc",
    fontSize: 12,
    textAlign: "center",
    marginTop: 4,
  },
  preco: {
    color: "#00FF99",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF9500", // Laranja metálico
    marginBottom: 70,
    textAlign: "center",
    backgroundColor: "#222", // Fundo cinza escuro
    padding: 15,
    borderRadius: 30,
    width: 300,
    top: 60,
  },
  bandeira: {
    width: 24,
    height: 16,
    marginRight: 8,
  },
  nomeComBandeira: {
    flexDirection: "row", // Alinha os itens na horizontal
    alignItems: "center", // Alinha verticalmente ao centro
    marginTop: 10,
  },
});
