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

export default function RegisterChemicals() {
  return (
    <Screen title="Cadastrar" canGoBack>
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
        <InputField placeholder="Nome do Insumo" />
        <InputSlot margin={10}>
          <InputIcon>
            {<AntDesign name="closecircle" size={16} color="white" />}
          </InputIcon>
        </InputSlot>
      </Input>

      <Input
        mt={"$4"}
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
        <InputField placeholder="Observações" />
        <InputSlot margin={10}>
          <InputIcon>
            {
              <AntDesign
                name="closecircle"
                size={16}
                color="white"
                justifyContent="flex-end"
              />
            }
          </InputIcon>
        </InputSlot>
      </Input>

      <Input
        mt={"$4"}
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
        <InputSlot margin={10}>
          <InputIcon>
            {
              <AntDesign
                name="closecircle"
                size={16}
                color="white"
                justifyContent="flex-end"
              />
            }
          </InputIcon>
        </InputSlot>
      </Input>

      <Select mt={"$4"}>
        <SelectTrigger variant="underlined" size="md">
          <SelectInput placeholder="Categoria" />
          <SelectIcon mr="$3">
            <Icon as={ChevronDownIcon} />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            <SelectItem label="Reagente" value="Reagente" />
            <SelectItem label="Equipamento" value="Equipamento" />
            <SelectItem label="Insumos" value="Insumos" />
            <SelectItem label="Outros" value="Outros" />
          </SelectContent>
        </SelectPortal>
      </Select>

      <Select mt={"$4"}>
        <SelectTrigger variant="underlined" size="md">
          <SelectInput placeholder="Subcategoria" />
          <SelectIcon mr="$3">
            <Icon as={ChevronDownIcon} />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            <SelectItem label="Lorem Ipsum" value="Lorem Ipsum" />
            <SelectItem label="Lorem Ipsum" value="Lorem Ipsum" />
            <SelectItem label="Lorem Ipsum" value="Lorem Ipsum" />
            <SelectItem
              label="Lorem Ipsum"
              value="Lorem Ipsum"
              isDisabled={true}
            />
            <SelectItem label="Lorem Ipsum" value="Lorem Ipsum" />
          </SelectContent>
        </SelectPortal>
      </Select>

      <Select mt={"$4"}>
        <SelectTrigger variant="underlined" size="md">
          <SelectInput placeholder="Tipo" />
          <SelectIcon mr="$3">
            <Icon as={ChevronDownIcon} color="" />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            <SelectItem label="Hidróxidos" value="Hidróxidos" />
            <SelectItem label="Solventes" value="Solventes" />
            <SelectItem label="Indicadores" value="Indicadores" />
            <SelectItem label="Padrões" value="Padrões" />
            <SelectItem label="Ácidos" value="Ácidos" />
            <SelectItem label="Sais" value="Sais" />
            <SelectItem label="Outros" value="Outros" />
          </SelectContent>
        </SelectPortal>
      </Select>

      <Select mt={"$4"}>
        <SelectTrigger variant="underlined" size="md">
          <SelectInput placeholder="Status" />
          <SelectIcon mr="$3">
            <Icon as={ChevronDownIcon} />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            <SelectItem label="Ativo" value="Ativo" />
            <SelectItem label="Em falta" value="Em falta" />
          </SelectContent>
        </SelectPortal>
      </Select>

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
        <ButtonText>CADASTRAR</ButtonText>
      </Button>
    </Screen>
  );
}
