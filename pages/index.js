import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import Customers from "../Sections/Customers";
import Footer from "../Sections/Footer";
import Header from "../Sections/Header";
import Map from "../Sections/Map";
import Services from "../Sections/Services";
const index = () => {
	return (
		<Box overflowX="hidden" bg={"white"}>
			<Header />
			<Services></Services>
			<Customers />
			<Map />
			<Footer />
		</Box>
	);
};

export default index;
