import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";

interface FiltroPorPaisProps {
  onFiltrar: (pais: string) => void;
  paisSelecionado: string;
}

export default function FiltrarPorPais({
  onFiltrar,
  paisSelecionado,
}: FiltroPorPaisProps) {
  const [modalVisible, setModalVisible] = useState(false);

  const paises = [
    "Todos",
    "Estados Unidos",
    "Rússia",
    "França",
    "Suécia",
    "Índia",
    "China",
    "Europeus",
  ];

  const selecionarPais = (pais: string) => {
    onFiltrar(pais);
    setModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.botaoFiltro}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textoBotaoFiltro}>
          Filtrar por país: {paisSelecionado}
        </Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {paises.map((pais) => (
              <Pressable
                key={pais}
                onPress={() => selecionarPais(pais)}
                style={styles.opcaoModal}
              >
                <Text style={styles.textoOpcao}>{pais}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  botaoFiltro: {
    backgroundColor: "#FF9500",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: "center",
    marginBottom: 10,
  },
  textoBotaoFiltro: {
    color: "#000",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#1a1a1a",
    borderRadius: 10,
    padding: 20,
    width: "80%",
  },
  opcaoModal: {
    paddingVertical: 10,
    borderBottomColor: "#444",
    borderBottomWidth: 1,
  },
  textoOpcao: {
    color: "#fff",
    textAlign: "center",
  },
});
