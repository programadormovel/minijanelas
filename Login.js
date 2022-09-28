import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, 
                    TouchableOpacity } from 'react-native';
import styles from './Estilo';

const Login = () => {
    return(
        <View style={styles.container}>
            <Text>Login</Text>
            <TextInput placeholder='email' />
            <TextInput placeholder='senha' />
            <TouchableOpacity>
                <Text>ENTRAR</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login;