import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const SwicthIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      variant="ghost"
      color="current"
      position={"fixed"}
      right={"4"}
      onClick={toggleColorMode}
      icon={<SwicthIcon />}
      {...props}
    />
  );
};

export default ColorModeSwitcher;
