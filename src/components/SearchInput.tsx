import { Input, InputLeftElement, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <form>
      <InputGroup w="100%">
        <InputLeftElement pointerEvents="none">
          <BsSearch />
        </InputLeftElement>
        <Input
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
