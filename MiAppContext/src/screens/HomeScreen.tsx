import { View, Text, StyleSheet } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import SectionTitle from "../components/SectionTitle";
import CustomButton from "../components/CustomButton";
import { useAuth } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";

export default function HomeScreen() {
  const { role, logout } = useAuth();
  const { colors } = useTheme();

  return (
    <ScreenWrapper>
      <SectionTitle title="Panel de Inicio" subtitle="Centro de visualización básica" />

      <View style={[styles.infoCard, { backgroundColor: colors.inputBackground }]}>
        <Text style={[styles.text, { color: colors.buttonTertiaryText }]}>
          Tu nivel de acceso actual es:{" "}
          <Text style={{ fontWeight: "bold", color: colors.secondary }}>{role}</Text>
        </Text>
      </View>

      <CustomButton title="Cerrar sesión" onPress={logout} variant="secondary" />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  infoCard: {
    padding: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
});