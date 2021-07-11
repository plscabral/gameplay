import React from 'react';
import { View, Text } from 'react-native';
import { theme } from '../../global/styles/theme';
import { Avatar } from '../Avatar';

import { styles } from './styles';

type Props = {
  data: {
    id: string,
    username: string,
    avatar_url: string,
    status: string
  }
}

export function Member({ data }: Props) {
  const { primary, on, busy } = theme.colors;

  return (
    <View style={styles.container}>
      <Avatar urlImage={data.avatar_url} />

      <View>
        <Text style={styles.title}>
          {data.username}
        </Text>

        <View style={styles.status}>
          <View style={
            [styles.bulletStatus,
            {
              backgroundColor: data.status === "online" ? on : data.status === "offline" ? primary : busy
            }
            ]}
          />

          <Text style={styles.nameStatus}>
            {data.status === "online" ? 'Disponível' : data.status === "offline" ? 'Indisponível' : 'Ocupado'}
          </Text>
        </View>
      </View>
    </View>
  )
}