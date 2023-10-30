import {
  Badge,
  Box,
  Container,
  HStack,
  Image,
  Progress,
  Radio,
  RadioGroup,
  Stat,
  StatArrow,
  StatHelpText,
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
              <StatHelpText>
                <StatArrow
                  type={
                    coin.market_data.price_change_percentage_24h > 0
                      ? "increase"
                      : "decrease"
                  }
                />
                {coin.market_data.price_change_percentage_24h}%
              </StatHelpText>
            </Stat>
            <Badge
              fontSize={"2xl"}
              bgColor={"blackAlpha.900"}
              color={"white"}
            >{`#${coin.market_cap_rank}`}</Badge>

            <CustomBar
              high={`${currencySymbol}${coin.market_data.high_24h[currency]}`}
              low={`${currencySymbol}${coin.market_data.low_24h[currency]}`}
            />

            <Box w={"full"} p="4">
              <Item title={"Max Supply"} value={coin.market_data.max_supply} />
              <Item
                title={"Circulateing Supply"}
                value={coin.market_data.circulating_supply}
              />
              <Item
                title={"Market Cap"}
                value={`${currencySymbol}${coin.market_data.market_cap[currency]}}`}
              />
              <Item
                title={"All Time Low"}
                value={`${currencySymbol}${coin.market_data.atl[currency]}}`}
              />
              <Item
                title={"All Time High"}
                value={`${currencySymbol}${coin.market_data.ath[currency]}}`}
              />
            </Box>
          </VStack>
        </>
      )}
    </Container>
  );
};

const Item = ({ title, value }) => {
  return (
    <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
      <Text fontFamily={"Bebas Neue"} letterSpacing={"widest"}>
        {title}
      </Text>
      <Text>{value}</Text>
    </HStack>
  );
};

const CustomBar = ({ high, low }) => {
  return (
    <VStack w={"full"}>
      <Progress value={50} colorScheme={"teal"} w={"full"} />
      <HStack justifyContent={"space-evenly"} w={"full"}>
        <Badge colorScheme="red">{low}</Badge>
        <Badge colorScheme="green">{high}</Badge>

        <Text fontSize={"sm"}>24H Range</Text>
      </HStack>
    </VStack>
  );
};

export default CoinDetails;
