import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
  const uri = 'https://2.bp.blogspot.com/-SId4LYenbTY/WHedFKMQOgI/AAAAAAAAQxU/hdgP3iAyMOgcOLDV3DW0DdWIZ1F0Z6GDwCLcB/s1600/discord-linuxbuzz-min.png';

  return (
    <Image
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    />
  )
}
