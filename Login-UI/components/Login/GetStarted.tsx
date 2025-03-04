import React from "react";
import {
	View,
	StyleSheet,
	Dimensions,
	Platform,
	Text,
	TextInput,
	TouchableOpacity,
} from "react-native";
import Line from "../Line";
import CheckBox from "@react-native-community/checkbox";


export function GetStarted() {
	return (
		<View style={view.container}>
			<Text style={text.title}>Get Started Now</Text>

			<View style={view.inputContainer}>
				<View style={view.inputSection}>
					<Text style={text.inputTitle}>Name</Text>
					<Input placeholder="Enter your name" />
				</View>

				<View style={view.inputSection}>
					<Text style={text.inputTitle}>Email address</Text>
					<Input placeholder="Enter your email" />
				</View>

				<View style={view.inputSection}>
					<Text style={text.inputTitle}>Password</Text>
					<Input placeholder="Secret" security={true} />
				</View>

				<View
					style={[
						view.inputSection,
						{ flexDirection: "row", alignItems: "center" },
					]}
				>
					<Text style={text.checkBox}>I agree to the Terms of Service</Text>
				</View>

				<View style={[view.inputSection, { marginTop: height * 0.0125 }]}>
					<TouchableOpacity style={button.styles}>
						<Text style={button.text}>Signup</Text>
					</TouchableOpacity>
				</View>

				<View style={view.breakupSection}>
					<Text style={text.pageBreakup}>Or</Text>
					<Line />
				</View>

				
			</View>
		</View>
	);
}

const { width, height } = Dimensions.get("window");

// DEFINE FUNCTIONS

// Dynamically apply platform styles
const getPlatformStyles = () => {
	return (
		PLATFORM_STYLES[Platform.OS as keyof typeof PLATFORM_STYLES] ??
		PLATFORM_STYLES.default
	);
};

// ✅ Create a reusable Input component
const Input = ({
	placeholder,
	security = false,
}: {
	placeholder: string;
	security?: boolean;
}) => {
	return (
		<TextInput
			style={text.input}
			placeholder={placeholder}
			placeholderTextColor="#D9D9D9"
			secureTextEntry={security}
		/>
	);
};

// DEFINE STYLES
const styles = StyleSheet.create({
	checkBox: {
		height: 10,
		width: 9,
		borderRadius: 2,
		color: "#000000",
		marginRight: 5,
	}
});

// Define platform-specific styles in an object
const PLATFORM_STYLES = {
	web: {
		width: width * 0.25,
		height: height * 0.63,
	},
	default: {
		width: width * 0.5,
		height: height * 0.4,
	},
};

const button = StyleSheet.create({
	text: {
		fontSize: 13,
		color: "white",
		fontWeight: "bold",
	},
	styles: {
		backgroundColor: "#3A5B22",
		borderRadius: 10,
		width: 404,
		height: 35,
		justifyContent: "center",
		alignItems: "center",
	},
});

const view = StyleSheet.create({
	container: {
		backgroundColor: "white",
		...getPlatformStyles(),
	},
	inputContainer: {
		paddingVertical: height * 0.05,
	},
	inputSection: {
		marginBottom: height * 0.02,
	},
	breakupSection: {
		marginTop: height * 0.04,
	},
});

const text = StyleSheet.create({
	title: {
		fontSize: 32,
		overflow: "hidden",
	},
	inputTitle: {
		fontSize: 14,
	},
	input: {
		borderWidth: 0.5,
		borderRadius: 10,
		borderColor: "#D9D9D9",
		fontSize: 10,
		height: 32,
		width: 404,
		paddingLeft: 10,
		paddingVertical: 10,
	},
	checkBox: {
		fontSize: 9,
		color: "#000000",
	},
	pageBreakup: {
		fontSize: 9,
		color: "#000000",
		textAlign: "center",
	},
});

export default GetStarted;
