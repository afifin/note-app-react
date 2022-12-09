import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import InputTextField from '../components/IInputTextField';
import NoteScreen from '../screens/NoteScreen';
import Intro from '../screens/Intro';
import { useNavigation } from '@react-navigation/native';
import logo from '../logo/facebook.png';

export default function Signin() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View>
        <View
          style={{
            marginTop: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../logo/logo3.png')}
            style={styles.logo}></Image>
          <Text
            style={[
              styles.text,
              { marginTop: 10, fontSize: 22, fontWeight: '500' },
            ]}>
            MyNotes
          </Text>
        </View>
        <View
          style={{
            marginTop: 48,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <TouchableOpacity>
            <View style={styles.socialButton}>
              <Image
                source={require('../logo/google.png')}
                style={styles.sosmed}></Image>
              <Text style={[styles.text]}>Google</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.socialButton}>
              <Image
                source={require('../logo/facebook.png')}
                style={styles.sosmed}></Image>
              <Text style={[styles.text]}>Facebook</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text
          style={[
            styles.text,
            {
              color: '#ABB4BD',
              fontSize: 15,
              textAlign: 'center',
              marginVertical: 20,
            },
          ]}>
          or
        </Text>
        <InputTextField title="Email"></InputTextField>
        <InputTextField
          style={{ marginTop: 32, marginBottom: 8 }}
          title="Password"
          isSecure={true}></InputTextField>

        <Text style={[styles.text, styles.link, { textAlign: 'right' }]}>
          Lupa password?
        </Text>

        <TouchableOpacity
          style={styles.submitContainer}
          onPress={() => navigation.navigate('NoteScreen')}>
          <Text
            style={[
              styles.text,
              { color: '#fff', fontWeight: '600', fontSize: 16 },
            ]}>
            Masuk
          </Text>
        </TouchableOpacity>
        <Text
          style={[
            styles.text,
            {
              fontSize: 14,
              color: '#ABB4BD',
              textAlign: 'center',
              marginTop: 24,
            },
          ]}>
          Lupa akun?
          <TouchableOpacity>
            <Text
              onPress={() => navigation.navigate('sign_up')}
              style={[styles.text, styles.link]}>
              {' '}
              Daftar Sekarang
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
  },
  logo: {
    width: 60,
    height: 70,
  },
  sosmed: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  text: {
    fontFamily: 'Avenir Next',
    color: '#1D2029',
  },
  socialButton: {
    flexDirection: 'row',
    marginHorizontal: 12,
    paddingVertical: 2,
    paddingHorizontal: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(171, 180, 189, 0.65)',
    borderRadius: 4,
    backgroundColor: 'fff',
    shadowColor: 'rgba(171, 180, 189, 0.35)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
    alignItems: 'center',
  },
  link: {
    color: '#0000ff',
    fontSize: 14,
    fontWeight: '500',
  },
  submitContainer: {
    backgroundColor: '#FF1654',
    fontSize: 16,
    borderRadius: 4,
    paddingVertical: 12,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(255, 22, 84, 0.24)',
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 1,
    shadowRadius: 20,
  },
});
