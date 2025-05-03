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
import StudentLoanGraph from "./StudentLoanGraph";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center", // Center vertically
		alignItems: "center", // Center horizontally
		width: "100%",
		height: "100%",
        backgroundColor: "white"
	},
});

const header = StyleSheet.create({
	container: {
		width: "100%",
		height: "10%",
        backgroundColor: "white"
	},
	loan: {
		flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 25,
	},
	numbers: {
		flexDirection: "row",
		alignItems: "center",
        marginLeft: 25,
	},
	edit: {
		justifyContent: "center",
        marginRight: 15,
	},
});

const graph = StyleSheet.create({
	title: {
		fontSize: 14,
		fontFamily: "Poppins",
		fontWeight: "bold",
		marginLeft: 12.5,
	},
	container: {
		justifyContent: "space-between",
		marginTop: 40,
		backgroundColor: "#F6F6F6",
		flex: 1,
	},
});

const text = StyleSheet.create({
	title: {
		fontSize: 18,
		fontFamily: "Poppins",
		fontWeight: "bold",
        marginLeft: 12.5,
	},
	text: {
		fontSize: 16,
		fontFamily: "Poppins",
	},
	numberator: {
		fontSize: 26,
		fontFamily: "Inter",
		fontWeight: "medium",
		color: "#352DFF",
	},
	denomenator: {
		fontSize: 18,
		fontFamily: "Inter",
		fontWeight: "medium",
	},
	edit: {
		fontSize: 16,
		fontFamily: "Poppins",
		fontWeight: "medium",
		color: "#352DFF",
	},
});


const StudentLoan = ({
	navigation,
}: {
	navigation: NavigationProp<any, any>;
}) => {
	return (
		<View style={styles.container}>
			<View style={header.container}>
				<Text style={text.title}>Student Loans</Text>
				<View style={header.loan}>
					<View style={header.numbers}>
						<Text style={text.numberator}>0</Text>
						<Text style={text.denomenator}> /</Text>
						<Text style={text.denomenator}>10,000</Text>
					</View>
					<View style={header.edit}>
						<TouchableOpacity>
							<Text 
                                onPress={() => navigation.navigate("Home")} 
                                style={text.edit}
                            >
                                Edit
                            </Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<View style={graph.container}>
				<Text 
                    style={graph.title}
                >
                    Student Loan Graph
                </Text>
				<StudentLoanGraph />
			</View>
		</View>
	);
};

export default StudentLoan;