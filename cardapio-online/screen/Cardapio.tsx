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

const avioes = [
  {
    id: "1",
    nome: "F-22 Raptor",
    pais: "Estados Unidos",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/F-22_Raptor_edit1_%28cropped%29.jpg/330px-F-22_Raptor_edit1_%28cropped%29.jpg",
    descricao:
      "Caça furtivo norte-americano de 5ª geração com foco em superioridade aérea.",
    preco: "U$350.000.000,00",
  },
  {
    id: "2",
    nome: "Su-57",
    pais: "Rússia",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Sukhoi_Design_Bureau%2C_054%2C_Sukhoi_Su-57_%2849581303977%29.jpg",
    descricao:
      "Caça russo furtivo de 5ª geração com capacidades multirole e alta manobrabilidade.",
    preco: "U$35.000.000,00",
  },
  {
    id: "3",
    nome: "Dassault Rafale",
    pais: "França",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Rafale_-_RIAT_2009_%283751416421%29.jpg/1200px-Rafale_-_RIAT_2009_%283751416421%29.jpg",
    descricao:
      "Caça francês multifunção altamente versátil, usado para missões ar-ar e ar-solo.",
    preco: "U$100.000.000,00",
  },
  {
    id: "4",
    nome: "F-15EX Eagle II",
    pais: "Estados Unidos",
    imagem: "https://www.aereo.jor.br/wp-content/uploads//2025/02/F-15EX.jpg",
    descricao:
      "Caça norte-americano pesado de superioridade aérea com alta capacidade de carga.",
    preco: "U$93.000.000,00",
  },
  {
    id: "5",
    nome: "F-35A Lighthing II",
    pais: "Estados Unidos",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/1/17/A_U.S._Air_Force_pilot_navigates_an_F-35A_Lightning_II_aircraft_assigned_to_the_58th_Fighter_Squadron%2C_33rd_Fighter_Wing_into_position_to_refuel_with_a_KC-135_Stratotanker_assigned_to_the_336th_Air_Refueling_130516-F-XL333-496.jpg",
    descricao:
      "Caça furtivo norte-americano de 5ª geração com tecnologia stealth multifunção.",
    preco: "U$82.000.000,00",
  },
  {
    id: "6",
    nome: "B-2 Spirit",
    pais: "Estados Unidos",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/B-2_Spirits_on_Deployment_to_Indo-Asia-Pacific.jpg/640px-B-2_Spirits_on_Deployment_to_Indo-Asia-Pacific.jpg",
    descricao:
      "Bombardeiro furtivo norte-americano de longo alcance com tecnologia stealth para missões estratégicas.",
    preco: "U$2.100.000.000,00",
  },
  {
    id: "7",
    nome: "JAS 39 Gripen",
    pais: "Suécia",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/e/e3/Saab_JAS_39_Gripen_at_Kaivopuisto_Air_Show%2C_June_2017_%28altered%29_copy.jpg",
    descricao:
      "Caça leve sueco multifunção com alta eficiência, custo reduzido e ótima manobrabilidade.",
    preco: "U$85.000.000,00",
  },
  {
    id: "8",
    nome: "MiG-35 Fulcrum-F",
    pais: "Rússia",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Mikoyan-Gurevich_MiG-35_MAKS%272007_Pichugin.jpg/960px-Mikoyan-Gurevich_MiG-35_MAKS%272007_Pichugin.jpg",
    descricao:
      "Caça russo multifunção de 4ª geração+, com radar moderno e boa relação custo-benefício.",
    preco: "U$45.000.000,00",
  },
  {
    id: "9",
    nome: "Chengdu J-20 Mighty Dragon",
    pais: "China",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/J-20_at_CCAS2022_%2820220827103424%29.jpg/1200px-J-20_at_CCAS2022_%2820220827103424%29.jpg",
    descricao:
      "Caça furtivo chinês de 5ª geração com design stealth e longo alcance.",
    preco: "U$120.000.000,00",
  },
  {
    id: "10",
    nome: "F/A-18E/F Super Hornet",
    pais: "Estados Unidos",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/d/de/US_Navy_071203-N-8923M-074_An_F-A-18F_Super_Hornet%2C_from_the_Red_Rippers_of_Strike_Fighter_Squadron_%28VFA%29_11%2C_makes_a_sharp_turn_above_the_flight_deck_aboard_the_Nimitz-class_nuclear-powered_aircraft_carrier_USS_Harry_S._Truman.jpg",
    descricao:
      "Caça norte-americano embarcado, versátil, usado amplamente pela Marinha dos EUA.",
    preco: "U$67.000.000,00",
  },
  {
    id: "11",
    nome: "HAL Tejas",
    pais: "Índia",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/HAL_Tejas_%28LA-5018%29_of_Squadron_18_Flying_Bullets.jpg",
    descricao:
      "Caça leve indiano desenvolvido localmente, focado em agilidade e baixo custo operacional.",
    preco: "U$50.000.000,00",
  },
  {
    id: "12",
    nome: "Eurofighter Typhoon",
    pais: "Europeus",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/RAF_Eurofighter_EF-2000_Typhoon_F2_Lofting-1.jpg",
    descricao:
      "Caça europeu multifunção ágil, desenvolvido em consórcio por Reino Unido, Alemanha, Itália e Espanha.",
    preco: "U$110.000.000,00",
  },
];

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
      <Text style={styles.nome}>{item.nome}</Text>

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
    marginTop: 10,
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
});
