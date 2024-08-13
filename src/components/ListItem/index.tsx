import { View, Text, Pressable } from '@gluestack-ui/themed';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type ListItemProps = {
  name: string;
  id: string;
  onPress: () => void;
};

export function ListItem({ id, name, onPress }: ListItemProps) {
  return (
    <Pressable
      onPress={onPress}
      key={id}
      paddingHorizontal="$6"
      paddingVertical={'$4'}
      flexDirection="row"
      alignItems="center"
      gap="$3"
      borderColor="#545458"
      borderBottomWidth={1}
    >
      <Feather name="clipboard" size={24} color="#ffffff" />
      <Text bold size="md" color="#ffff">
        {name}
      </Text>
    </Pressable>
  );
}
