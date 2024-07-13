
import { ChakraProvider } from '@chakra-ui/react';
import {useState, useEffect} from 'react';
import { Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

function News(props){

    const [news, setNews] = useState([]);


  useEffect(() => {
    async function getNews() {
        var nowDate = new Date(); 
        var dd1 = nowDate.getDate();
        var mm1 = nowDate.getMonth()+1;
        if(dd1 < 10){
            dd1 = '0' + dd1;
        }
        if(mm1 < 10){
            mm1 = '0' + mm1;
        }
        var today = nowDate.getFullYear()+'-'+mm1+'-'+dd1;
        var d = new Date();
        d.setDate(d.getDate() - 1);
        var dd2 = d.getDate();
        var mm2 = d.getMonth()+1;
        if(dd2 < 10){
            dd2 = '0' + dd2;
        }
        if(mm2 < 10){
            mm2 = '0' + mm2;
        }
        var tick = props.ticker;
        if(tick === 'XQQ'){
            tick = 'NDAQ';
        }
        var yesterday = d.getFullYear()+'-'+mm2+'-'+dd2;
        const api_key = "cq06ur1r01qkg1be72r0cq06ur1r01qkg1be72rg";
        //const api_call = "https://finnhub.io/api/v1/company-news?symbol=" + tick + "&from=" + yesterday + "&to=" + today + "&token=" + api_key + "";
        const api_call = "https://finnhub.io/api/v1/stock/metric?symbol=" + tick + "&metric=all&token=" + api_key + "";
        //finnhub.io/api/v1/stock/metric?symbol=AAPL&metric=all&token=cq06ur1r01qkg1be72r0cq06ur1r01qkg1be72rg
        const response = await fetch(api_call);
        const data = await response.json();
        setNews(data["series"]["annual"]);
    }
    getNews();
    
  }, [props]);
  console.log(news["pe"]["0"]["v"])
  return(
    <ChakraProvider>
          {/* {news.map((single_news, index) => {
              return (
                  <Link key = {index} href={single_news.url} isExternal>
                    {single_news.headline} 
                    <ExternalLinkIcon mx='2px' />
                  </Link>
                );
              })} */}
    </ChakraProvider>

  )
}

export default News;