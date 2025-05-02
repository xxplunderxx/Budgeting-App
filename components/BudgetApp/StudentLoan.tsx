import React from "react";
import { NavigationProp } from "@react-navigation/native";
import {
	View,
	StyleSheet,
	Dimensions,
	Platform,
	Text,
	TextInput,
	TouchableOpacity,
} from "react-native";

const StudentLoan = ({
	navigation,
}: {
	navigation: NavigationProp<any, any>;
}) => {
	return (
		<View>
            <Text>Student Loans</Text>
        </View>
	);
};

export default StudentLoan;