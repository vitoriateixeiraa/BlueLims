import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { Logo } from "../../components/Logo";
import { Screen } from "../../components/Screen";
import {
  AddIcon,
  Box,
  Button,
  ButtonText,
  EyeIcon,
  EyeOffIcon,
  Fab,
  FabIcon,
  FormControl,
  Heading,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  VStack,
} from "@gluestack-ui/themed";
import { Center } from "@gluestack-ui/themed";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };

  return (
    <Screen title="Entrar">
      <Box flex={1} backgroundColor="red" justifyContent="center">
        <Logo />

        <FormControl mt="$16">
          <VStack space="xl">
            <VStack space="xs">
              <Input
                variant="underlined"
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
              >
                <InputField placeholder="Usuário" />
              </Input>
            </VStack>
            <VStack space="xs">
              <Input variant="underlined">
                <InputField
                  placeholder="Senha"
                  type={showPassword ? "text" : "password"}
                />
                <InputSlot pr="$3" onPress={handleState}>
                  <InputIcon
                    as={showPassword ? EyeIcon : EyeOffIcon}
                    color="#B8D3E0"
                  />
                </InputSlot>
              </Input>
            </VStack>
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
              <ButtonText>ENTRAR</ButtonText>
            </Button>

            <Button
              mt={"$3"}
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
          </VStack>
        </FormControl>
      </Box>
    </Screen>
  );
}
