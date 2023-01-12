import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Container, Content} from 'native-base';

const Appointment = () => {
  return (
    <Container>
      <Content style={styles.headingContainer}>
        <View>
          <Text>index</Text>
          <Text>index</Text>
          <Text>index</Text>
          <Text>index</Text>
        </View>
      </Content>
    </Container>
  );
};

export default Appointment;

const styles = StyleSheet.create({
  headingContainer: {
    height: '100%',
    backgroundColor: '#FFCC00',
  },
});
