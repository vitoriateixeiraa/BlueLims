import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
  SearchIcon,
} from '@gluestack-ui/themed';
import { AntDesign } from '@expo/vector-icons';
interface SearchInputProps {
  value: string;
  onChange: (search: string) => void;
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <Input
      mt={'$4'}
      borderRadius={10}
      backgroundColor="#7676801a"
      height={50}
      sx={{
        ':focus': {
          borderWidth: 0,
        },
      }}
    >
      <InputSlot pl="$3">
        <InputIcon as={SearchIcon} />
      </InputSlot>
      <InputField
        value={value}
        onChangeText={onChange}
        color="#ffff"
        placeholder="Pesquisar"
      />
      {!!value && (
        <InputSlot
          pr="$3"
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
  );
}
