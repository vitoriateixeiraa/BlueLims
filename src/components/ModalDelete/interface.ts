export interface ModalDeleteProps {
  showModal: boolean;
  onClose: () => void;
  onDelete: () => void;
  type: 'input' | 'laboratory'
}
