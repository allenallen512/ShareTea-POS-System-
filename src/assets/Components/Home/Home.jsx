import { useState, useEffect } from 'react'
import './Home.css'
// import { NavBar } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { Header } from '../Header/Header';
import { Navbar as Navbar } from '../Navbar';
import {Outlet, Link} from 'react-router-dom';


export const Home = () => {
    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false
          },
          "google_translate_element"
        );
      };
    useEffect(() => {
    if((!window.google || !window.google.translate)) {
        var addScript = document.createElement("script");
        addScript.setAttribute(
            "src",
            "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        );
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
            // Cleanup function to remove the added script when component unmounts
        return () => {
        document.body.removeChild(addScript);
        };
    }
    else {
        googleTranslateElementInit();
      }
    }, []);

    return (
        <div>
            <div className='home_header'>
                <Navbar />
            </div>
            <div className='body'>
                <div className='container'>
                    <div className='big_logo'>      
                    
                        <h1>WELCOME TO SHARE TEA</h1>
                    </div>
                    <div className='button-container'>
                        <button className='home_buttons'>Menu</button>
                        <Link to='/Customer'><button className='home_buttons' >Start Ordering</button></Link>
                        <br/>
                        <div id="google_translate_element"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};


