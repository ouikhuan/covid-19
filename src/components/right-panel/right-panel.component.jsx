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

    fetchNewsData = ()=>{
        const {updateNewsData} = this.props;
        axios.get(`https://cryptic-ravine-96718.herokuapp.com/`)
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

        return(<div className='right-panel'>
            <span className='trending-wrapper mt3'><i className='fa fa-bullhorn mr2 fa-2x v-mid' aria-hidden='true'></i><span className='trending-title f3'>Trending news</span></span>
            <div className='news-container'>

                {
                    this.state.isLoading? <ReactLoading type='cubes' color='#7ebdb4' className='loader' />:
                    (news.map((singleNews,index) => (
                        <NewsItem key={index} title={singleNews.title} image={singleNews.img}  link={singleNews.link} />
                    )))
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