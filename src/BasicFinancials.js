
import { ChakraProvider } from '@chakra-ui/react';
import {useState, useEffect} from 'react';
import { Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

function BasicFinancials(props){

    const [peRatio, setpeRatio] = useState([]);
    const [divYield, setdivYield] = useState([]);
    const [eps, setEPS] = useState([]);


  useEffect(() => {
    async function getBasicFinancials() { //fetch from finnhub API

        var tick = props.ticker;
        if(tick === 'XQQ'){
            tick = 'NDAQ';
        }
        const api_key = "cq06ur1r01qkg1be72r0cq06ur1r01qkg1be72rg";
        const api_call = "https://finnhub.io/api/v1/stock/metric?symbol=" + tick + "&metric=all&token=" + api_key + "";
        const response = await fetch(api_call);
        const data = await response.json();
        console.log(data);
        if(data["metric"]["peTTM"] == null){
            setpeRatio("-");
        }else{
            setpeRatio(data["metric"]["peTTM"].toFixed(2));
        }
        if(data["metric"]["dividendYieldIndicatedAnnual"] == null){
            setdivYield("-");
        }else{
            setdivYield(data["metric"]["dividendYieldIndicatedAnnual"].toFixed(2));
        }
        if(data["metric"]["epsTTM"] == null){
            setEPS("-");
        }else{
            setEPS(data["metric"]["epsTTM"].toFixed(2));
        }
    }
    getBasicFinancials();
    
  }, [props]);
  return(
    <ChakraProvider>
        <Text color = 'gray' fontSize='10pt' textAlign='center'>
            P/E Ratio: {peRatio}
        </Text>
        <Text color = 'gray' fontSize='10pt' textAlign='center'>
            Yield :    {divYield}
        </Text>
        <Text color = 'gray' fontSize='10pt' textAlign='center'>
            EPS :    {eps}
        </Text>
    </ChakraProvider>

  )
}

export default BasicFinancials;