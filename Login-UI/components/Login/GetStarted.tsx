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
import CheckBox from "@react-native-community/checkbox";
import GoogleOAuthButton from "./Oauth/GoogleButton";
import AppleOAuthButton from "./Oauth/AppleButton";
import { NavigationScreenProp } from 'react-navigation';

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
	},
	orContainer: {
		position: "relative", // Ensures the text can be absolutely positioned
		width: "100%", // Ensures the line spans the container
		alignItems: "center", // Centers the text horizontally
		justifyContent: "center", // Centers everything inside
		marginVertical: 20, // Space above/below
	},
	line: {
		height: 1, // Thin horizontal line
		width: "100%", // Spans the entire container
		backgroundColor: "#F5F5F5",
		position: "absolute", // Ensures it stays in the background
	},
	orText: {
		backgroundColor: "white", // Match background to hide line behind text
		paddingHorizontal: 10, // Padding so text doesn’t touch the line
		fontSize: 14, // Adjust font size as needed
		color: "#000000", // Text color
	},
	link: {
		color: "#3A5B22",
		fontWeight: "bold",
		fontSize: 14,
	},
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
	}
});

const view = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: "center", // Center vertically
		alignItems: "center", // Center horizontally
	},
	container: {
		flex: 1,
		justifyContent: "center", // Center vertically
		alignItems: "center", // Center horizontally
		backgroundColor: "white",
		...getPlatformStyles(),
		width: "100%",
		height: "100%",
	},
	inputContainer: {
		paddingVertical: height * 0.05,
		alignItems: "center", // Ensure the input container is centered
	},
	inputSection: {
		marginBottom: height * 0.02,
	},
	breakupSection: {
		marginTop: height * 0.06,
		alignItems: "center", // Center the breakup section
	},
	oathContainer: {
		flexDirection: "row", // Center OAuth buttons
		marginTop: height * 0.06,
	},
	SignInPage: {
		flexDirection: "row",
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
		fontWeight: "bold"
	},
	pageBreakup: {
		fontSize: 9,
	},
});

const GetStarted = ({
	navigation,
}: {
	navigation: NavigationScreenProp<any, any>;
}) => {
	return (
		<View style={view.center}>
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

					<View style={{ alignSelf: "flex-start" }}>
						<Text style={text.checkBox}>I agree to the Terms of Service</Text>
					</View>

					<View style={[view.inputSection, { marginTop: height * 0.0225 }]}>
						<TouchableOpacity style={button.styles}>
							<Text style={button.text}>Signup</Text>
						</TouchableOpacity>
					</View>

					<View style={view.breakupSection}>
						<View style={styles.orContainer}>
							<View style={styles.line} />
							<Text style={styles.orText}>Or</Text>
						</View>

						<View style={view.oathContainer}>
							<GoogleOAuthButton />
							<AppleOAuthButton />
						</View>
					</View>

					<View style={view.SignInPage}>
						<Text>Have An Account? </Text>
						<Text
							style={styles.link}
							onPress={() => navigation.navigate("Profile")}
						>
							Sign In
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default GetStarted;
