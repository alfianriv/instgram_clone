import React from 'react';
import { View, Image, Pressable } from 'react-native';
import tailwind from 'tailwind-rn';
import Icon from 'react-native-vector-icons/Feather';
import Text from '../../components/Text';
import { ScrollView } from 'react-native-gesture-handler';
import BottomTab from '../../components/BottomTab';
import Post from '../../components/Post';

const Comment = (props) => {
    const post = props.route.params;
    return (
        <View style={{...tailwind('flex flex-1')}}>
            <View style={{...tailwind('w-full bg-white absolute flex flex-row items-center justify-between px-5'), height: 60}}>
                <View style={{...tailwind('flex flex-row items-center')}}>
                    <Pressable onPress={() => props.navigation.goBack()} style={{...tailwind('mr-2')}}>
                        <Icon size={24} name="chevron-left"/>
                    </Pressable>
                    <Text style={{...tailwind('font-bold text-lg')}}>Comments</Text>
                </View>
            </View>
            <ScrollView style={{marginTop: 60, marginBottom: 80, ...tailwind('flex bg-gray-100')}}>
                <Post comment={post.comment} style={{marginBottom: 15}} data={post} />
            </ScrollView>
            <BottomTab navigation={props.navigation} />
        </View>
    )
}

export default Comment