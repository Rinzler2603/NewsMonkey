import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect,useState } from 'react';


const News= (props)=> {

  const [articles,setArticles]=useState([]);
  const [loading,setLoading]=useState(true);
  const [page,setPage]=useState(1);
  const [totalResults,setTotalResults]=useState(0);


  // constructor(){
  //   super();
  //   console.log("Helllo I am a constructor from news component");
  //   this.state={
  //     articles:[],
  //     loading:true,
  //     page:1,
  //     totalResults:0
  //   }
  // }

  const updateNews=async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=8c9ca3414c7f4a1cad44e1e6ab9e1528&page=1&pageSize=${props.pageSize}`;
    let data=await fetch(url);
    let parsedData=await data.json();
    setPage(1);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
  }

  useEffect(() => {
    updateNews();
  }, [])
  

const fetchMoreData = async () => {
  let url=`https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=8c9ca3414c7f4a1cad44e1e6ab9e1528&page=${page+1}&pageSize=${props.pageSize}`;
  setPage(page+1)
  let data=await fetch(url);
  let parsedData=await data.json();
  setArticles(articles.concat(parsedData.articles));
  setTotalResults(parsedData.totalResults);
}

    return (
      <div className='news container my-3 mx-3'>
        
        <h1 className='heading text-center'>NewsMonkey - Top Headlines</h1 >

        {/* {this.state.loading && <Spinner/>} */}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==38}
          loader={<Spinner/>}
        >

        <div className="row my-4">
          {articles.map((element)=>{
              return <div className="col-md-4 my-4 " key={element.url}>
                  <NewsItem key={element.url} title={element.title?element.title:" "} description={element.description?element.description:" "} imgurl={element.urlToImage?element.urlToImage:"https://media4.s-nbcnews.com/i/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.png"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
              </div>
          })}
        </div>

        </InfiniteScroll>

        {/* {!loading && <div className="container d-flex justify-content-between my-6">
          <button type="button" disabled={this.state.page<=1} className="btn btn-danger" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalArt/18.0)} className="btn btn-danger" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>} */}
        
      </div>
    )
}

export default News

News.defaultProps={
  country:"in",
  pageSize:9,
  category: "general"
}

News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}