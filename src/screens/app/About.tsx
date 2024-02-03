import React from "react";
import { Screen } from "../../components/Screen";
import { Box } from "@gluestack-ui/themed";
import { Logo } from "../../components/Logo";
import { Text } from "@gluestack-ui/themed";

export default function About() {
  return (
    <Screen title="Sobre" canGoBack>
      <Box />

      <Logo></Logo>

      <Text mt={16} marginBottom={160} textAlign="left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. {"\n"}
        {"\n"}
        Desenvolvido por:{"\n"}
        Rafaela Barros{"\n"}
        Tiago Segato{"\n"}
        Vitória Teixeira
      </Text>
    </Screen>
  );
}
