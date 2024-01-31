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
            borderColor: "#355666",
          },
        }}
      >
        <InputSlot>
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
        <InputField placeholder="Nome do Insumo" />
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
            borderColor: "#355666",
          },
        }}
      >
        <InputSlot>
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
        <InputField placeholder="Observações" />
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
            borderColor: "#355666",
          },
        }}
      >
        <InputSlot>
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
        <InputField placeholder="Quantidade" />
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
            <SelectItem label="Lorem Ipsum" value="Lorem Ipsum" />
            <SelectItem label="Lorem Ipsum" value="Lorem Ipsum" />
            <SelectItem label="Lorem Ipsum" value="Lorem Ipsum" />
            <SelectItem
              label="Lorem Ipsum"
              value="Lorem Ipsumui"
              isDisabled={true}
            />
            <SelectItem label="Lorem Ipsum" value="Lorem Ipsum" />
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
              value="Lorem Ipsumui"
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
              value="Lorem Ipsumui"
              isDisabled={true}
            />
            <SelectItem label="Lorem Ipsum" value="Lorem Ipsum" />
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
            <SelectItem label="Lorem Ipsum" value="Lorem Ipsum" />
            <SelectItem label="Lorem Ipsum" value="Lorem Ipsum" />
            <SelectItem label="Lorem Ipsum" value="Lorem Ipsum" />
            <SelectItem
              label="Lorem Ipsum"
              value="Lorem Ipsumui"
              isDisabled={true}
            />
            <SelectItem label="Lorem Ipsum" value="Lorem Ipsum" />
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
        bgColor="#355666"
      >
        <ButtonText>CADASTRAR</ButtonText>
      </Button>
    </Screen>
  );
}
