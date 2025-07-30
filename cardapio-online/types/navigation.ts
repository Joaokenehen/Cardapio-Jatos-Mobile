import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  Cardapio: undefined;
  Detalhes: {
    aviao: Aviao;
  };
};

export type Aviao = {
  id: string;
  nome: string;
  pais: string;
  descricao: string;
  preco: string;
  imagem: string;
};
