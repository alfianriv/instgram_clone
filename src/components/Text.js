import React from "react";
import { Text as TextRn } from "react-native";

class Text extends React.Component {
	render() {
		return <TextRn numberOfLines={this.props.numberOfLines} ellipsizeMode={this.props.ellipsizeMode} style={this.props.style}>{this.props.children}</TextRn>;
	}
}   

export default Text;