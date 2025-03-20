import React from "react";
import {
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    Linking,
    Text,
} from "react-native";

const AppleOAuthButton = () => {

    const handleAppleLogin = () => {
        // Open the Google OAuth URL in the browser
        Linking.openURL("https://google.com");
    };

    return (
			<View style={styles.container}>
				<TouchableOpacity onPress={handleAppleLogin}>
					<View style={styles.appleButton}>
						<Image
							style={styles.appleImage}
							source={require("../../../assets/images/apple.png")}
							accessibilityLabel="Apple Login"
						/>
						<Text> Sign in with Apple</Text>
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
	appleButton: {
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
	appleImage: {
		width: 24,
		height: 24,
	},
});

export default AppleOAuthButton;
