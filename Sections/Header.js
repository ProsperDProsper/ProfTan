import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import Navbar from "../components/navbar/Navbar";
import { Box } from "@chakra-ui/react";
import Hero from "../components/Hero";

const Header = () => {
	return (
		<Box w={"100%"}>
			<Navbar />
			<Swiper
				spaceBetween={0}
				centeredSlides={true}
				effect={"fade"}
				autoplay={{
					delay: 9000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Navigation, EffectFade, Pagination]}
				className="mySwiper"
			>
				<SwiperSlide>
					<Hero
						imageUrl={"/hero4.jpg"}
						heading={"IT Solutions Just Got Better  "}
						description={`Proftan is a company that offers top-notch IT solutions, hardware and software consultation services. We specialize in providing expert advice and tailored solutions that cater to the unique needs of each client. With Proftan, you can be sure that your IT and technology needs are in good hands.`}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Hero
						imageUrl={"/heroImage.jpg"}
						heading={"Experts tailored For You"}
						description={`Our team of experts is made up of skilled professionals who are passionate about technology and dedicated to providing the best solutions for our clients. We take the time to understand your business needs and provide solutions that are tailored to your specific requirements. Whether you need software development, hardware installation or IT support, we have the expertise to help.`}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Hero
						imageUrl={"/hero3.jpg"}
						heading={"Quality Services Redefined"}
						description={`At Proftan, we are committed to providing our clients with quality services and products. We believe in using the best technology available to provide reliable and efficient solutions. We work with trusted partners to source the highest quality hardware and software products to ensure that our clients receive the best possible solutions.`}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Hero
						imageUrl={"/hero2.jpg"}
						heading={"Integrated Technology "}
						description={`Our services are integrated, meaning that we provide end-to-end solutions that cover all aspects of your IT and technology needs. We work with you to understand your business processes and provide solutions that streamline operations, reduce costs and improve efficiency. With Proftan, you can be sure that your IT solutions are integrated and optimized for your business needs.`}
					/>
				</SwiperSlide>
			</Swiper>
		</Box>
	);
};

export default Header;
