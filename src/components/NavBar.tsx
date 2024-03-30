import {
  HStack,
  Input,
  InputLeftElement,
  InputGroup,
  Image,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack p={"10px"}>
      <Image w="60px" h="60px" src={logo} objectFit="contain" alt="App Logo" />
      <form>
        <InputGroup w="100%">
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="gray.300" />
          </InputLeftElement>
          <Input placeholder="Search games..." variant="filled" />
        </InputGroup>
      </form>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
