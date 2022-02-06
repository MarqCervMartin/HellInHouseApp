import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PerfilScreen: FC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Perfil</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PerfilScreen;
