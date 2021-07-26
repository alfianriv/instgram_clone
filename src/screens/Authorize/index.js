import React from 'react';
import { View, Image, Pressable } from "react-native";
import Text from '../../components/Text'
import tailwind from "tailwind-rn";
import { Dimensions } from 'react-native';
import { me } from '../../../assets/data/articles';

const Login = (props) => {
	return (
		<View style={{ width: Dimensions.get('window').width - 50, marginHorizontal: 25, ...tailwind("flex items-center py-10") }}>
			<Image resizeMode='contain' style={{ width: 150, height: 50 }} source={{uri: 'https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png'}} />
            <View style={{ ...tailwind("flex flex-row items-center justify-between")}}>
                <View style={{ ...tailwind("w-full flex flex-row items-center mt-5")}}>
                    <Image resizeMode={'cover'} style={{ width: 40, height: 40, borderRadius: 10 }} source={{uri: me.avatar}} />
                    <Text style={{...tailwind('font-bold ml-2')}}>{me.username}</Text>
                </View>
            </View>
            <Image resizeMode={'cover'} style={{ width: Dimensions.get('window').width - 50, height: Dimensions.get('window').width - 50, borderRadius: 10, ...tailwind('mt-2') }} source={{uri: me.image}} />
            <Pressable onPress={() => {props.navigation.navigate('Home')}} style={{ backgroundColor: '#3b5998', ...tailwind('w-full py-5 mt-8 rounded-xl') }}>
                <Text style={{ ...tailwind('text-center text-white') }}>Sign In With Facebook</Text>
            </Pressable>
            <Pressable onPress={() => {props.navigation.navigate('Home')}} style={{ backgroundColor: 'black', ...tailwind('w-full py-5 mt-5 rounded-xl') }}>
                <Text style={{ ...tailwind('text-center text-white') }}>Sign In With email</Text>
            </Pressable>
            <Text style={{ ...tailwind('text-center mt-8') }}>Not a member? Sign Up Now</Text>
            <Text style={{ ...tailwind('text-center mt-2 text-blue-300') }}>Forget password?</Text>
		</View>
	);
};

export default Login;
