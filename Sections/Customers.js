import { Center, Flex, Text, useColorModeValue, Box } from "@chakra-ui/react";
import React from "react";
import Testimonials from "../components/testimonials/Testimonials";

const Customers = () => {
	return (
		<Box bg={useColorModeValue("gray.100", "gray.700")}>
			<Flex
				width={"100vw"}
				height={"16vh"}
				alignContent={"center"}
				justifyContent={"center"}
				bg={"blue.800"}
				my={"72px"}
				color={"white"}
			>
				<Center>
					<Text fontWeight={"extrabold"} fontSize={["24px", "28px", "32px"]}>
						1000+ customers since 2015
					</Text>
				</Center>
			</Flex>
			<Testimonials></Testimonials>
		</Box>
	);
};

export default Customers;
