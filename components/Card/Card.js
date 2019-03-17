import React from 'react'
import PropTypes from 'prop-types'
import VisibilitySensor from 'react-visibility-sensor'
import Img from 'react-image'

const Card = ({img,title,text,body,comments,ups,altImg}) =>{
  let cardRef = "hjgghgjhghgjhg"

  return (    
    <div className="card" ref={(elem)=> cardRef = elem}>
      <div className="card-image">
  <VisibilitySensor>
      <Img src={[img,altImg]} className="img-responsive" 
          loader={<div className="loading loading-lg"></div>}
           decode={false}
           container={children => {
            return (
              <div className="image-wrapper">
                {children}
              </div>
            )
          }}
        sizes="(max-width: 400px) 50vw, (min-width: 401px) 100vw"
        srcSet={`${altImg} 400w, ${img} 400w`}
        alt="great picture"/>
  </VisibilitySensor>
      </div>
    <div className="card-header">
      <div className="extra-content">
      <span className="label label-rounded label-primary"><i className="icon icon-message"></i> {comments}</span> {' '}
      <span className="label label-rounded label-primary"><i className="icon icon-upward"></i> {ups}</span>
      </div>
      <div className="card-title h5">{title}</div>
      <div className="card-subtitle text-gray">{text}</div>
    </div>
    <div className="card-body">
    {body}
    </div>
    
    </div>  
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  body:PropTypes.string,
  comments:PropTypes.number,
  ups:PropTypes.number,
  text:PropTypes.string,
};

export default Card;