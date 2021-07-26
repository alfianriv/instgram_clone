import React from "react";
import { View, Image, Pressable } from "react-native";
import Text from "./Text";
import tailwind from "tailwind-rn";
import Icon from "react-native-vector-icons/Feather";
import { Dimensions } from "react-native";
import { comments } from "../../assets/data/articles";

const Post = props => {
	return (
		<View
			style={{
				marginHorizontal: 15,
				marginTop: 15,
				padding: 15,
				...tailwind("flex bg-white rounded-xl"),
				...props.style,
			}}
		>
			<View
				style={{
					...tailwind("flex flex-row items-center justify-between"),
				}}
			>
				<View style={{ ...tailwind("flex flex-row items-center") }}>
					<Image
						resizeMode={"cover"}
						style={{ width: 40, height: 40, borderRadius: 10 }}
						source={{ uri: props.data.user.avatar }}
					/>
					<Text style={{ ...tailwind("font-bold ml-2") }}>
						{props.data.user.username}
					</Text>
				</View>
				<Icon name="more-vertical" size={20} />
			</View>
			<Image
				resizeMode={"cover"}
				style={{
					width: Dimensions.get("window").width - 62.5,
					height: Dimensions.get("window").width - 62.5,
					borderRadius: 10,
					...tailwind("mt-2"),
				}}
				source={{ uri: props.data.image }}
			/>
			<View
				style={{
					...tailwind(
						"flex flex-row items-center justify-between mt-2"
					),
				}}
			>
				<View style={{ ...tailwind("flex flex-row items-center") }}>
					<Icon
						style={{ ...tailwind("mr-4") }}
						name="heart"
						size={20}
					/>
					<Icon name="send" size={20} />
				</View>
				<Icon name="bookmark" size={20} />
			</View>
			<Text style={{ ...tailwind("mt-2 font-bold") }}>
				{props.data.like} Like
			</Text>
			<Text style={{ ...tailwind("mt-2") }}>
				<Text style={{ ...tailwind("font-bold") }}>
					{props.data.user.username}
				</Text>{" "}
				{props.data.caption}
			</Text>
			{props.comment ? (
				<Comments comment={props.comment} />
			) : (
				<Pressable onPress={() => props.onPress()}>
					<Text style={{ ...tailwind("mt-2 text-gray-300") }}>
						View all {props.data.comment} comments
					</Text>
				</Pressable>
			)}
		</View>
	);
};

const Comments = props => {
	const comment = comments(props.comment);

	return (
		<View style={{ ...tailwind("px-3 mt-2") }}>
			{comment.map((val, i) => {
				return (
					<View key={`comment-${i}`}>
						<View
							style={{
								...tailwind(
									"flex flex-row items-center justify-between"
								),
							}}
						>
							<View
								style={{
									...tailwind("flex flex-row items-center"),
								}}
							>
								<Image
									resizeMode={"cover"}
									style={{
										width: 30,
										height: 30,
										borderRadius: 10,
										...tailwind("mr-2"),
									}}
									source={{
										uri: val.user.avatar,
									}}
								/>
								<Text style={{ ...tailwind("font-bold") }}>
									{val.user.username}
								</Text>
							</View>
							<Text style={{ ...tailwind("text-gray-300") }}>
								{val.created_at}d
							</Text>
						</View>
						<Text style={{ marginLeft: 40, ...tailwind("mt-1") }}>
							{val.comment}
						</Text>
						<View
							style={{
								marginLeft: 40,
								...tailwind(
									"flex flex-row justify-between items-center mt-2"
								),
							}}
						>
							<View
								style={{
									...tailwind("flex flex-row items-center"),
								}}
							>
								<Text
									style={{
										...tailwind("text-gray-300 mr-5"),
									}}
								>
									View {val.reply} replies
								</Text>
								<Text style={{ ...tailwind("text-gray-300") }}>
									Reply
								</Text>
							</View>
							<Text style={{ ...tailwind("text-gray-300") }}>
								<Icon name="heart" size={12} /> {val.like} Likes
							</Text>
						</View>
					</View>
				);
			})}
		</View>
	);
};

export default Post;
