import { Box, Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingOptions = {
  pos: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  textTransform: "uppercase",
  p: "4",
  size: "2xl",
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW="container.xl" minH={"100vh"} padding={"16"}>
        <Heading
          textTransform={"uppercase"}
          py={"2"}
          w={"fit-content"}
          margin={"auto"}
          borderBottom={"2px solid"}
        >
          Services
        </Heading>

        <Stack
          h="full"
          p={"4"}
          alignItems={"center"}
          direction={["column", "row"]}
        >
          <Image src={img5} h={["40", "400"]} filter={"hue-rotate(-130deg)"} />

          <Text
            letterSpacing={"widest"}
            lineHeight={"190%"}
            p={["4", "16"]}
            textAlign={"center"}
          >
            Certainly, here&apos;s a 60-word dummy text: In the heart of a
            bustling city, where innovation meets tradition, our company
            thrives. With a team of dedicated experts, we create web solutions
            that redefine excellence. We blend cutting-edge technology with
            creativity to craft dynamic websites. Our mission is to empower your
            digital presence and drive success. Join us on this exciting journey
            to a brighter, digital future.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      infiniteLoop
      autoPlay
      showStatus={false}
      showArrows={false}
      interval={1000}
      showThumbs={false}
    >
      <Box w="full" h={"100vh"}>
        <Image src={img1} h={"full"} w={"full"} objectFit={"cover"} />
        <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
          Future Of Gaming
        </Heading>
      </Box>

      <Box w="full" h={"100vh"}>
        <Image src={img2} h={"full"} w={"full"} objectFit={"cover"} />
        <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
          Wacth The Future
        </Heading>
      </Box>

      <Box w="full" h={"100vh"}>
        <Image src={img3} h={"full"} w={"full"} objectFit={"cover"} />
        <Heading bgColor={"whiteAlpha.900"} color={"black"} {...headingOptions}>
          Gaming On Console
        </Heading>
      </Box>

      <Box w="full" h={"100vh"}>
        <Image src={img4} h={"full"} w={"full"} objectFit={"cover"} />
        <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
          Night Life Is Cool
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Home;
