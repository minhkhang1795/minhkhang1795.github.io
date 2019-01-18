import React, {Component} from 'react';
import './App.css';
import {Link as Link2} from "react-router-dom";

class CardTwoComponent extends Component {

  render() {
    const {post, index, isLast} = this.props;
    if (post)
      return (
        <div className="sortable">
          <div className="card card-cascade narrower mb-4 hoverable">

            {/* Card image */}
            <div className="view view-cascade overlay">
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

            {/* Card content */}
            <div className="card-body card-body-cascade">

              {post && post.categories && post.categories.constructor === Array && post.categories.map((cat) =>
                <a key={cat.code}>
                  <span className={"badge " + cat.color + " mb-3 mr-1 font-weight-normal"}>#{cat.code}</span>
                </a>
              )}
              <h4 className="font-weight-bold card-title">{post.title}</h4>
              <div dangerouslySetInnerHTML={{__html: post.descriptionHTML}}/>
              {post.linkExternal ?
                <a className="btn my-btn-indigo btn-md mb-3 ml-0"
                   href={post.linkUrl} rel="noopener noreferrer"
                   target="_blank">{post.btnText}</a> :
                <Link2 className="btn my-btn-indigo btn-md mb-3 ml-0"
                       to={post.linkUrl}>{post.btnText}</Link2>}

            </div>

          </div>
        </div>
      );
    else
      return <div className="card card-cascade narrower mb-4" style={{visibility: "hidden"}}/>
  }

}

export default CardTwoComponent