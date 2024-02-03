import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Screen } from "../../components/Screen";
import {
  Box,
  Button,
  ButtonText,
  ChevronDownIcon,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  Select,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectPortal,
  SelectTrigger,
} from "@gluestack-ui/themed";
import { AntDesign } from "@expo/vector-icons";
import { Icon } from "@gluestack-ui/themed";
import { SelectBackdrop } from "@gluestack-ui/themed";
import { SelectItem } from "@gluestack-ui/themed";
import { ButtonIcon } from "@gluestack-ui/themed";

export default function RegisterChemicals() {
  return (
    <Screen title="Detalhes" canGoBack>
      <Box />
      <Input
        mt={"$8"}
        variant="underlined"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
        sx={{
          ":focus": {
            borderColor: "#B8D3E0",
          },
        }}
      >
        <InputField placeholder="Quantidade" />
      </Input>

      <Input
        mt={"$8"}
        variant="underlined"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
        sx={{
          ":focus": {
            borderColor: "#B8D3E0",
          },
        }}
      >
        <InputField placeholder="Oservações" />
      </Input>

      <Input
        mt={"$8"}
        variant="underlined"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
        sx={{
          ":focus": {
            borderColor: "#B8D3E0",
          },
        }}
      >
        <InputField placeholder="Quantidade" />
      </Input>

      <Input
        mt={"$8"}
        variant="underlined"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
        sx={{
          ":focus": {
            borderColor: "#B8D3E0",
          },
        }}
      >
        <InputField placeholder="Categoria" />
      </Input>

      <Input
        mt={"$8"}
        variant="underlined"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
        sx={{
          ":focus": {
            borderColor: "#B8D3E0",
          },
        }}
      >
        <InputField placeholder="Subcategoria" />
      </Input>

      <Input
        mt={"$8"}
        variant="underlined"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
        sx={{
          ":focus": {
            borderColor: "#B8D3E0",
          },
        }}
      >
        <InputField placeholder="Tipo" />
      </Input>

      <Input
        mt={"$8"}
        variant="underlined"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
        sx={{
          ":focus": {
            borderColor: "#B8D3E0",
          },
        }}
      >
        <InputField placeholder="Status" />
      </Input>

      <Button
        mt={"$8"}
        size="md"
        height={50}
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
        borderRadius={14}
        bgColor="#B8D3E0"
      >
        <ButtonText>EDITAR</ButtonText>
      </Button>

      <Button
        mt={"$4"}
        size="md"
        height={50}
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
        borderRadius={14}
        bgColor="#B8D3E0"
      >
        <ButtonText>EXCLUIR</ButtonText>
      </Button>
    </Screen>
  );
}
