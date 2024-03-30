import {
  HStack,
  Input,
  InputLeftElement,
  InputGroup,
  Image,
  Switch,
  Text,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

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
          <Input placeholder="Search games..." variant="filled"></Input>
        </InputGroup>
      </form>
      <HStack>
        <Switch id="theme-switch" />
        <Text whiteSpace="nowrap">Dark Mode</Text>
      </HStack>
    </HStack>
  );
};

export default NavBar;
