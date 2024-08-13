import { Pressable, Text, View } from '@gluestack-ui/themed';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Allow from '../../../../components/Allow';

export function Menu() {
  const navigation = useNavigation();

  function navigateToLaboratoriesScreen() {
    navigation.navigate('LaboratoriesScreen');
  }

  function navigateToAboutScreen() {
    navigation.navigate('AboutScreen');
  }

  function navigateToChangePasswordScreen() {
    navigation.navigate('ChangePasswordScreen');
  }

  return (
    <>
      <Allow roles={["ADMIN"]}>
        <Pressable
          flexDirection="row"
          alignItems="center"
          gap={'$4'}
          padding={'$6'}
          borderBottomWidth={1}
          borderColor="#ffffff"
          onPress={navigateToLaboratoriesScreen}
        >
          <SimpleLineIcons name="chemistry" size={24} color="#ffffff" />
          <Text color="#ffffff" size="lg">
            Laboratórios
          </Text>
        </Pressable>
      </Allow>

      <Pressable
        flexDirection="row"
        alignItems="center"
        gap={'$4'}
        padding={'$6'}
        borderBottomWidth={1}
        borderColor="#ffffff"
        onPress={navigateToChangePasswordScreen}
      >
        <Feather name="lock" size={24} color="#ffffff" />
        <Text color="#ffffff" size="lg">
          Trocar senha
        </Text>
      </Pressable>
      <Pressable
        flexDirection="row"
        alignItems="center"
        gap={'$4'}
        padding={'$6'}
        borderBottomWidth={1}
        borderColor="#ffffff"
        onPress={navigateToAboutScreen}
      >
        <AntDesign name="infocirlceo" size={24} color="#ffffff" />
        <Text color="#ffffff" size="lg">
          Sobre o App
        </Text>
      </Pressable>
    </>
  );
}
