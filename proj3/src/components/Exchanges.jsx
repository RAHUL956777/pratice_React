import axios from "axios";
import { useEffect, useState } from "react";
import { server } from "../main";
import {
  Container,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Loader from "./Loader";
import Error from "./Error";

const Exchanges = () => {
  const [loading, setLoading] = useState(true);
  const [exchanges, setExchanges] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fecthExchanges = async () => {
      setTimeout(async () => {
        try {
          const { data } = await axios.get(`${server}/exchanges`);
          setExchanges(data);
          setLoading(false);
        } catch (error) {
          setError(true);
          setLoading(false);
        }
      }, 1000);
    };
    fecthExchanges();
  }, []);

  if (error) return <Error message={'Error while Fexthing data'}/>

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"}>
            {exchanges.map((exchange) => (
              <ExchangeCard
                key={exchange.id}
                name={exchange.name}
                img={exchange.image}
                rank={exchange.trust_score_rank}
                url={exchange.url}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Exchanges;

// eslint-disable-next-line react/prop-types
const ExchangeCard = ({ name, img, rank, url }) => (
  <a href={url} target="blank">
    <VStack
      w={"52"}
      shadow={"lg"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Image
        src={img}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt="exchanges"
      />
      <Heading size={"md"} noOfLines={1}>
        {rank}
      </Heading>

      <Text noOfLines={1}>{name}</Text>
    </VStack>
  </a>
);
