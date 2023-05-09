import NextLink from "next/link";
import { Box, Button, Link, Stack, Text } from "@chakra-ui/react";

const MenuLInks = ({ isOpen }) => {
	return (
		<Box
			display={[
				`${isOpen ? "block" : "none"}`,
				`${isOpen ? "block" : "none"}`,
				"block",
			]}
			textTransform="uppercase"
		>
			<Stack
				spacing={"8"}
				direction={["column", "column", "row"]}
				alignItems="center"
			>
				<Link as={NextLink} href={"/"}>
					<Text>Home</Text>
				</Link>{" "}
				<Link as={NextLink} href={"/"}>
					<Text>Services</Text>
				</Link>{" "}
				<Link as={NextLink} href={"/"}>
					<Text>About Us</Text>
				</Link>
				<Button colorScheme={"green"} color={"white"} alignSelf={"center"}>
					CONTACT US
				</Button>
			</Stack>
		</Box>
	);
};

export default MenuLInks;
