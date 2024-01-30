import { Box } from "@gluestack-ui/themed";
import { useAppSafeArea } from "../../hooks/useAppSafeArea";
import { ScreenHeader } from "./components/ScreenHeader";
import React from "react";

export interface ScreenProps {
  children: React.ReactNode;
  title?: string;
  canGoBack?: boolean;
  rightIcon?: React.ReactNode;

}

export function Screen({ children, title, canGoBack, rightIcon }: ScreenProps) {
  const { top, bottom } = useAppSafeArea();

  return (
    <Box
      flex={1}
      paddingHorizontal="$6"
      style={{ paddingTop: top, paddingBottom: bottom}}
    >
        <ScreenHeader title={title} canGoBack={canGoBack} rightIcon={rightIcon}/>
      {children}
    </Box>
  );
}
