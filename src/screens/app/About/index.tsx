import React from 'react';
import { Screen } from '../../../components/Screen';
import { Box, View } from '@gluestack-ui/themed';
import { Logo } from '../../../components/Logo';
import { Text } from '@gluestack-ui/themed';
import { AppTabScreenProps } from '../../../routes/nagivationType';

export default function About() {
  return (
    <Screen title="Sobre" canGoBack>
      <Box />
      <View mt={'$10'}>
        <Logo />
      </View>
      <View mt={'$8'}>
        <Text mt={16} marginBottom={160} textAlign="left" color="#ffffff">
          O projeto tem como gênese as demandas provindas de laboratórios de
          ensino e pesquisa e tornou-se um trabalho de conclusão de curso para o
          curso Tecnologia em Sistemas para Internet ofertado pelo Instituto
          Federal de Brasília. Desenvolvido pelas estudantes Vitória Silva e
          Rafaela Barros, juntamente com seu professor orientador Me. Tiago
          Segato, o projeto tem como objetivo ajudar os docentes, discentes e
          técnicos a melhor organizar seus respectivos laboratórios. {'\n'}
          {'\n'}
          Desenvolvido por:{'\n'}
          Rafaela Barros{'\n'}
          Tiago Segato{'\n'}
          Vitória Teixeira
        </Text>
      </View>
    </Screen>
  );
}
