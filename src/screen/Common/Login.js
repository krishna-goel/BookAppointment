import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Col, Container, Content, Input, Row} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyUtility} from 'constent/KeyUtility';

const Login = ({navigation}) => {
  const onLogin = () => {
    console.log('submit');
  };
  return (
    // <Container>

    // <Content>
    <SafeAreaView style={styles.headingContainer}>
      <Row style={{height: 100, marginHorizontal: 10, marginTop: 10}}>
        <Col size={3} style={{}}>
          <Image source={require('../../assets/images/logo.png')} />
        </Col>
        <Col size={8} style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>
            Book My Timer
          </Text>
        </Col>
      </Row>
      <View style={{marginTop: 50, width: '70%'}}>
        <Text style={styles.headingText}>Proceed with your</Text>
      </View>
      <View style={{marginTop: 7, width: '40%'}}>
        <Text style={styles.loginText}>LogIn</Text>
      </View>
      <View style={{marginTop: 44, paddingHorizontal: 16}}>
        <TextInput
          placeholder="Enter You User Name"
          style={{
            height: 48,
            backgroundColor: 'white',
            borderRadius: 8,
            color: 'black',
            paddingLeft: 16,
          }}
          placeholderTextColor="#172B4D"
        />
        <TextInput
          placeholder="Enter You Password"
          style={{
            height: 48,
            backgroundColor: 'white',
            marginTop: 17,
            borderRadius: 8,
            color: 'black',
            paddingLeft: 16,
          }}
          placeholderTextColor="#172B4D"
        />
      </View>
      <TouchableOpacity
        style={{
          marginTop: 50,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 16,
          backgroundColor: 'black',
          height: 45,
          borderRadius: 8,
        }}
        onPress={() => onLogin()}>
        <Text style={{color: 'white', fontSize: 17}}>Get Started</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 14,
          paddingHorizontal: 16,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          // navigation.navigate(KeyUtility.REGISTER);
        }}>
        <Text>
          {'Don’t have account.? '}
          <Text style={{color: '#D80000'}}>Sign up now.</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
    // </Content>
    // </Container>
  );
};

export default Login;

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
});
