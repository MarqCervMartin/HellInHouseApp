import React, {FC} from 'react';
import {Text} from 'react-native';
import {Card, Button, Icon} from 'react-native-elements';

const Chilli: FC = (): JSX.Element => {
  return (
    <Card>
      <Card.Title>Carolina Reaper!</Card.Title>
      <Card.Divider />
      <Card.Image
        source={{
          uri: 'https://www.telemundo.com/sites/nbcutelemundo/files/styles/fit-1240w/public/images/article/cover/2016/08/25/carolina_reaper_pepper_pods.jpg',
        }}
      />
      <Text style={{marginBottom: 10}}>
        The idea with React Native Elements is more about component structure
        than actual design.
      </Text>
      <Button
        icon={
          <Icon name="code" color="#ffffff" tvParallaxProperties={undefined} />
        }
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        title="VIEW NOW"
      />
    </Card>
  );
};

export default Chilli;
