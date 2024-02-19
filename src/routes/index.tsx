import { NavigationContainer } from "@react-navigation/native";

import { AuthStack } from "./auth.stack";
import { AppStack } from "./app.stack";

export default function Routes() {
  const isAuthenticated = true;

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
