import Stock1 from './Stock1';
import { ChakraProvider } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';


function Stocks(){



  const stocks = [
    {
      stock_ticker: 'RY'
    },
    {
      stock_ticker: 'BNS'
    },
    {
      stock_ticker: 'XQQ'
    },
    {
      stock_ticker: 'SU'
    },
    {
      stock_ticker: 'TD'
    },
    {
      stock_ticker: 'NTR'
    },
    {
      stock_ticker: 'T'
    },
    {
      stock_ticker: 'SHOP'
    },
    {
      stock_ticker: 'ENB'
    }
  ]

    return(
      <ChakraProvider>
        <SimpleGrid 
          minChildWidth='450px'
          w='100%'
          spacing = '0px'
          >
            {stocks.map((stock, index) => {
                let bg_colour = "black";
                return (
                    <Stock1 src={require('./' + stock.stock_ticker + '.png')} stock_ticker = {stock.stock_ticker} bcolour = {bg_colour} key={index}/>
                  );
                })}
        </SimpleGrid>
      </ChakraProvider>

    )
}

export default Stocks;