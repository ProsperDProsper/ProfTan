import {
	Box,
	Center,
	Container,
	Flex,
	Heading,
	SimpleGrid,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Card from "../components/Card/Card";

const Services = () => {
	return (
		<>
			<Container maxW="7xl" pt={"20"} bg={"white"}>
				<Flex direction={"column"} gap={"36px"}>
					<Heading alignSelf={"center"} color={"green.500"}>
						Trust ProfTan with Your IT. <br />
						Your Budget Will Thank You.
					</Heading>
					<Text color={"gray.600"}>
						IT that’s budget friendly? You don’t have to sacrifice on quality
						service to get IT that’s affordable. ProfTan will work with
						businesses of all sizes to create an IT services package for your
						needs. Get best-in-class managed IT services including internet,
						networks, cybersecurity, and cloud communications solutions at a
						price that won’t break the bank.
					</Text>
					<SimpleGrid minChildWidth="300px" spacing="40px">
						<Card
							heading={"Information and Cyber Security Consulting Services"}
							description={`Our Information and cyber security consultants provide services and solutions that
                             deliver continuous security assurance for business, government, and critical
                             infrastructure.`}
						></Card>
						<Card
							heading={`Software Integration Services`}
							description={`Cost effective method of system integration of existing system for client is recommended and
delivered by us instead of the costlier method of incorporating new applications in order to
keep up with software and hardware enhancements.`}
						></Card>
						<Card
							heading={`Troubleshooting, Problem Solving & Enhancements`}
							description={`We are involved in solving problems for companies who face real problems in implementation
application or who find that requirements have changed the development cycles usually take a
long time. We offer to solve problems faced, troubleshoot applications and support application
by fine tuning, enhancement and maintenance`}
						></Card>
						<Card
							heading={`Corporate Training.`}
							description={`We offer to train your resources on various technologies adopted with special emphasis on Onthe-Job training. We will help them maintain existing application. MIS strategic training at the
Managerial level is an additional service we offer so that the management becomes more aware
of latest technology, its implementation and type of solution.`}
						></Card>
						<Card
							heading={`Project Planning – Consultancy.`}
							description={`Even before developing a system, we can assist companies to plan a project including cost
analysis, investment analysis, return analysis as well as project management so that the
proposal could be presented to the management for approval. `}
						></Card>
						<Card
							heading={`Product Selling`}
							description={`Even before developing a system, we can assist companies to plan a project including cost
analysis, investment analysis, return analysis as well as project management so that the
proposal could be presented to the management for approval. `}
						></Card>
					</SimpleGrid>
				</Flex>
			</Container>
		</>
	);
};

export default Services;
