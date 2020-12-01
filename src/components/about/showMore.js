import React from 'react';
import { Icon } from '@iconify/react';

const ShowMore =  (props) => {
    return(
        <div ref={props.refs} onClick={props.show} className="show-more">
            <h4>{props.text}</h4>
            <Icon icon={props.icon} />
        </div>
    )
}

export default ShowMore;