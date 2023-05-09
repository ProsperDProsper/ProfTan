import {
	Box,
	Flex,
	Heading,
	Text,
	Stack,
	Container,
	Avatar,
	useColorModeValue,
} from "@chakra-ui/react";

const Testimonial = ({ children }) => {
	return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
	return (
		<Stack
			bg={useColorModeValue("white", "gray.800")}
			boxShadow={"lg"}
			p={8}
			rounded={"xl"}
			align={"center"}
			pos={"relative"}
			_after={{
				content: `""`,
				w: 0,
				h: 0,
				borderLeft: "solid transparent",
				borderLeftWidth: 16,
				borderRight: "solid transparent",
				borderRightWidth: 16,
				borderTop: "solid",
				borderTopWidth: 16,
				borderTopColor: useColorModeValue("white", "gray.800"),
				pos: "absolute",
				bottom: "-16px",
				left: "50%",
				transform: "translateX(-50%)",
			}}
		>
			{children}
		</Stack>
	);
};

const TestimonialHeading = ({ children }) => {
	return (
		<Heading as={"h3"} fontSize={"xl"}>
			{children}
		</Heading>
	);
};

const TestimonialText = ({ children }) => {
	return (
		<Text
			textAlign={"center"}
			color={useColorModeValue("gray.600", "gray.400")}
			fontSize={"sm"}
		>
			{children}
		</Text>
	);
};

const TestimonialAvatar = ({ src, name, title }) => {
	return (
		<Flex align={"center"} mt={8} direction={"column"}>
			<Avatar src={src} alt={name} mb={2} />
			<Stack spacing={-1} align={"center"}>
				<Text fontWeight={600}>{name}</Text>
				<Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
					{title}
				</Text>
			</Stack>
		</Flex>
	);
};

export default function Testimonials() {
	return (
		<Box bg={useColorModeValue("gray.100", "gray.700")} color={"gray.700"}>
			<Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
				<Stack spacing={0} align={"center"}>
					<Heading color={"gray.600"}>Our Clients Speak</Heading>
					<Text color={"gray.700"}>
						We have been working with clients around the country
					</Text>
				</Stack>
				<Stack
					direction={{ base: "column", md: "row" }}
					spacing={{ base: 10, md: 4, lg: 10 }}
				>
					<Testimonial>
						<TestimonialContent>
							<TestimonialHeading>Efficient Collaborating</TestimonialHeading>
							<TestimonialText>
								Their team's collaboration skills are exceptional, always
								delivering on time and within budget.
							</TestimonialText>
						</TestimonialContent>
						<TestimonialAvatar
							src={
								"https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
							}
							name={"Mtani Bespoke"}
							title={"CEO at Bespoke Corporation"}
						/>
					</Testimonial>
					<Testimonial>
						<TestimonialContent>
							<TestimonialHeading>Intuitive Design</TestimonialHeading>
							<TestimonialText>
								Their designs are both beautiful and practical. We're impressed
								with the way they seamlessly merge aesthetics with
								functionality.
							</TestimonialText>
						</TestimonialContent>
						<TestimonialAvatar
							src={
								"https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
							}
							name={"Abdul Nsekela"}
							title={"CEO at CRDB Bank PLC"}
						/>
					</Testimonial>
					<Testimonial>
						<TestimonialContent>
							<TestimonialHeading>Mindblowing Service</TestimonialHeading>
							<TestimonialText>
								Their customer service is unparalleled. We felt like we were
								their top priority every step of the way.
							</TestimonialText>
						</TestimonialContent>
						<TestimonialAvatar
							src={
								"https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
							}
							name={"James Mwangi"}
							title={"CEO at Equity Group Holdings"}
						/>
					</Testimonial>
				</Stack>
			</Container>
		</Box>
	);
}
