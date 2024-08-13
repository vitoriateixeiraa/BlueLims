import {
  Heading,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  CloseIcon,
  Icon,
  Text,
  Box,
} from '@gluestack-ui/themed';
import { useRef } from 'react';
import { ModalSucessProps } from './interface';
import { Button } from '../Button';
import * as Clipboard from 'expo-clipboard';
import { useNavigation } from '@react-navigation/native';
export function ModalSuccess({
  showModal,
  onClose,
  accessCode,
}: ModalSucessProps) {
  const ref = useRef(null);
  const navigation = useNavigation();

  const copyToClipboard = async () => {
    if (accessCode) {
      await Clipboard.setStringAsync(accessCode);
    }
  };

  function navigateToChemicalsScreen() {
    navigation.navigate('AppTabNavigator', {
      screen: 'ChemicalsScreen',
    });
  }

  function handleClose() {
    onClose();
    navigateToChemicalsScreen();
  }

  return (
    <Modal isOpen={showModal} onClose={handleClose} finalFocusRef={ref}>
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size="lg">Laboratório cadastrado!</Heading>
          <ModalCloseButton>
            <Icon as={CloseIcon} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody mt="$6">
          <Text>
            Parabéns! O laboratório foi criado com sucesso e o código de acesso
            foi gerado. Este código é essencial para que os alunos ingressem no
            laboratório. Por favor, compartilhe o código abaixo com seus alunos:
          </Text>

          <Text textAlign="center" my="$6" size="4xl" color="$blue400">
            {accessCode}
          </Text>
        </ModalBody>
        <Box paddingHorizontal="$6" mb="$6">
          <Button
            onPress={() => {
              copyToClipboard();
              handleClose();
            }}
          >
            Copiar
          </Button>
        </Box>
      </ModalContent>
    </Modal>
  );
}
