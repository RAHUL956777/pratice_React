import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <form>
        <VStack
          alignItems={"stretch"}
          spacing={"8"}
          w={["full", "96"]}
          m={"auto"}
          my={"16"}
        >
          <Heading>Welcome Back</Heading>
          <Input
            placeholder="Enter email"
            type="email"
            required
            focusBorderColor="purple.500"
          />
          <Input
            placeholder="Enter password"
            type={"password"}
            required
            focusBorderColor="purple.500"
          />

          <Button variant={"link"} alignSelf={"end"}>
            <Link to={"/forgetpassword"} />
            Forget Password
          </Button>

          <Button colorScheme="purple" type="submit">
            Log In
          </Button>
          <Text textAlign={"right"}>
            New User? <br />
            <Button variant={"link"} colorScheme="purple">
              <Link to={"/signup"}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
