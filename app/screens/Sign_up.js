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
import { useNavigation } from '@react-navigation/native';

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
        <InputTextField title="Email"></InputTextField>
        <InputTextField
          style={{ marginTop: 32, marginBottom: 8 }}
          title="Username"></InputTextField>
        <InputTextField
          style={{ marginTop: 32, marginBottom: 8 }}
          title="Password"
          isSecure={true}></InputTextField>
        <InputTextField
          style={{ marginTop: 32, marginBottom: 8 }}
          title="Konfirmasi Password"
          isSecure={true}></InputTextField>
        <TouchableOpacity
          style={styles.submitContainer}
          onPress={() => navigation.navigate('NoteScreen')}>
          <Text
            style={[
              styles.text,
              { color: '#fff', fontWeight: '600', fontSize: 16 },
            ]}>
            Daftar
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
          Sudah punya akun?
          <TouchableOpacity>
          <Text  onPress={() => navigation.navigate('sign_in')}
          style={[styles.text, styles.link]}> Masuk </Text>
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
  text: {
    fontFamily: 'Avenir Next',
    color: '#1D2029',
  },
  logo: {
    width: 60,
    height: 70,
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
    link: {
    color: '#0000ff',
    fontSize: 14,
    fontWeight: '500',
  },
});
