import React from "react";
import { View, Image, Pressable } from "react-native";
import tailwind from "tailwind-rn";
import Icon from "react-native-vector-icons/Feather";
import { me } from "../../assets/data/articles";

const BottomTab = ({navigation}) => {
	return (
		<View
			style={{
				...tailwind(
					"w-full bg-white absolute flex flex-row items-center justify-around px-5 bottom-0"
				),
				height: 80,
			}}
		>
			<Pressable onPress={() => {navigation.navigate('Home')}}>
                <Icon name="home" size={30} />
            </Pressable>
			<Icon name="search" size={30} />
			<Icon name="plus-square" size={30} />
			<Icon name="heart" size={30} />
			<Image
				resizeMode={"cover"}
				style={{ width: 35, height: 35, borderRadius: 10 }}
				source={{
					uri: me.avatar,
				}}
			/>
		</View>
	);
};

export default BottomTab