import axios from "axios";
import { useEffect, useState } from "react";
import { server } from "../main";
import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import Loader from "./Loader";
import Error from "./Error";
import CoinCard from "./CoinCard";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const chnagePage = () => {
    setPage(page + 1);
    setLoading(true);
  };

  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fecthCoin = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fecthCoin();
  }, [currency, page]);

  if (error) return <Error message={"Error while Fecthing Coins"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>

        <RadioGroup value={currency} onChange={setCurrency} p={'8'}>
        <HStack spacing={'4'}>
          <Radio value={'inr'}>₹</Radio>
          <Radio value={'usd'}>$</Radio>
          <Radio value={'eur'}>€</Radio>
          
        </HStack>
        </RadioGroup>

          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((exchange) => (
              <CoinCard
                id={exchange.id}
                key={exchange.id}
                name={exchange.name}
                price={exchange.current_price}
                img={exchange.image}
                symbol={exchange.symbol}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>
          <HStack w={'full'} overflowX={'auto'} p={'8'}>
            {btns.map((item, index) => (
              <Button
                key={index}
                backgroundColor={"blackAlpha.900"}
                color={"white"}
                onClick={() => chnagePage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
