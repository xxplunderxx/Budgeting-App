import React from "react";
import {
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    Linking,
} from "react-native";

const AppleOAuthButton = () => {

    const handleAppleLogin = () => {
        // Open the Google OAuth URL in the browser
        Linking.openURL("https://google.com");
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleAppleLogin}>
                <Image
                    style={styles.googleButton}
                    source={require("../../../assets/images/apple.png")}
                    accessibilityLabel="Google Login"
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    googleButton: {
        width: 200,
        height: 50,
        resizeMode: "contain",
    },
});

export default AppleOAuthButton;
