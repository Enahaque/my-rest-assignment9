import React from 'react';
import Link from '../Link/Link';

const Navbar = () => {
    const routes=[
        {id:1,name:'HOME',link:'/HOME'},
        {id:2,name:'REVIEWS',link:'/REVIEWS'},
        {id:3,name:'DASHBOARD',link:'/DASHBOARD'},
        {id:4,name:'BLOGS',link:'/BLOGS'},
        {id:5,name:'404',link:'/404'},
        {id:6,name:'ABOUT',link:'/ABOUT'},
      
    ];
    return (
        <nav>
          {
            routes.map(route => <Link
            
                key={route.id}
                route={route}
            
            ></Link>)
          }
        </nav>
    );
};

export default Navbar;