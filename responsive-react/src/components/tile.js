import React, {Component} from 'react';
import '../components/tile.css';

export default class  Tile extends Component{
  render(){
    return (
         <div className="col-lg-3 col-md-4 col-sm-4 ">
            <div className=" img-responsive skill-image">
              <img src={this.props.skillImage} alt="logo_skill"/>
            </div>
            <div className="skill-name">
               {this.props.skillName}
            </div>
            <div className="skill-desc">
               {this.props.skillDef}
            </div>
         </div>
    )
  }
}