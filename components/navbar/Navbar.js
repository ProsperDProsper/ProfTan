import { useState } from "react";
import MenuToggle from "./MenuToggle";
import { Box, Center, Container, Flex, Text } from "@chakra-ui/react";

import MenuLInks from "./MenuLInks";
import Logo from "./Logo";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Box position={"relative"}>
			<Container
				display={{ md: "flex" }}
				position="fixed"
				justifyContent={{ md: "space-between" }}
				maxW="container.2xl"
				px={["2", "8", "12", "16"]}
				py={["4", "6", "8"]}
				color="blue.700 "
				boxShadow={"lg"}
				alignItems="center"
				bg={"whiteAlpha.800"}
				zIndex={"10"}
			>
				<Flex
					as={"nav"}
					justify={["space-between"]}
					alignItems="center"
					px={["4", "6", "8"]}
				>
					<Logo />
					<MenuToggle toggle={toggle} isOpen={isOpen} />
				</Flex>
				<Center pt={"12px"}>
					<MenuLInks isOpen={isOpen} />
				</Center>
			</Container>
		</Box>
	);
};

export default Navbar;
