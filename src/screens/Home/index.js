import React from "react";
import { View, Pressable, ScrollView, Image } from "react-native";
import tailwind from "tailwind-rn";
import Text from "../../components/Text";
import Icon from "react-native-vector-icons/Feather";
import { posts, stories, me } from "../../../assets/data/articles";
import Post from "../../components/Post";
import BottomTab from "../../components/BottomTab";

const Home = props => {
	return (
		<View style={{ ...tailwind("flex flex-1") }}>
			<View
				style={{
					...tailwind(
						"w-full bg-white absolute flex flex-row items-center justify-between px-5"
					),
					height: 60,
				}}
			>
				<Image
					resizeMode="contain"
					style={{ width: 120, height: 40 }}
					source={{
						uri: "https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png",
					}}
				/>
				<View style={{ ...tailwind("flex flex-row") }}>
					<Pressable
						style={{
							height: 26,
							width: 26,
							...tailwind(
								"mr-4 items-center justify-center border border-2 rounded"
							),
						}}
					>
						<Icon size={18} name="play" />
					</Pressable>
					<Pressable>
						<Icon size={24} name="send" />
					</Pressable>
				</View>
			</View>
			<ScrollView
				style={{
					marginTop: 60,
					marginBottom: 80,
					...tailwind("flex bg-gray-100"),
				}}
			>
				<StoryContainer></StoryContainer>
				{posts().map((val, i) => {
					return (
						<Post
                            key={`post-${i}`}
							style={{
								marginBottom: posts().length - 1 == i ? 15 : 0,
							}}
							onPress={() =>
								props.navigation.navigate("Comment", {...val})
							}
							data={val}
						></Post>
					);
				})}
			</ScrollView>
			<BottomTab navigation={props.navigation} />
		</View>
	);
};

const StoryContainer = () => {
	return (
		<View style={{ ...tailwind("flex bg-white"), height: 100 }}>
			<ScrollView
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{ ...tailwind("items-center") }}
				horizontal={true}
			>
				<View style={{ width: 60, ...tailwind("items-center ml-4") }}>
					<View
						style={{
							borderRadius: 15,
							padding: 2,
							...tailwind("border-2 border-white"),
						}}
					>
						<Image
							style={{ width: 60, height: 60, borderRadius: 10 }}
							source={{ uri: me.avatar }}
						/>
					</View>
					<Text
						numberOfLines={1}
						ellipsizeMode="tail"
						style={{
							fontSize: 12,
							...tailwind("mt-1 text-center"),
						}}
					>
						{me.username}
					</Text>
				</View>
				{stories().map((val, i) => {
					return (
						<View
                            key={`stories-${i}`}
							style={{
								width: 60,
								...tailwind("items-center ml-4"),
								...tailwind(
									stories().length - 1 == i ? "mr-4" : null
								),
							}}
						>
							<View
								style={{
									borderRadius: 15,
									padding: 2,
									...tailwind("border-2 border-red-400"),
								}}
							>
								<Image
									style={{
										width: 60,
										height: 60,
										borderRadius: 10,
									}}
									source={{ uri: val.avatar }}
								/>
							</View>
							<Text
								numberOfLines={1}
								ellipsizeMode="tail"
								style={{
									fontSize: 12,
									...tailwind("mt-1 text-center"),
								}}
							>
								{val.username}
							</Text>
						</View>
					);
				})}
			</ScrollView>
		</View>
	);
};

export default Home;
