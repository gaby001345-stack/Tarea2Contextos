import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CustomButton from "../components/CustomButton";
import ScreenWrapper from "../components/ScreenWrapper";
import SectionTitle from "../components/SectionTitle";
import { useAuth, Role } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";

export default function LoginScreen() {
  const [selectedRole, setSelectedRole] = useState<Role>("common");
  const { login } = useAuth();
  const { colors } = useTheme();

  return (
    <ScreenWrapper>
      <SectionTitle
        title="Control de Operaciones"
        subtitle="Selecciona tu perfil de acceso para arrancar el sistema"
      />

      <View style={styles.roleContainer}>
        <TouchableOpacity
          style={[
            styles.roleCard,
            { backgroundColor: colors.inputBackground },
            selectedRole === "common" && { borderColor: colors.secondary, borderWidth: 2 },
          ]}
          onPress={() => setSelectedRole("common")}
        >
          <View style={[styles.radioCircle, { borderColor: colors.primary }]}>
            {selectedRole === "common" && (
              <View style={[styles.radioDot, { backgroundColor: colors.secondary }]} />
            )}
          </View>
          <Text style={[styles.roleText, { color: colors.buttonTertiaryText }]}>
            Usuario Común (Common)
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.roleCard,
            { backgroundColor: colors.inputBackground },
            selectedRole === "admin" && { borderColor: colors.secondary, borderWidth: 2 },
          ]}
          onPress={() => setSelectedRole("admin")}
        >
          <View style={[styles.radioCircle, { borderColor: colors.primary }]}>
            {selectedRole === "admin" && (
              <View style={[styles.radioDot, { backgroundColor: colors.secondary }]} />
            )}
          </View>
          <Text style={[styles.roleText, { color: colors.buttonTertiaryText }]}>
            Administrador (Admin)
          </Text>
        </TouchableOpacity>
      </View>

      <CustomButton title="Ingresar" onPress={() => login(selectedRole)} />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  roleContainer: {
    gap: 12,
    marginBottom: 24,
    marginTop: 10,
  },
  roleCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "gray",
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  roleText: {
    fontSize: 15,
    fontWeight: "600",
  },
});