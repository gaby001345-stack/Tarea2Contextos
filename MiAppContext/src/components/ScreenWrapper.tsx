import { StyleSheet, SafeAreaView, View } from "react-native";
import { ReactNode } from "react";
import { useTheme } from "../contexts/ThemeContext";

export default function ScreenWrapper({ children }: { children: ReactNode }) {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
});