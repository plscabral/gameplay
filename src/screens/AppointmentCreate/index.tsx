import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { CategorySelect } from '../../components/CategorySelect';
import { GuildIcon } from '../../components/GuildIcon';

import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function AppointmentCreate() {
  const navigation = useNavigation();
  const { secondary50, secondary70 } = theme.colors;
  const [category, setCategory] = useState('');

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <Background>
      <Header title="Agendar partida" />

      <Text style={[
        styles.label,
        {
          marginLeft: 24,
          marginTop: 36,
          marginBottom: 18
        }]}>
        Categoria
      </Text>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
        hasCheckBox
      />

      <View style={styles.form}>
        <RectButton>
          <View style={styles.select}>
            {
              // <LinearGradient style={styles.image} colors={[secondary70, secondary50]} /> */}
              <GuildIcon />
            }

            <View style={styles.selectBody}>
              <Text style={styles.label}>
                Selecione um servidor
              </Text>
            </View>

            <Feather
              name="chevron-right"
              color={theme.colors.heading}
              size={18}
            />
          </View>
        </RectButton>
      </View>
    </Background>
  );
}