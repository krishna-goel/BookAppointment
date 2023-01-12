import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Col, Container, Content, Row} from 'native-base';
import {KeyUtility} from 'constent/KeyUtility';

const Getotp = () => {
  const onLogin = () => {
    console.log('submit');
    // navigation.navigate(KeyUtility.GETOTP);
  };

  return (
    <Container>
      <Content style={styles.headingContainer}>
        <Row style={{height: 100, marginHorizontal: 10, marginTop: 10}}>
          <Col size={3}>
            <Image source={require('../../assets/images/logo.png')} />
          </Col>
          <Col
            size={8}
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.appTitle}>Book My Timer</Text>
          </Col>
        </Row>
        <View style={{marginTop: 50, width: '70%'}}>
          <Text style={styles.headingText}>Proceed with your</Text>
        </View>
        <View style={{marginTop: 7, width: '40%'}}>
          <Text style={styles.loginText}>OTP</Text>
        </View>
        <View style={{marginTop: 44, paddingHorizontal: 16}}>
          <TextInput
            placeholder="Verify Otp"
            style={{
              height: 48,
              backgroundColor: 'white',
              borderRadius: 8,
              color: 'black',
              paddingLeft: 16,
            }}
            placeholderTextColor="#172B4D"
          />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={() => onLogin()}>
          <Text style={{color: 'white', fontSize: 17}}>Get started</Text>
        </TouchableOpacity>
      </Content>
    </Container>
  );
};

export default Getotp;

const styles = StyleSheet.create({
  headingContainer: {
    height: '100%',
    backgroundColor: '#FFCC00',
  },
  headingText: {
    fontWeight: '500',
    fontSize: 24,
    color: 'black',
    marginLeft: 24,
  },
  loginText: {
    fontWeight: '700',
    fontSize: 30,
    color: 'black',
    marginLeft: 24,
  },
  loginBtn: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    backgroundColor: 'black',
    height: 45,
    borderRadius: 8,
  },
  appTitle: {fontSize: 30, color: 'black', fontWeight: 'bold'},
});
