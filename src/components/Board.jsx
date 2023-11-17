import { useEffect, useState } from "react"
import Items from "./Items";

const Board = () => {

    // const [articles,setArticls] = useState([]);
    const [articles, setArticles] = useState([]);


    // useEffect(() => {

    //     const apiKey = '2dcdfe90285943e0b94bbf7c280befbc';
    //     let url = `https://newsapi.org/v2/top-headlines?country=sg&apiKey=${apiKey}`;


    //     // let url = `https://newsapi.org/v2/top-headlines?country=sg&apiKey=${import.meta.env.VITE_API_KEY}`;

    //     fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));

    // },[]);

    useEffect(() => {
      let url = `https://newsapi.org/v2/top-headlines?country=sg&apiKey=${import.meta.env.VITE_API_KEY}`;
  
      fetch(url)
          .then(response => {
              if (!response.ok) {
                  throw new Error("Network response was not ok");
              }
              return response.json();
          })
          .then(data => {
              // Log the data received from the API
              console.log("API Data:", data);
              setArticls(data.articles);
          })
          .catch(error => {
              console.error("Error fetching news:", error);
          });
  }, []);
      
      
  return (
    <div>
        <h2 className="text-center">Latest <span className="badge bg-danger">news</span></h2>  
        {articles.map((news,index) => {
          return <Items key={index} title = {news.title} description={news.description} src={news.urlToImage} url={news.url} />

        })}

    </div>
  )
}

export default Board