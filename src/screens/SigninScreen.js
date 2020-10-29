import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import Context from '../context/userContext';

const Signin = ({ navigation }) => {
    const { setUser } = React.useContext(Context);
    return(
        <View>
            <Text>Signin</Text>
            <Button title={'Go to signup'} onPress={()=>navigation.navigate('Signup')} />
            <Button title={'Go to mainflow'} onPress={()=>setUser('cds')} />
        </View>
)};

const styles = StyleSheet.create({

});

export default Signin;
