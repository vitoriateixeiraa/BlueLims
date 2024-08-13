import { useSafeAreaInsets } from "react-native-safe-area-context";

export function useAppSafeArea() {
  const { top, bottom } = useSafeAreaInsets();

  return {
    top: Math.max(top, 16),
    bottom: Math.max(bottom, 16),
  };
}
