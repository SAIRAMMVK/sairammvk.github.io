import React, {Component} from 'react';
import Header from '../header/header';
import Tile from './tile';


class FirstPage extends Component{

    constructor(){

        super();
        this.skillSet = [
            {
                skill : "HTML",
                image : "images/html.png",
                information : "I will write semantic markup in HTML 5 which is the latest standard of core technology of web."                
            },
            {
                skill : "CSS",
                image : "images/css.png",
                information : "I will write semantic markup in HTML 5 which is the latest standard of core technology of web."                
            },
            {
                skill : "RESPONSIVE WEB DESIGN",
                image : "images/responsive.jpg",
                information : "I will write semantic markup in HTML 5 which is the latest standard of core technology of web."                
            },
            {
                skill : "UI&UX DESIGN",
                image : "images/ui&ux.jpg",
                information : "I will write semantic markup in HTML 5 which is the latest standard of core technology of web."                
            },
            {
                skill : "JAVASCRIPT",
                image : "images/js.png",
                information : "I will write semantic markup in HTML 5 which is the latest standard of core technology of web."                
            },
            {
                skill : "JQUERY",
                image : "images/jquery.jpg",
                information : "I will write semantic markup in HTML 5 which is the latest standard of core technology of web."                
            },
            {
                skill : "TYPESCRIPT",
                image : "images/typescript.jpg",
                information : "I will write semantic markup in HTML 5 which is the latest standard of core technology of web."                
            },
            {
                skill : "RxJS",
                image : "images/rxjs.jpg",
                information : "I will write semantic markup in HTML 5 which is the latest standard of core technology of web."                
            },
            {
                skill : "UNIX",
                image : "images/unix.jpg",
                information : "I will write semantic markup in HTML 5 which is the latest standard of core technology of web."                
            },
            {
                skill : "GIT&HEROKU",
                image : "images/git.png",
                information : "I will write semantic markup in HTML 5 which is the latest standard of core technology of web."                
            },
            {
                skill : "NPM",
                image : "images/npm.png",
                information : "I will write semantic markup in HTML 5 which is the latest standard of core technology of web."                
            },
            {
                skill : "DOCKER",
                image : "images/docker.jpg",
                information : "I will write semantic markup in HTML 5 which is the latest standard of core technology of web."                
            },
            {
                skill : "MONGO DB",
                image : "images/mongodb.png",
                information : "I will write semantic markup in HTML 5 which is the latest standard of core technology of web."                
            },
            {
                skill : "EXPRESS",
                image : "images/expressjs.png",
                information : "I will write semantic markup in HTML 5 which is the latest standard of core technology of web."                
            },
            {
                skill : "ANGULAR 2",
                image : "images/angular.png",
                information : "I will write semantic markup in HTML 5 which is the latest standard of core technology of web."                
            }
        ]
           
    }
    render(){
        return(
            <div>
                <Header name="We are learning"/>
                <div className="container">
                {
                    this.skillSet.map(skills => {
                        return (
                        <Tile skillName = {skills.skill} skillDef = {skills.information} 
                        skillImage = {skills.image}/>
                        )
                    })                 
                }
                </div>
            </div>
        );
    }
}

export default FirstPage;