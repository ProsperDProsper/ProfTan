import { Box, Button, Text, Container, Flex } from "@chakra-ui/react";
import Image from "next/image";

const Hero = ({ heading, description, imageUrl }) => {
	return (
		<Box w={"100%"}>
			<Box>
				<Box position={"relative"}>
					<Image
						src={imageUrl}
						width={"3000"}
						height={"3000"}
						style={{
							filter: "brightness(62%)",
							width: "100%",
							height: "100vh",
							objectFit: "cover",
						}}
					></Image>
					<Container
						maxW={"2xl"}
						position={"absolute"}
						top={"30%"}
						color={"gray.100"}
						ml={{ base: "26", md: "28" }}
					>
						<Flex direction={"column"} gap={"8"}>
							<Text
								fontSize={["4xl", "5xl", "6xl"]}
								textAlign={"left"}
								fontWeight={"bold"}
							>
								{heading}
							</Text>
							<Text fontSize={["md", "xl", "2xl"]} pr={"8"} textAlign={"left"}>
								{description}
							</Text>
							<Button
								size={"lg"}
								maxW={"160px"}
								colorScheme={"green"}
								color={"white"}
							>
								CONTACT US
							</Button>
						</Flex>
					</Container>
				</Box>
			</Box>
		</Box>
	);
};

export default Hero;
