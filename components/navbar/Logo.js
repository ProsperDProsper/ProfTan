import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Logo = () => {
	return (
		<Box
			display={"flex"}
			fontSize={"3xl"}
			fontWeight={"bold"}
			position={"relative"}
			color={"white"}
			bg={"blue.800"}
			pr={"2"}
			pl={"6"}
			cursor={"pointer"}
		>
			<Box position={"absolute"} top={"18%"} left={"3.9%"}>
				<Box bg={"green.500"} h={"4"} w={"4"}></Box>
				<Box bg={"white"} h={"4"} w={"4"}></Box>
			</Box>
			<Text fontSize={"4xl"}>P</Text>
			<Text>ROF</Text>
			<Text fontSize={"4xl"}>T</Text>
			<Text>AN</Text>
		</Box>
	);
};

export default Logo;
