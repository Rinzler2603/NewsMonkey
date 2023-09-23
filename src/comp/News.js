import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


export default class News extends Component {

  constructor(){
    super();
    console.log("Helllo I am a constructor from news component");
    this.state={
      articles:[],
      loading:true,
      page:1,
      totalResults:0
    }
  }

  static defaultProps={
    country:"in",
    pageSize:9,
    category: "general"
  }

  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }

  async componentDidMount(){
    this.props.setProgress(10);
    let url=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=8c9ca3414c7f4a1cad44e1e6ab9e1528&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({loading:false})
    this.setState({
      page:1,
      articles:parsedData.articles,
      totalArt:parsedData.totalResults})
    this.props.setProgress(100);
    }

  handlePrevClick=async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=8c9ca3414c7f4a1cad44e1e6ab9e1528&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({loading:false})
    window.scrollTo(0,0);
    this.setState({   
      page:this.state.page-1,
      articles:parsedData.articles})
  }
  handleNextClick= async()=>{
    if(this.state.page+1<=Math.ceil(this.state.totalArt/this.props.pageSize)){
      let url=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=8c9ca3414c7f4a1cad44e1e6ab9e1528&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data=await fetch(url);
      let parsedData=await data.json();
      this.setState({loading:false})
      this.setState({
        page:this.state.page+1,
        articles:parsedData.articles})
      }
      window.scrollTo(0,0);
  }

  fetchMoreData = async () => {
    let url=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=8c9ca3414c7f4a1cad44e1e6ab9e1528&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({
      page:this.state.page + 1,
      articles:this.state.articles.concat(parsedData.articles),
      totalResults:parsedData.totalResults,
      loading:false
    })
  }

  render() {
    return (
      <div className='news container my-3 mx-3'>
        
        <h1 className='heading text-center'>NewsMonkey - Top Headlines</h1 >

        {/* {this.state.loading && <Spinner/>} */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==38}
          loader={<Spinner/>}
        >

        <div className="row my-4">
          {this.state.articles.map((element)=>{
              return <div className="col-md-4 my-4 " key={element.url}>
                  <NewsItem key={element.url} title={element.title?element.title:" "} description={element.description?element.description:" "} imgurl={element.urlToImage?element.urlToImage:"https://media4.s-nbcnews.com/i/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.png"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
              </div>
          })}
        </div>

        </InfiniteScroll>

        {/* {!this.state.loading && <div className="container d-flex justify-content-between my-6">
          <button type="button" disabled={this.state.page<=1} className="btn btn-danger" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalArt/18.0)} className="btn btn-danger" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>} */}
        
      </div>
    )
  }
}
