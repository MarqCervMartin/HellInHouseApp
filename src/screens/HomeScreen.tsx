import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

//Components
import Chilli from '../components/Chilli';

//Actionsn
import {changeChilli} from '../redux/actions/chillis';

//Redux
import {useDispatch} from 'react-redux';

const HomeScreen: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  //console.log('changeChilli', changeChilli('Carolina Reaper'));
  dispatch(changeChilli('Carolina Reaper'));
  return (
    <View style={styles.container}>
      <ScrollView>
        <Chilli />
        <Chilli />
      </ScrollView>
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

export default HomeScreen;
