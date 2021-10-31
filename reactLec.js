import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { HotModuleReplacementPlugin } from 'webpack';

ReactDOM.render((<App />), document.querySelector('#root'));


export default Headers;





// SocialMediaButtons.js
const SocialMediaButtons = (props) => (
    <i className={`fab homepage__socialMediaItem fa-${props.iconName}`} />
);

// Homepage.js
<div className="homepage_socialMedias">
    <SocialMediaButtons iconName="twitter" />
    <SocialMediaButtons iconName="facebook-f" />
    <SocialMediaButtons iconName="instagram" />
</div>


const NavBarItem = (props.) => (
    // <a className="navbar__item" href={props.href}>
    //     {props.content}
    // </a>

    <a className="navbar__item" href={props,to}>
        {pros.children}
    </a>
);
=================================
const NavBarItem = ({
    to,
    children,
}) => (
    <a className="navbar__item" href={to}>
        {children}
    </a>
);

export default NavBarItem;


<div classname="navbar">
    {/* <NavBarItem href="HOME" content="Home" /> */}

    <NavBarItem to="HOME">Home</NavBarItem>
    <NavBarItem to="RESUME">Content</NavBarItem>
    <NavBarItem to="SERVICES">Services</NavBarItem>
    <NavBarItem to="BLOG">Blog</NavBarItem>
    <NavBarItem to="CONTACT">Contact</NavBarItem>
</div>


const Skill = () => (
    <div className="Design">
        headingAspect
        headingSkills 
        Skillsets
        Bars 

    </div>
)