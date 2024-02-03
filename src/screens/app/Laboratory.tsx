import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Screen } from "../../components/Screen";
import {
  AddIcon,
  Box,
  Button,
  ButtonIcon,
  ButtonText,
  Fab,
  FabIcon,
  FabLabel,
  Heading,
  Input,
  InputField,
} from "@gluestack-ui/themed";

export default function Profile() {
  return (
    <Screen title="Laboratório" canGoBack>
      <Box />
      <Heading
        mt={80}
        color="#FFFFFF"
        textAlign="center"
        fontSize={18}
        fontWeight="regular"
      >
        Informações do Laboratório
      </Heading>

      <Input
        mt={"$20"}
        variant="underlined"
        size="md"
        isDisabled={true}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField placeholder="Instituição de Ensino" />
      </Input>

      <Input
        mt={"$5"}
        variant="underlined"
        size="md"
        isDisabled={true}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField placeholder="Nome do Laboratório" />
      </Input>

      <Input
        mt={"$5"}
        variant="underlined"
        size="md"
        isDisabled={true}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField placeholder="Código de Acesso" />
      </Input>

      <Box
        h={320}
        w={360}
        borderRadius="$md"
      >
        <Fab
          size="lg"
          bgColor="#355666"
          placement="bottom right"
          isHovered={false}
          isDisabled={false}
          isPressed={false}
        >
          <FabIcon as={AddIcon} mr="$0" />
        </Fab>
      </Box>
    </Screen>
  );
}
