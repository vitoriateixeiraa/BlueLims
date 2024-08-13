import { Box } from '@gluestack-ui/themed';
import { useAppSafeArea } from '../../hooks/useAppSafeArea';
import { ScreenHeader } from './components/ScreenHeader';
import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import {
  ScrollViewContainer,
  ViewContainer,
} from './components/ScreenContainer';

export interface ScreenProps {
  children: React.ReactNode;
  title?: string;
  scrollable?: boolean;
  canGoBack?: boolean;
  rightIcon?: React.ReactNode;
  noPaddingHorizontal?: boolean;
}

export function Screen({
  children,
  title,
  scrollable = false,
  canGoBack,
  rightIcon,
  noPaddingHorizontal = false,
}: ScreenProps) {
  const { top, bottom } = useAppSafeArea();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Container backgroundColor="#1C1C1E">
        <Box
          flex={1}
          paddingHorizontal={noPaddingHorizontal ? '$0' : '$6'}
          style={{
            paddingTop: top,
            paddingBottom: bottom,
          }}
        >
          <ScreenHeader
            title={title}
            canGoBack={canGoBack}
            rightIcon={rightIcon}
            paddingHorizontal={noPaddingHorizontal ? '$6' : '$0'}
          />

          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
