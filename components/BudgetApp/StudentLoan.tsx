import React from "react";
import { NavigationProp } from "@react-navigation/native";
import {
	View,
	StyleSheet,
	Dimensions,
	Platform,
	Text,
	TextInput,
	TouchableOpacity
} from "react-native";

const styles = StyleSheet.create({
	HeaderSection: {
		alignItems: "center",
		justifyContent: "center",
	},
});


const StudentLoan = ({
	navigation,
}: {
	navigation: NavigationProp<any, any>;
}) => {
	return (
		<View>
			<View>
				<Text>Student Loans</Text>
                <View>
                    <Text>0 /</Text>
                    <Text>10,000</Text>
                    <TouchableOpacity>
                        <Text>Edit</Text>
                    </TouchableOpacity>
                </View>
			</View>
            <View>
                <Text>Student Loan Graph</Text>
            </View>
		</View>
	);
};

export default StudentLoan;