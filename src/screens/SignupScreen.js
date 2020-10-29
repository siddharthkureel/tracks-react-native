import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const SignupScreen = ({
    navigation,
}) => (
    <View>
        <Text>SignupScreen</Text>
        <Button title={"SignUp"} onPress={()=>navigation.navigate('Signin')}/>
    </View>
);

const styles = StyleSheet.create({

});

export default SignupScreen
