import { Box, Heading } from '@gluestack-ui/themed';
import { ScreenProps } from '..';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';

type ScreenHeaderProps = Pick<
  ScreenProps,
  'canGoBack' | 'title' | 'rightIcon'
> & {
  paddingHorizontal: '$0' | '$6';
};

export function ScreenHeader({
  title,
  canGoBack = false,
  paddingHorizontal,
  rightIcon,
}: ScreenHeaderProps) {
  const navigation = useNavigation();

  return (
    <Box mt="$6" gap="$2" paddingHorizontal={paddingHorizontal}>
      {canGoBack && (
        <Pressable hitSlop={10} onPress={navigation.goBack}>
          <AntDesign name="arrowleft" size={24} color="#ffffff" />
        </Pressable>
      )}
      {rightIcon && (
        <Box alignItems="flex-end" justifyContent="center">
          {rightIcon}
        </Box>
      )}

      <Heading size="2xl" color="#ffffff">
        {title}
      </Heading>
    </Box>
  );
}
