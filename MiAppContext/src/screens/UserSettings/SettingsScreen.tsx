import { View, Text, StyleSheet } from "react-native";
import ScreenWrapper from "../../components/ScreenWrapper";
import SectionTitle from "../../components/SectionTitle";
import CustomButton from "../../components/CustomButton";
import { useAuth } from "../../contexts/AuthContext";
import { useTheme } from "../../contexts/ThemeContext";

export default function SettingsScreen() {
  const { logout } = useAuth();
  const { colors } = useTheme();

  return (
    <ScreenWrapper>
      <SectionTitle
        title="Consola de Administración"
        subtitle="Configuraciones exclusivas de la cuenta"
      />

      <View style={[styles.adminCard, { backgroundColor: colors.inputBackground }]}>
        <Text style={[styles.indicatorText, { color: colors.secondary }]}>
          estas en Settings
        </Text>
        <Text style={[styles.subText, { color: colors.textSecondary }]}>
          Este panel solo es visible debido a tus permisos elevados de Administrador.
        </Text>
      </View>

      <CustomButton title="Cerrar sesión" onPress={logout} variant="secondary" />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  adminCard: {
    padding: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 20,
    alignItems: "center",
  },
  indicatorText: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
  },
  subText: {
    fontSize: 13,
    textAlign: "center",
  },
});