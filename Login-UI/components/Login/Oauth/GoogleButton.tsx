import React from "react";
import {
	View,
	TouchableOpacity,
	Image,
	StyleSheet,
	Linking,
	Text,
} from "react-native";

const GoogleOAuthButton = () => {

	const handleGoogleLogin = () => {
		// Open the Google OAuth URL in the browser
		Linking.openURL("https://google.com");
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={handleGoogleLogin}>
				<View style={styles.googleButton}>
					<Image
						style={styles.googleImage}
						source={require("../../../assets/images/google.png")}
						accessibilityLabel="Google Login"
					/>
					<Text> Sign in with Google</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 4,
		paddingBottom: 4,
	},
	googleButton: {
		width: 190,
		height: 32,
		resizeMode: "contain",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		backgroundColor: "white",
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "#D9D9D9",
	},
	googleImage: {
		width: 24,
		height: 24,
	},
});

export default GoogleOAuthButton;
