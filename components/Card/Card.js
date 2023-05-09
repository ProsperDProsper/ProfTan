import {
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	Heading,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import React from "react";

const ServiceCard = ({ heading, description }) => {
	return (
		<Card boxShadow={"2xl"} maxW={"350px"}>
			<CardBody>
				<Box>
					<Image
						src="/imageFake2.png"
						objectFit={"cover"}
						alt="fake image"
					></Image>
				</Box>
				<Stack pt={"8"}>
					<Heading color={"gray.600"} fontSize={"28px"}>
						{heading}
					</Heading>
					<Text color={"gray.600"}>{description}</Text>
				</Stack>
			</CardBody>
			<CardFooter>
				<Button colorScheme={"green"}>Learn More</Button>
			</CardFooter>
		</Card>
	);
};

export default ServiceCard;
