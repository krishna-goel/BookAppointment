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
import {Header} from 'components';
import {useGetPokemonByNameQuery} from '../Api/index';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const Getotp = ({navigation, route}) => {
  const {data, isLoading} = useGetPokemonByNameQuery();
  const {phoneNumber} = route.params;

  const checkVerification = async (phoneNumber, code) => {
    try {
      const data = JSON.stringify({
        to: phoneNumber,
        code,
      });
      const BASE_URL = 'https://verify-1234-abcdef.twil.io'
      const response = await fetch(`${BASE_URL}/check-verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });
   
      const json = response;
      console.log('resp',json);
      return json.success;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  return (
    <Container>
      <Header hasBackButton container={styles.header} />
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
        <View style={{paddingHorizontal: 16}}>
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
          <OTPInputView
            style={{width: '80%', height: 200, paddingLeft: 16}}
            pinCount={6}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log('code', code);
              checkVerification(phoneNumber, code);
              // .then(success => {
              //   if (!success) setInvalidCode(true);
              //   success && navigation.replace('Gated');
              // });
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => checkVerification(phoneNumber)}>
          <Text style={{color: 'white', fontSize: 17}}>Get started</Text>
        </TouchableOpacity>
      </Content>
    </Container>
  );
};

export default Getotp;

const styles = StyleSheet.create({
  header: {
    height: 60,
  },
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
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: 'black',
    fontSize: 20,
  },
  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});
