import React, { useEffect, useState } from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useAppSafeArea } from '../hooks/useAppSafeArea';
import { mapScreenToProps } from './mapScreenToProps';
import { Box, Text } from '@gluestack-ui/themed';
import { AppTabBottomTabParamList } from './tab.routes';
import { Keyboard, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export function AppTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const { bottom } = useAppSafeArea();
  const [tabBarVisible, setTabBarVisible] = useState(true);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setTabBarVisible(false);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setTabBarVisible(true);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return tabBarVisible && (
    <Box
      borderTopWidth={1}
      borderColor="#545458"
      flexDirection="row"
      paddingTop={16}
      backgroundColor="#161616"
      style={[{ paddingBottom: bottom }]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const tabItem =
          mapScreenToProps[route.name as keyof AppTabBottomTabParamList];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({
              name: route.name,
              params: route.params,
              merge: true,
            });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          descriptors[route.key].options.tabBarHideOnKeyboard && (
            <TouchableOpacity
              key={route.name}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, alignItems: 'center', height: 'auto' }}
            >
              {tabItem.label === 'Insumos' && (
                <SimpleLineIcons
                  name="chemistry"
                  size={28}
                  color={isFocused ? '#B8D3E0' : '#ffffff'}
                />
              )}
              {tabItem.label === 'Novo' && (
                <Feather
                  name="plus"
                  size={28}
                  color={isFocused ? '#B8D3E0' : '#ffffff'}
                />
              )}
              {tabItem.label === 'Perfil' && (
                <AntDesign
                  name="user"
                  size={28}
                  color={isFocused ? '#B8D3E0' : '#ffffff'}
                />
              )}

              <Text size="md" mt="$1" color={isFocused ? '#B8D3E0' : '#ffffff'}>
                {tabItem.label}
              </Text>
            </TouchableOpacity>
          )
        );
      })}
    </Box>
  );
}
