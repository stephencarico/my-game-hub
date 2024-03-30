import { HStack, Image } from "@chakra-ui/react";

import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack p={"10px"}>
      <Image w="60px" h="60px" src={logo} objectFit="contain" alt="App Logo" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
