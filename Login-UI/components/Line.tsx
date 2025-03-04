import React from "react";
import { View, StyleSheet } from "react-native";

const Line = ({
}) => {
	return (
		<View
			style={[
				styles.line,
				{
					backgroundColor: "#F5F5F5",
					height: 1,
					width: "100%",
				},
			]}
		/>
	);
};

const styles = StyleSheet.create({
	line: {
		alignSelf: "center",
	},
});

export default Line;
