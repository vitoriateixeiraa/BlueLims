import React, { useState } from 'react';
import {
  Box,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  Text,
  EyeIcon,
  EyeOffIcon,
} from '@gluestack-ui/themed';
import { AntDesign } from '@expo/vector-icons';

import { Controller, UseControllerProps, FieldValues } from 'react-hook-form';
import { KeyboardType } from 'react-native';

interface FormTextInputProps {
  errorMessage?: string;
  placeholder: string;
  keyboardType?: KeyboardType;
  isCleaning?: boolean;
  disabled?: boolean;
  type?: 'text' | 'password';
}

export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  keyboardType = 'default',
  errorMessage,
  placeholder,
  isCleaning = false,
  disabled = false,
  type = 'text',
}: FormTextInputProps & UseControllerProps<FormType>) {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordInput = type === 'password';

  const handleState = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: {value = '', onChange}, fieldState }) => (
        <Box>
          <Input
            variant="underlined"
            size="md"
            isDisabled={disabled}
            isInvalid={false}
            isReadOnly={false}
            sx={{
              ':focus': {
                borderColor: '#B8D3E0',
              },
            }}
          >
            {isPasswordInput ? (
              <InputField
                type={showPassword ? 'text' : 'password'}
                keyboardType={keyboardType}
                value={String(value)}
                onChangeText={onChange}
                color="#ffff"
                placeholder={placeholder}
              />
            ) : (
              <InputField
                type={type}
                keyboardType={keyboardType}
                value={String(value)}
                onChangeText={onChange}
                color="#ffff"
                placeholder={placeholder}
              />
            )}

            {isPasswordInput && (
              <InputSlot pr="$3" onPress={handleState}>
                <InputIcon
                  as={showPassword ? EyeIcon : EyeOffIcon}
                  color="#B8D3E0"
                />
              </InputSlot>
            )}
            {(isCleaning && value) && (
              <InputSlot
                hitSlop={10}
                margin={10}
                onPress={() => {
                  onChange('');
                }}
              >
                <InputIcon>
                  {<AntDesign name="closecircle" size={16} color="white" />}
                </InputIcon>
              </InputSlot>
            )}
          </Input>
          {!!errorMessage && (
            <Text mt={'$1'} size="sm" color="$red500">
              {errorMessage}
            </Text>
          )}
        </Box>
      )}
    />
  );
}
