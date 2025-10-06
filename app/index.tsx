import { useFonts } from "expo-font";
import React from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.topIllustration}>
        <View style={styles.imageCircle}>
          <Image
            source={require("../Imagens/Imagem_inicial.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>

      <View style={styles.textBlock}>
        <Text style={styles.welcome}>Bem vindo à</Text>
        <Text style={styles.appName}>Tempfy</Text>

        <Text style={styles.description}>
          Neste aplicativo você poderá controlar seus aparelhos <Text style={styles.Destaque}>Tempfy</Text>.
          {'\n'}Para começar, clique em <Text style={styles.Destaque}>Login</Text> caso já possua uma conta ou em <Text style={styles.Destaque}>Cadastrar</Text>.
        </Text>
      </View>

      <View style={styles.buttonsRow}>
        <Pressable
          onPress={() => {}}
          style={({ pressed }) => [
            styles.primaryButton,
            pressed && styles.buttonPressed,
            { transform: [{ scale: pressed ? 0.96 : 1 }] },
          ]}
        >
          <Text style={styles.primaryButtonText}>Login</Text>
        </Pressable>

        <Pressable
          onPress={() => {}}
          style={({ pressed }) => [
            styles.secondaryButton,
            pressed && styles.buttonPressed,
            { transform: [{ scale: pressed ? 0.96 : 1 }] },
          ]}
        >
          <Text style={styles.secondaryButtonText}>Cadastrar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const BG_COLOR = "#99b7cf"; // approximate bluish background from image
const CARD_BG = "#e4f0f8";
const ACCENT = "#2f5f85";

const styles = StyleSheet.create({
  Destaque: {
    color: ACCENT,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "android" ? 40 : 60,
    paddingBottom: 80,
  },
  topIllustration: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  imageCircle: {
    width: Math.min(260, width * 0.7),
    height: Math.min(260, width * 0.7),
    borderRadius: 999,
    backgroundColor: CARD_BG,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textBlock: {
    width: "85%",
    alignItems: "center",
    marginTop: -50, 
  },
  welcome: {
    color: "#ffffff",
    fontSize: 30,
    marginBottom: -6,
  },
  appName: {
    color: ACCENT,
    fontSize: 35,
    fontWeight: "700",
    marginBottom: 20,
  },
  description: {
    color: "#e8f2f8",
    fontSize: 18,
    textAlign: "center",
    lineHeight: 22,
  },
  buttonsRow: {
    width: "85%",
    alignItems: "center",
  },
  primaryButton: {
    backgroundColor: ACCENT,
    width: "100%",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 12,
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
  secondaryButton: {
    backgroundColor: ACCENT,
    width: "100%",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
  buttonPressed: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 10,
    opacity: 0.9,
  },
});

