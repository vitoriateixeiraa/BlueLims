import "react-native-gesture-handler";

import Routes from "./src/routes";

import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <Routes />
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}
