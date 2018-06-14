import React, {Component} from 'react';
import './divisions.css';
class HyperLinks extends Component{
    render(){
        return(
            <div class="hyperlink">
            <a href="https://krishnasairam1997.blogspot.in" target="_blank" >MY BLOG</a>
            <a href="skills.html" target="_blank">SKILLS</a>
            <button onclick="newQuote()">TODAY'S QUOTE</button>
            {/* <img id="profile" src="images/sairam.jpg" alt="profile picture"/> */}
         </div>
        );
    }
}
export default HyperLinks;