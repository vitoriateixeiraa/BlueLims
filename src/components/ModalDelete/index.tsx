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
  ButtonText,
  Button,
} from '@gluestack-ui/themed';
import { useRef } from 'react';
import { ModalDeleteProps } from './interface';

type Type = ModalDeleteProps['type'];

const CONTENT: Record<Type, { title: string; body: string }> = {
  laboratory: {
    title: 'Excluir Laboratório',
    body: 'Tem certeza de que deseja excluir este laboratório? Esta ação é irreversível e todos os dados associados serão perdidos permanentemente.',
  },
  input: {
    title: 'Excluir Insumo',
    body: 'Tem certeza de que deseja excluir este insumo? Esta ação é irreversível e todos os dados associados serão perdidos permanentemente.',
  },
};

export function ModalDelete({
  showModal,
  onClose,
  onDelete,
  type
}: ModalDeleteProps) {
  const ref = useRef(null);

  return (
    <Modal isOpen={showModal} onClose={onClose} finalFocusRef={ref}>
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size="lg">{CONTENT[type].title}</Heading>
          <ModalCloseButton>
            <Icon as={CloseIcon} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody mt="$6">
          <Text>
            {CONTENT[type].body}
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="outline"
            size="sm"
            action="secondary"
            mr="$3"
            onPress={onClose}
          >
            <ButtonText>Cancelar</ButtonText>
          </Button>
          <Button
            size="sm"
            action="negative"
            borderWidth="$0"
            onPress={() => {
              onDelete();
              onClose();
            }}
          >
            <ButtonText>Excluir</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
