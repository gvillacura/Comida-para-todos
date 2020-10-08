import React from "react";
import InstagramEmbed from "react-instagram-embed";
import "./news.css";

const News = () => {
  return (
    <div className="newsContainer">
      <div className="int-cont">
        <InstagramEmbed
          url="https://www.instagram.com/p/CF0a27LFkjc/"
          maxWidth={320}
          hideCaption={true}
          containerTagName="div"
          protocol=""
          injectScript={false}
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/CF0a27LFkjc/"
          maxWidth={320}
          hideCaption={true}
        />
      </div>
      <h2 className="newsContainerTitle"> Noticias </h2>
      <div className="newsContent">
        <div className="new">
          <img src="" alt="newImg" />
          <h4 className="newsTitle">"Lorem ipsum "</h4>
          <p>
            {" "}
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          </p>
        </div>
        <div className="new">
          <img src="" alt="newImg" />
          <h4 className="newsTitle">"Lorem ipsum "</h4>
          <p>
            {" "}
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          </p>
        </div>
        <div className="new">
          <img src="" alt="newImg" />
          <h4 className="newsTitle">"Lorem ipsum "</h4>
          <p>
            {" "}
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
