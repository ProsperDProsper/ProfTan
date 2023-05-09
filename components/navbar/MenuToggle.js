import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

const MenuToggle = ({ toggle, isOpen }) => {
	return (
		<Box
			cursor={"pointer"}
			display={["block", "block", "none"]}
			onClick={toggle}
		>
			{isOpen ? <CloseIcon boxSize={"6"} /> : <HamburgerIcon boxSize={"8"} />}
		</Box>
	);
};

export default MenuToggle;
