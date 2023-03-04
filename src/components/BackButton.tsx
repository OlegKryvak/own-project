import { getStatusBarHeight } from 'react-native-status-bar-height';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import React, { FC } from 'react';

interface Props {
  goBack: () => void;
}

const BackButton: FC<Props> = ({ goBack }) => {
  return (
    <TouchableOpacity onPress={goBack} style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/images/arrow_back.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 20 + getStatusBarHeight(),
    left: 4
  },
  image: {
    width: 24,
    height: 24
  }
});

export default BackButton;
