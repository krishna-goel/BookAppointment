import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Router from 'navigation/Router';
import {Provider} from 'react-redux';
import {store} from 'store';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
