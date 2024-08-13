import {
  Button as ButtonGS,
  ButtonSpinner,
  ButtonText,
} from '@gluestack-ui/themed';

type ButtonProps = {
  children: React.ReactNode;
  onPress: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
};

export function Button({
  children,
  onPress,
  isDisabled,
  isLoading,
}: ButtonProps) {
  return (
    <ButtonGS
      size="md"
      height={50}
      variant="solid"
      action="primary"
      sx={{
        ':disabled': {
          opacity: 1,
        },
      }}
      isDisabled={isDisabled || isLoading}
      isFocusVisible={false}
      borderRadius={14}
      bgColor="#B8D3E0"
      onPress={onPress}
    >
      {isLoading ? (
        <ButtonSpinner color="#1C1C1E" />
      ) : (
        <ButtonText color="#1C1C1E">{children}</ButtonText>
      )}
    </ButtonGS>
  );
}
