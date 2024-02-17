import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Text, TouchableOpacity} from 'react-native';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Username:', username);
        console.log('Password:', password);

    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={setUsername}
                value={username}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Button color={"#5DB075"} title={"Login"}></Button>
            </TouchableOpacity>
            <Text style={styles.forget}>Forgot your password?</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 50,
        resizeMode: "cover",
    },
    input: {
        width: 343,
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
    },
    text: {
        fontSize: 20,
        fontWeight: 500,
        lineHeight: 29.05,
        marginBottom: 20,
    },
    button: {
        width: 343,
        height: 51,
        borderRadius: 100,
        padding: 16,
        gap: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5DB075',
        marginTop: 20,
    },
    forget: {
        color: "#5DB075",
    }
});

export default LoginPage;