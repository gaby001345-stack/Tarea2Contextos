import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/contexts/AuthContext";
import { ThemeProvider } from "./src/contexts/ThemeContext";
import StackNavigator from "./src/navigation/StackNavigator";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </AuthProvider>
    </ThemeProvider>
  );
}