import React from 'react';
import {
  Box,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  Text,
  Icon,
  ChevronDownIcon,
} from '@gluestack-ui/themed';

import { Controller, UseControllerProps, FieldValues } from 'react-hook-form';

interface FormSelectInputProps {
  errorMessage?: string;
  options: Array<{ label: string; value: string }>;
  placeholder: string;
}

export function FormSelectInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  errorMessage,
  options,
  placeholder,
}: FormSelectInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange } }) => {
        const selectedValue = options.find((option) => option.value === value);

        return (
          <Box>
            <Select
              selectedValue={selectedValue?.label}
              onValueChange={onChange}
            >
              <SelectTrigger variant="underlined" size="md">
                <SelectInput color="#fff" placeholder={placeholder} />
                <SelectIcon>
                  <Icon as={ChevronDownIcon} color="#fff" mr="$3" />
                </SelectIcon>
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  {options.map((option) => (
                    <SelectItem
                      key={option.value}
                      label={option.label}
                      value={option.value}
                    />
                  ))}
                </SelectContent>
              </SelectPortal>
            </Select>
            {!!errorMessage && (
              <Text size="sm" color="$red500">
                {errorMessage}
              </Text>
            )}
          </Box>
        );
      }}
    />
  );
}
