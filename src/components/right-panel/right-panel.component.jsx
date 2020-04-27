import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {updateNewsData} from '../../redux/news/news.actions';
import ReactLoading from 'react-loading';
import NewsItem from '../news-item/news-item.component';

import './right-panel.styles.scss';

class RightPanel extends React.Component{

    constructor(){
        super();
        this.state= {
            isLoading:true
        }
    }

    componentDidMount(){
        this.fetchNewsData();
    }

    fetchNewsData = async ()=>{
        const {updateNewsData} = this.props;
        axios.get(`https://api.smartable.ai/coronavirus/news/global`,{ headers: { 'Subscription-Key': '3009d4ccc29e4808af1ccc25c69b4d5d' } })
        .then(response => {
            const newsData = response.data.news;
            updateNewsData(newsData);
            this.setState({
                isLoading:false
            });
        }).catch((error)=>console.log(error.message));
    }

    render(){
        const {news} = this.props;

        return(<div className='right-panel column'>
            <span className='trending-wrapper mt3'><i className='fa fa-bullhorn mr2 fa-2x v-mid' aria-hidden='true'></i><span className='trending-title f3'>Trending news</span></span>
            <div className='news-container'>

                {
                    this.state.isLoading? <ReactLoading type='cubes' color='#7ebdb4' className='loader' />:
                    (news.map((singleNews,index) => {
                        const newsImage = singleNews.images?singleNews.images[0].url:'';
                        return (
                            <NewsItem key={index} title={singleNews.title} image={newsImage}  link={singleNews.webUrl} />
                        )
                    }))
                }
            </div>
        </div>)
    }
}

const mapStateToProps = ({newsData:{news}})=>({
    news
});


const mapDispatchToProps = dispatch => ({
    updateNewsData: (news)=> dispatch(updateNewsData(news))
});

export default connect(mapStateToProps,mapDispatchToProps)(RightPanel);