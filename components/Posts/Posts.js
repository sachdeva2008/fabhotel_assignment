import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card/Card'
import {isValidImage,getLargeVersionedImage} from '../../helper/helper'


const Posts = ({posts}) => {
    return (
        posts.filter(({data:{url,media={}}})=> isValidImage(url) || (media && media.hasOwnProperty('oembed'))).map( ({data:{title,url,num_comments:comments=0,ups=0,id,media={}}}) =>{
            return (
            <div className="columns" key={id}>
              <div className="column col-6 col-xs-12 col-mx-auto">
                <Card 
                title={title} 
                img={url}
                comments={comments}
                ups={ups}
                altImg = {media && media.hasOwnProperty('oembed')?media.oembed.thumbnail_url:url}
                />
              </div>
            </div>
            )
        })
    )
}

Posts.propTypes = {
    posts: PropTypes.array
}

export default Posts
