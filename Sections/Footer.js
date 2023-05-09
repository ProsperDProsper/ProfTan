import {
	Box,
	Container,
	Link,
	SimpleGrid,
	Stack,
	Text,
	Input,
	IconButton,
	Divider,
	useColorModeValue,
} from "@chakra-ui/react";
import Logo from "../components/navbar/Logo";
import { EmailIcon } from "@chakra-ui/icons";

const ListHeader = ({ children }) => {
	return (
		<Text fontWeight={"500"} fontSize={"lg"} mb={2}>
			{children}
		</Text>
	);
};

export default function Footer() {
	return (
		<Box
			bg={useColorModeValue("gray.100", "gray.700")}
			color={useColorModeValue("gray.700", "gray.200")}
		>
			<Divider py={"48px"} />
			<Container as={Stack} maxW={"6xl"} py={10}>
				<SimpleGrid
					templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
					spacing={8}
				>
					<Stack spacing={6}>
						<Box maxW={"210px"}>
							<Logo />
						</Box>
						<Text fontSize={"sm"}>
							© 2023 Prosper D. Prosper. All rights reserved
						</Text>
					</Stack>
					<Stack align={"flex-start"}>
						<ListHeader>Company</ListHeader>
						<Link href={"#"}>About us</Link>
						<Link href={"#"}>Blog</Link>
						<Link href={"#"}>Contact us</Link>
						<Link href={"#"}>Pricing</Link>
						<Link href={"#"}>Testimonials</Link>
					</Stack>
					<Stack align={"flex-start"}>
						<ListHeader>Support</ListHeader>
						<Link href={"#"}>Help Center</Link>
						<Link href={"#"}>Terms of Service</Link>
						<Link href={"#"}>Legal</Link>
						<Link href={"#"}>Privacy Policy</Link>
						<Link href={"#"}>Satus</Link>
					</Stack>
					<Stack align={"flex-start"}>
						<ListHeader>Stay up to date</ListHeader>
						<Stack direction={"row"}>
							<Input
								placeholder={"Your email address"}
								bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
								border={0}
								_focus={{
									bg: "whiteAlpha.300",
								}}
							/>
							<IconButton
								bg={useColorModeValue("green.400", "green.800")}
								color={useColorModeValue("white", "gray.800")}
								_hover={{
									bg: "green.600",
								}}
								aria-label="Subscribe"
								icon={<EmailIcon />}
							/>
						</Stack>
					</Stack>
				</SimpleGrid>
			</Container>
		</Box>
	);
}
