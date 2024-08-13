import {
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
  CircleIcon,
  HStack,
  Text
} from '@gluestack-ui/themed';
import React from 'react';
import { Controller, UseControllerProps, FieldValues } from 'react-hook-form';

type FormRadioInputProps = {
  errorMessage?: string;
  options: {
    label: string;
    value: string;
  }[];
};

export function FormRadioInput<FormType extends FieldValues>({
  options,
  control,
  name,
  rules,
  errorMessage
}: FormRadioInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value = '', onChange } }) => (
        <RadioGroup value={value} onChange={onChange}>
          <HStack justifyContent="space-between">
            {options.map(({ label, value }) => (
              <Radio
                key={value}
                value={value}
                size="md"
                isInvalid={false}
                isDisabled={false}
                sx={{
                  _icon: {
                    ':checked': {
                      color: '#B8D3E0',
                    },
                  },
                  _indicator: {
                    ':checked': {
                      borderColor: '#B8D3E0',
                    },
                  },
                }}
              >
                <RadioIndicator mr="$2">
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
                <RadioLabel color="#ffffff">{label}</RadioLabel>
              </Radio>
            ))}
          </HStack>
          {!!errorMessage && (
            <Text mt={'$1'} size="sm" color="$red500">
              {errorMessage}
            </Text>
          )}
        </RadioGroup>
      )}
    />
  );
}
