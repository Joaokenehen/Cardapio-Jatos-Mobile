# ✈️ Cardápio Jatos Mobile | Catálogo de Defesa Aérea

Bem-vindo ao repositório oficial do **Cardápio Jatos Mobile**, uma aplicação móvel de alta performance desenvolvida para entusiastas de aviação militar. O app funciona como um catálogo interativo dos caças e bombardeiros mais avançados do mundo.

Este projeto foi construído com foco em **performance e tipagem rigorosa**, oferecendo uma interface intuitiva com filtragem dinâmica por nação e detalhamento técnico completo de cada aeronave.

---

## 🚀 Funcionalidades Principais

- **Catálogo Dinâmico:** Listagem renderizada via `FlatList` para máxima performance, exibindo nome, preço e origem.
- **Filtro por País:** Sistema de filtragem em tempo real que permite navegar entre caças de diferentes nações.
- **Navegação Nativa:** Fluxo de telas fluido entre o Catálogo e Detalhes utilizando `React Navigation`.
- **Interface High-Tech:** Design moderno em *Dark Mode* com paleta de cores militar e componentes estilizados.
- **Segurança de Dados:** Implementação completa com **TypeScript**, garantindo que as propriedades de navegação e dados dos itens estejam sempre protegidas.

---

## 🛠️ Tecnologias Utilizadas

O sistema utiliza as bibliotecas líderes do ecossistema mobile atual:

- **React Native (0.79.5)** + **Expo (SDK 53)**: Framework base para desenvolvimento nativo.
- **TypeScript (5.8.3)**: Para desenvolvimento robusto e livre de erros de tipagem.
- **React Navigation**: Gerenciamento de rotas e pilha de telas (Stack).
- **Expo Router**: Sistema de roteamento baseado em arquivos para melhor organização.
- **Lucide React Native**: Ícones modernos e minimalistas.

---

## 📂 Estrutura do Projeto

O código segue padrões de modularização para facilitar a manutenção:

- `/app`: Ponto de entrada e rotas principais do Expo Router.
- `/screen`: Telas completas da aplicação (Cardapio e Detalhes).
- `/components`: Componentes desacoplados, como o sistema de filtros e headers.
- `/data`: Camada de persistência de dados estáticos (Itens do catálogo).
- `/types`: Definições globais de interfaces e tipos de navegação.

---

Instale as dependências:

Bash
npm install
Inicie o servidor de desenvolvimento:

Bash
npx expo start

👨‍💻 Autor
João Gustavo Quennehen Estudante de Análise e Desenvolvimento de Sistemas e Desenvolvedor Enthusiast.

## 🔧 Como Rodar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone [https://github.com/Joaokenehen/cardapio-jatos-mobile.git](https://github.com/Joaokenehen/cardapio-jatos-mobile.git)
