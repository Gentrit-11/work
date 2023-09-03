import React, {useState} from 'react';
import { BiCog, BiEnvelope } from 'react-icons/bi';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { FooterData } from './data'
// import ThemeSwitcher from './ThemeSwitcher';
// import SelectLanguage from '../SelectLanguage/SelectLanguage';
import './Footer.scss'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
// import ColorSwitch from './ColorSwitch';

const Footer = (props) => {

    const [email, setEmail] = useState('');
    const [mode, setMode] = useState(() => localStorage.getItem("mode"));

    return(
        <div className='shared-footer'>

            <div className="first-row">
                <div className='all-footer-links'>
                    {FooterData.map((props) => {
                        return(
                            <div className="footer-list">
                                <h6>{props.category}</h6>
                                <div className="links">
                                    {props.links.map((l) => {
                                        return (
                                            <Link key={l.to} to={l.to} className="footer-item">
                                                {l.link}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* <div className="right-col">
                    <Link to='/'><div className="logo"></div></Link>
                    <p className='p1'>
                        <FormattedMessage id='footer-p1' 
                        defaultMessage='Your partner to advance your career path, faster!' />
                    </p>
                    <div className="buttons">
                        <button>
                            <div className="logo-icon icon2"></div>
                            <div className="block">
                                <small>Download on the</small>
                                <p>App Store</p>
                            </div>
                        </button>
                        <button className='button1'>
                            <div className="icon icon1"></div>
                            <div className="block">
                                <small>GET IT ON</small>
                                <p>Google Play</p>
                            </div>
                        </button>
                    </div> 
                   
                </div>
            </div> */}
            </div>
            <div className="second-row">
                <div className="left">
                    <a href='#'><FaFacebookF /></a>
                    <a href='#'><FaInstagram /></a>
                    <a href='#'><FaLinkedinIn /></a>
                    <a href='#'><FaTwitter /></a>
                    <a href='#'><FaYoutube /></a>
                </div>

             
             
            </div>

            
            {/* </div> */}

        </div>
    )
};

export default Footer;
