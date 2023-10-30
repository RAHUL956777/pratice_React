import {
  Box,
  Container,
  HStack,
  Image,
  Radio,
  RadioGroup,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Loader from "./Loader.jsx";
import { useParams } from "react-router-dom";
import axios from "axios";

import { server } from "../main.jsx";
import Error from "./Error.jsx";


const CoinDetails = () => {
  const [coin, setCoin] = useState({});
  const [loading, SetLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");

  
const currencySymbol =
currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const params = useParams();

  useEffect(() => {
    const fecthCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        console.log(data);
        setCoin(data);
        SetLoading(false);
      } catch (error) {
        setError(true);
        SetLoading(false);
      }
    };
    fecthCoin();
  }, [params.id]);

  if (error) return <Error message={"Error while fecthing coins"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Box w={"full"} borderWidth={1}>
            hello
          </Box>

          <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
            <HStack spacing={"4"}>
              <Radio value={"inr"}>INR</Radio>
              <Radio value={"usd"}>USD</Radio>
              <Radio value={"eur"}>EUR</Radio>
            </HStack>
          </RadioGroup>

          <VStack spacing={"4"} p={"16"} alignItems={"flex-start"}>
            <Text fontSize={"sm"} alignSelf={"center"} opacity={"0.7"}>
              Last Updated On {Date(coin.market_data.last_update).split("G")[0]}
            </Text>
            <Image
              src={coin.image.large}
              w={"16"}
              h={"16"}
              objectFit={"contain"}
            />

            <Stat>
              <StatLabel>{coin.name}</StatLabel>
              <StatNumber>
                {currencySymbol}
                {coin.market_data.current_price[currency]}
              </StatNumber>
            </Stat>
          </VStack>
        </>
      )}
    </Container>
  );
};

export default CoinDetails;
