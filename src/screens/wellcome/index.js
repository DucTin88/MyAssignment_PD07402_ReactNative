import React from "react";
import {styles} from './styles';
import Button from '../../components/button/';
import { 
    View, Text, Image, Pressable
 } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

 const Wellcome = ({navigation}) => {
    return(
        <View style={styles.container}>
        {/* line 1 */}
            <Image
                resizeMode="contain"
                style={styles.img}
                source={require('../../assets/wellcomLogo1.png')}
            />
            <View style={styles.group2}>
            <Text style={styles.title} >You’ll Find</Text>
            <Text style={[styles.title, styles.colororange]} >All you need</Text>
            <Text style={styles.title} >Here!</Text>
            </View>
        {/* line 3 */}
        <Button
           onPress={()=> navigation.navigate('SignUp')}
            title="Sign up"></Button>

          <Pressable
           onPress={()=> navigation.navigate('SignIn')}
           >
            <Text style={styles.footerText}>Sign in</Text>
          </Pressable>
        </View>
    );
};
export default Wellcome;