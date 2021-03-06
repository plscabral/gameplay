import React from 'react';
import { View, FlatList } from 'react-native';

import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props) {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'image.png',
      owner: true
    },
    {
      id: '2',
      name: 'Galera do Game',
      icon: 'image.png',
      owner: false
    },
    {
      id: '3',
      name: 'Galera do Game',
      icon: 'image.png',
      owner: false
    },
    {
      id: '4',
      name: 'Galera do Game',
      icon: 'image.png',
      owner: false
    },
    {
      id: '5',
      name: 'Galera do Game',
      icon: 'image.png',
      owner: false
    },
    {
      id: '6',
      name: 'Galera do Game',
      icon: 'image.png',
      owner: false
    },
    {
      id: '7',
      name: 'Galera do Game',
      icon: 'image.png',
      owner: false
    }
  ]
  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild 
            data={item} 
            onPress={() => handleGuildSelect(item)}
          />
        )}
        ItemSeparatorComponent={() => <ListDivider isCentered/>}
        contentContainerStyle={{paddingBottom: 68, paddingTop: 103}}
        ListHeaderComponent={() => <ListDivider isCentered />}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
      />
    </View>
  );
}