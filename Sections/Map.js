import React from "react";
import {
	Container,
	Box,
	Center,
	Heading,
	useColorModeValue,
} from "@chakra-ui/react";

const Map = () => {
	return (
		<Box w={"100vw"} bg={useColorModeValue("gray.100", "gray.500")}>
			<Container maxW={"7xl"}>
				<Heading textAlign={"center"} color={"green"} mb={"16px"}>
					Come visit Our Offices
				</Heading>
				<Center>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13716.576797657772!2d39.17301043841536!3d-6.785545818886756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2stz!4v1683404251668!5m2!1sen!2stz"
						width="800"
						height="600"
						allowFullscreen="true"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</Center>
			</Container>
		</Box>
	);
};

export default Map;
