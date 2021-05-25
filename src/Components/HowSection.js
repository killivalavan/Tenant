import React, {Fragment} from 'react';
import Image1 from '../img/pcicon.png';
import Image2 from '../img/paymenticon1.png';
import Image3 from '../img/cardicon.jpg';
import styled from 'styled-components';
import one from '../img/one.png';
import two from '../img/two.png';
import three from '../img/three.png';
import ideaicon from '../img/ideaicon.png';
import { Link } from 'react-router-dom';


const HowSection = () => {
    return (
        <Fragment>
            <Main>
                <div className="title">
                    <h1>HOW DOES IT WORK?</h1>
                    <div className="line"></div>
                    <p>You can skip the paper checks — no mailing or dropping off your rent at the office. And you can securely pay, from anywhere, by credit card, online, signing up is easy !</p>
                </div> 

                <div className="cards">
                    <div className="card">
                        <img className="circle" src={one} alt="one"/>
                        <div className="card-body">
                            <img className="card-img" src={Image1} alt="pcicon"/>
                            <div className="card-text">
                                <p>Open <span>Tenant link</span> and click on <span>signup </span>button.</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                         <img className="circle" src={two} alt="two"/>
                        <div className="card-body">
                            <img className="card-img" src={Image2} alt="pcicon"/>
                            <div className="card-text">
                                <p>Select <span>Pay Rent </span>to set up your account.</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <img className="circle" src={three} alt="three"/>
                        <div className="card-body">
                            <img className="card-img" src={Image3} alt="pcicon"/>
                            <div className="card-text">
                                <p>Add your <span>preferred payment method </span>and you’re all set!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Link id="signup" to="/SignupPage">
                    <button className="signup">
                             SIGN UP NOW  
                    </button>
                </Link>
            </Main>
                <Ideaicon>
                    <img src={ideaicon} alt="idea"/>
                </Ideaicon>
        </Fragment>
    )
}


// Styled componenst
const Main = styled.div `
    min-height: 100vh;
    .title .line{
        width: 5%;
    }
    .title{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 4rem;

        h1{
            font-size: 2.5rem;
        }

        p{
            width: 50%;
            margin: auto;
            font-size: 1.6rem;
            padding: 3rem 0rem;
        }
    }

   .cards{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        width: 80%;
        margin: auto;
        padding-top: 2rem;

       .card{
            position: relative;
            display: flex;
            flex-direction: column;
            border: 4px solid black;
            text-align: center;
            margin-bottom: 9rem;
            margin-left: 3rem;
            height: 35vh;
            width: 30vh;
            box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1),0px 20px 20px rgba(0, 0, 0, 0.1);
            
            .card-img{
                width: 60%;
                padding: 2rem;
            }
            
            p{
                width: 60%;
                margin: auto;
                font-size: 1.4rem;
                span{
                    font-weight: bold;
                }
            }
            .circle{
                position: absolute;
                max-width: 70px;
                right: 175px;
                bottom: 210px;
            }
       }
   }

   #signup{
        display: flex;
        justify-content: center;
        
        button{
        background: #00cba9;
        border: 3px solid #00cba9;
        padding: 1.3rem 7rem;
        color: white;
        font-size: 1.6rem;
        box-shadow: 5px 5px 20px 1px #BDC3C7;
        transition: all .6s ease;
        &:hover{
            cursor: pointer;
            background: white;
            color: #00bca9;
             }
        }
    }
   
    @media screen and (max-width: 680px){
        .title{
            p{
                    width: 90%;
                    margin: auto;
                }
            .line{
                width: 10%;
            }
        }
        .cards{
            .card{
                position: relative;
                height: 25vh;
                width: 20vh;

                .circle{
                    position: absolute;
                    max-width: 60px;
                    right: 110px;
                    bottom: 140px;
                    height: auto;
                }

            }
        }
    }

`;

const Ideaicon = styled.div `
    position: absolute;
    top: 70rem;  
    img{
        width: 70%; 
        opacity: 60%;
    } 

    @media screen and (max-width: 680px){
        display: none;
    }
`;

export default HowSection
