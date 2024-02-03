import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Screen } from "../../components/Screen";
import {
  AlertCircleIcon,
  Box,
  Button,
  ButtonText,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
  Heading,
  Input,
  InputField,
} from "@gluestack-ui/themed";

export default function Password() {
  return (
    <Screen title="Senha" canGoBack>
      <Box />
      <Heading
        mt={80}
        color="#FFFFFF"
        textAlign="center"
        fontSize={16}
        fontWeight="regular"
      >
        Preencha os campos abaixo para alterar a senha.
      </Heading>

      <FormControl
        size="md"
        mt={"$16"}
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
        isRequired={false}
      >
        <FormControlLabel mb="$1">
        <FormControlLabelText>Nova Senha</FormControlLabelText>
        </FormControlLabel>
        <Input>
          <InputField
            type="password"
          />
        </Input>
        <FormControlHelper>
          <FormControlHelperText>
            Deve ter pelo menos 6 caracteres.
          </FormControlHelperText>
        </FormControlHelper>
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>
            São necessários pelo menos 6 caracteres.
          </FormControlErrorText>
        </FormControlError>
      </FormControl>

      <FormControl
        mt={"$6"}
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
        isRequired={false}
      >
        <FormControlLabel mb="$1">
        <FormControlLabelText>Confirme sua senha</FormControlLabelText>
        </FormControlLabel>
        <Input>
          <InputField
            type="password"
          />
        </Input>
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>
            São necessários pelo menos 6 caracteres.
          </FormControlErrorText>
        </FormControlError>
      </FormControl>

      <Button
        mt={"$10"}
        size="md"
        height={50}
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
        borderRadius={14}
        bgColor="#B8D3E0"
      >
        <ButtonText>ALTERAR SENHA</ButtonText>
      </Button>
    </Screen>
  );
}
