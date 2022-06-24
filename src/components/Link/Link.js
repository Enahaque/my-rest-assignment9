import React from 'react';

const Link = (props) => {
    const{name,link}=props.route;
    return (
        
            <ul className='mr-8'>
                <a href={link}>{name}</a>
               
            </ul>
        
    );
};

export default Link;