import {Icon} from 'native-base';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const BackIcon = ({onPress = () => null, style = {}}) => {
  return (
    <View>
      <TouchableOpacity>
        <Icon
          name="arrowleft"
          type="AntDesign"
          style={[{color: 'black'}, styles.backBtnStyle]}
        />
      </TouchableOpacity>
    </View>
  );
};

const ICONS = {
  BackIcon,
};

export default ICONS;

const styles = StyleSheet.create({
  backBtnStyle: {
    fontSize: 22,
    lineHeight: 28,
  },
});
