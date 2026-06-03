import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useTheme } from "../contexts/ThemeContext";

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
};

export default function CustomButton({ title, onPress, variant = "primary" }: CustomButtonProps) {
  const { colors } = useTheme();

  const isPrimary = variant === "primary";

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: isPrimary ? colors.buttonPrimaryBg : colors.buttonSecondaryBg,
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          {
            color: isPrimary ? colors.buttonPrimaryText : colors.buttonSecondaryText,
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
    width: "100%",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});