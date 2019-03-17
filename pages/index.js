import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Head from 'next/head'
import '../styles/style.scss'
import { getPosts } from '../actions/index'
import Layout from '../components/Layout/layout'
import Posts from '../components/Posts/Posts'
import Header from '../components/Header/Header'
import Dropdown from '../components/Dropdown/Dropdown'
import {subreddits} from '../helper/helper'


class Index extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      selectedSubReddits: 'Alternativeart'
    }
    this.subRedditsChangeHandler = this.subRedditsChangeHandler.bind(this);
  }
  static async getInitialProps ({ reduxStore, req ,...rest}) {
    const isServer = !!req
    await reduxStore.dispatch(getPosts('Alternativeart'))
    return {}
  }

  subRedditsChangeHandler(key,label){
    this.setState({selectedSubReddits: label});
    this.props.dispatch(getPosts(key))
  }

  render () {
    return (
      <>
      <Head>
        <title>Fab Hotel Assignment</title>
      </Head>
      <Layout>
        <Header search={<Dropdown selectedVal={this.state.selectedSubReddits} options={subreddits.map((option)=> { return {...option,callback: this.subRedditsChangeHandler}} )}/>}/>
         {this.props.posts && this.props.posts.length > 0 ?<Posts posts={this.props.posts}/>:<div className="loading loading-lg"></div>}
      </Layout>
      </>
    )
    return 
  }
}
function mapStateToProps (state) {
  const { main:{posts} } = state
  return { posts }
}
//const mapDispatchToProps = dispatch => bindActionCreators({ getPosts }, dispatch)

export default connect(mapStateToProps, null)(Index)
