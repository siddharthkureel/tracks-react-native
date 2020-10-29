import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import Context from '../context/userContext';

const TrackListScreen
 = ({
    navigation,
}) => {
    const { setUser } = React.useContext(Context);
    return(
    <View>
        <Text>TrackListScreen</Text>
        <Button title={'Go to Signin'} onPress={()=>setUser('')} />
        <Button title={'Go to Track Detail Page'} onPress={()=>navigation.navigate('TrackDetail')} />
    </View>
)};

const styles = StyleSheet.create({

});

export default TrackListScreen;
