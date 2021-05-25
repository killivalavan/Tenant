import React from 'react';
import gicon from '../img/gicon.png';
import fbicon from '../img/fbicon.png';
import twittericon from '../img/twittericon.png';
import instaicon from '../img/instaicon.png';
import youtubeicon from '../img/youtubeicon.png';
import logo from '../img/footerlogo.png';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
    return (
        <Main>
            <div className="main">
                <div className="social">
                    <img src={gicon} alt="socialicon"/>
                    <img src={fbicon} alt="socialicon"/>
                    <img src={twittericon } alt="socialicon"/>
                    <img src={instaicon} alt="socialicon"/>
                    <img src={youtubeicon} alt="socialicon"/>
                </div>
                <Copyright>
                    <div className="copy">
                        <img className="logo" src={logo} alt="logo"/>
                        <p>
                             Copyright
                            <span><FontAwesomeIcon className="icon" icon={faCopyright} ></FontAwesomeIcon></span>
                            2020
                        </p>
                    </div>
                </Copyright>
            </div>
        </Main>
    )
};

//Styled components
const Main = styled.div `
    .main{
        min-height: 20vh;
        background: rgba(66, 151, 250, 0.32);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .social{
            img{
                width: 35px;
                margin-left: .5rem;
                transition: all .6s ease;
                &:hover{
                    transform: scale(1.1);
                    cursor: pointer;
                }
            }
        } 
        .copy {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .logo{
                width: 60%;
            }
            span{
                margin: 0rem .3rem;
            }
    }
}
    @media screen and (max-width: 680px){
        .main{
            min-height: 10vh;
            .social img{
                width: 20px;
            }
            .copy .logo{
                width: 40%;
            }
        }
    }
`;

const Copyright = styled.div `
    
`;


export default Footer
