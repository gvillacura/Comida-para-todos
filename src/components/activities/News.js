import React, { Fragment } from 'react';
import './news.css'

const News = () => {
    return (
        <div className="newsContainer">
            <h2 className="newsContainerTitle"> Noticias </h2>
            <div className="newsContent">
                <div className="new">
                    <img src="" alt="newImg" />
                    <h4 className="newsTitle">"Lorem ipsum "</h4>
                    <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    </p>
                </div>
                <div className="new">
                    <img src="" alt="newImg" />
                    <h4 className="newsTitle">"Lorem ipsum "</h4>
                    <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    </p>
                </div>
                <div className="new">
                    <img src="" alt="newImg" />
                    <h4 className="newsTitle">"Lorem ipsum "</h4>
                    <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    </p>
                </div>
            </div>
        </div>
    )
}

export default News;