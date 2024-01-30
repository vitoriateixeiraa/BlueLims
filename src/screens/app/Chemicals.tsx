import React from "react";
import { Screen } from "../../components/Screen";
import {
  Box,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  SearchIcon,
} from "@gluestack-ui/themed";
import { Ionicons } from "@expo/vector-icons";

export default function Chemicals() {
  return (
    <Screen
      title="Insumos"
      rightIcon={<Ionicons name="add-sharp" size={32} color="#ffffff" />}
    >
      <Input
        mt={"$4"}
        borderRadius={10}
        sx={{
          ":focus": {
            borderColor: "#355666",
          },
        }}
      >
        <InputSlot pl="$3">
          <InputIcon as={SearchIcon} />
        </InputSlot>
        <InputField placeholder="Pesquisar" />
      </Input>
    </Screen>
  );
}
