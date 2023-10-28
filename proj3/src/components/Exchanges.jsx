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

const Exchanges = () => {
  const [loading, setLoading] = useState(true);
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    const fecthExchanges = async () => {
      setTimeout(async () => {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);

      }, 1000);
    };
    fecthExchanges();
  }, []);

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"}>
            {exchanges.map((exchange) => {
              <ExchangeCard
                key={exchange.id}
                name={exchange.name}
                img={exchange.image}
                rank={exchange.trust_score_rank}
                url={exchange.url}
              />;
            })}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Exchanges;

const ExchangeCard = ({ name, img, rank, url }) => {
  <a href={url} target={"blank"}>
    <VStack>
      <Image src={img} w={"10"} h={"10"} objectFit={"contain"} alt="exchanges">
        <Heading size={"md"} noOfLines={1}>
          {rank}
        </Heading>

        <Text noOfLines={1}>{name}</Text>
      </Image>
    </VStack>
  </a>;
};
