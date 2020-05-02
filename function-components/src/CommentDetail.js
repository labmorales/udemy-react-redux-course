import React from "react";

const CommentDetail = ({ author, timeAgo, img, text }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt={author + " photo"} src={img} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {author}
        </a>
        <div className="metadata">
          <div className="date">{timeAgo}</div>
          <div className="rating">
            <i className="star icon"></i>5 Faves
          </div>
        </div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
