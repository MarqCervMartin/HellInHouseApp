import React from 'react';
import {Tile} from 'react-native-elements';

interface MenuImageProps {
  name: string;
}

const MenuImage = (props: MenuImageProps): JSX.Element => {
  const {name} = props;
  return (
    <Tile
      imageSrc={{
        uri: 'https://thumbs.dreamstime.com/t/tacos-con-el-pollo-tomate-y-verduras-frescas-salsa-de-t%C3%A1rtaro-en-fondo-negro-107740183.jpg',
      }}
      title={name}
      featured
      caption="SI hay wero"
    />
  );
};

export default MenuImage;
