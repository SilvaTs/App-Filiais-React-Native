import React,{ Component } from 'react';
import api from '~/services/api';

import { View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';

export default class welcome extends Component {
  state = {
    username: '',
  };

  ChecarUserExixts = async (username) => {
   const user = await api.post('/login/${username}');

   return user;
  }

saveUser = async (username) => {
  await AsyncStorage.setItem('@usuario:username',username);
}

  signIn = async () => {
   const { username } = this.state;
   const { navigation } = this.props;

   navigation.navigate('Filiais');
  try {
    await this.ChecarUserExixts(username);
    await this.saveUser(username);

  } catch (error) {
    console.log('usuário não existe');
  }

  };

  render(){
    const { username } = this.state;
    return (
<View style={styles.container}>
  <Text style={styles.title}>Bem Vindo</Text>

 <View style={styles.form}>
 <TextInput
  style={styles.input}
  autoCapitalize='none'
  autoCorrect={false}
  placeholder='Digite seu Email'
  underlineColorAndroid='transparent'
  value={username}
  onChangeText={text => this.setState({username: text})}
 />

 <View style={styles.forms}>

<TextInput
  style={styles.inputs}
  autoCapitalize='none'
  autoCorrect={false}
  placeholder='Digite sua Senha'
  secureTextEntry={true}
  underlineColorAndroid='transparent'
 />

 </View>



 </View>
 <TouchableOpacity style={styles.button} onPress={this.signIn}>
<Text style={styles.buttonText}>Entrar</Text>

</TouchableOpacity>
  </View>

    );
  }

}





