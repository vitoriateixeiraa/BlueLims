import { Box, Heading, Text } from "@gluestack-ui/themed";
import { ScreenProps } from "..";
import { AntDesign } from "@expo/vector-icons";
type ScreenHeaderProps = Pick<ScreenProps, "canGoBack" | "title" | "rightIcon">;

export function ScreenHeader({ title, canGoBack  = false, rightIcon }: ScreenHeaderProps) {
  return (
    <Box mt="$6" gap="$2">
      
      {canGoBack && <AntDesign name="arrowleft" size={24} color="#ffffff" />}
      {rightIcon && (<Box alignItems="flex-end" justifyContent="center" >{rightIcon}</Box>)}
     
     
      <Heading size="2xl" color="#ffffff">{title}</Heading>
    </Box>
  );
}
