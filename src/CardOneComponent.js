import React, {Component} from 'react';
import './App.css';
import {Link as Link2} from "react-router-dom";

class CardOneComponent extends Component {

  static renderCardBody(post) {
    return (
      <div className="col-lg-7 col-xl-7 pb-3">
        {post && post.categories && post.categories.constructor === Array && post.categories.map((cat) =>
          <a key={cat.code}>
            <span className={"badge " + cat.color + " mb-3 mr-1 font-weight-normal"}>#{cat.code}</span>
          </a>
        )}

        <h3 className="mb-4 font-bold dark-grey-text">
          <strong>{post.title}</strong>
        </h3>
        <div dangerouslySetInnerHTML={{__html: post.descriptionHTML}}/>

        <p className="font-italic">{post.timeRange}</p>

        {post.linkExternal ?
          <a className="btn btn-indigo btn-md mb-3 ml-0"
             href={post.linkUrl} rel="noopener noreferrer"
             target="_blank">{post.btnText}</a> :
          <Link2 className="btn btn-indigo btn-md mb-3 ml-0"
                 to={post.linkUrl}>{post.btnText}</Link2>}
      </div>)
  }

  static renderCardImage(post) {
    return (
      <div className="col-lg-5 col-xl-5 mb-5">
        <div className="view overlay hm-white-slight rounded z-depth-2">
          <div style={{maxHeight: "40vh", backgroundColor: "#fafafa"}}>
            {post.mediaType === 'video' &&
            <video className="video-fluid" autoPlay muted loop width="100%" height="100%"
                   poster={process.env.PUBLIC_URL + '/img/' + post.mediaVideoPoster}>
              <source src={process.env.PUBLIC_URL + '/img/' + post.mediaUrl} type="video/mp4"/>
            </video>}
            {post.mediaType === 'image' &&
            <img src={process.env.PUBLIC_URL + '/img/' + post.mediaUrl}
                 alt={post.title}
                 className="img-fluid"/>}

            {post.linkExternal ?
              <a href={post.linkUrl} rel="noopener noreferrer" target="_blank">
                <div className="mask"/>
              </a> :
              <Link2 to={post.linkUrl}>
                <div className="mask"/>
              </Link2>}
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {post, index, isLast} = this.props;

    return (
      <div>
        <div className="row">
          {index % 2 !== 0 && CardOneComponent.renderCardImage(post)}
          {CardOneComponent.renderCardBody(post)}
          {index % 2 === 0 && CardOneComponent.renderCardImage(post)}
        </div>
        {!isLast &&
        <hr className="mb-5 mt-5 pb-3"/>
        }
      </div>
    )
  }

}

export default CardOneComponent