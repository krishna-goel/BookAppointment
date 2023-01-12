import React from 'react';
import {Header} from 'native-base';
import {Appearance, SafeAreaView, StatusBar, View} from 'react-native';
import styles from './styles';
import {Icons} from 'components';

export default function Index({
  hasBackButton,
  container,
  backButtonStyle = {},
}) {
  return (
    <SafeAreaView style={{paddingTop: 30}}>
      <Header
        transparent
        style={[
          styles.container,
          container,
          {
            backgroundColor: '#FFCC00',
          },
        ]}>
        <StatusBar
          barStyle={
            Appearance.getColorScheme() == 'dark'
              ? 'light-content'
              : 'dark-content'
          }
          translucent
          backgroundColor={'#FFCC00'}
        />
        <View>
          {hasBackButton ? (
            <View
              style={{
                height: 30,
                width: '100%',
                flexDirection: 'row',
              }}>
              <View style={{...backButtonStyle}}>
                <Icons.BackIcon style={{marginTop: -10}} />
              </View>
              <View style={{flex: 9}}></View>
            </View>
          ) : null}
        </View>
      </Header>
    </SafeAreaView>
  );
}
