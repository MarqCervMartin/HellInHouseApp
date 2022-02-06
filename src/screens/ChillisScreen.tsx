import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';
import MenuImage from '../components/MenuImage';

const ChillisScreen: FC = (): JSX.Element => {
  const menu: Array<Record<string, string>> = [
    {nombre: 'Tacos'},
    {nombre: 'Quesadillas'},
    {nombre: 'Volcanes'},
    {nombre: 'Gringas'},
    {nombre: 'Bebidas'},
    {nombre: 'Aguas'},
    {nombre: 'Cheves'},
  ];

  function handlePress(item: Record<string, string>) {
    console.log(item.nombre);
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={menu}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handlePress(item)}>
            <MenuImage name={item.nombre} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  card: {
    padding: 10,
    width: 340,
    height: 200,
    borderRadius: 10,
  },
});

export default ChillisScreen;
