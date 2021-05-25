import React, { Fragment } from 'react';
import Image1 from '../img/landingimg.jpg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import credit from '../img/lcredit.png';
import upi from '../img/lupi.png';
import paypal from '../img/lpaypal.png';

const LandingPage = () => {
    return (
        <Fragment>
             <Main>
                 <div className="main">
                    <div className="title">
                        <h1>Pay Rent <br /> using <span></span></h1>
                        <p>Secure, Efficient, Affordable</p>
                        
                        <Link id="login" name="login" to="/LoginPage">
                        <button className="login">
                                Log in  
                            </button>
                        </Link>
                        
                        <Link id="signup" name="signup"  to="/SignupPage">
                        <button className="signup">
                                Sign up  
                            </button>
                        </Link>
                    </div>
                    
                    <div className="image">
                        <img src={Image1} alt="landingimage"/>
                    </div>
                </div>
                <div className="wave">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="#00cba9" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </div>
            </Main> 

            <Icons>
                <div className="icons">
                    <img src={credit} alt="credit"/>
                    <img className="upi" src={upi} alt="upi"/>
                    <img src={paypal} alt="paypal"/>
                </div>
            </Icons>

            
    </Fragment>
    )
};

// Styled Components
const Main = styled.div `
    position: relative;

    .main{
        min-height: 90vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 80%;
        margin: auto;

        .title{
            flex: 1 1 40rem;
        
            h1{
                font-size: 6rem;
                font-weight: normal;
                line-height: 6.5rem;
                display: inline-block;
                span{
                    color: #00CBA9;
                    /* Text Annimation */
                    &::before {
                        content: "";
                        animation: animate infinite 9s ;
                        /* transition-delay: 7s */
                        }
                    @keyframes animate {
                        
                        0% {
                            content: "Credit";
                        }

                        25% {
                            content: "Paytm";
                        }

                        50% {
                            content: "UPI";
                        }

                        75% {
                            content: "Paypal";
                        }

                        100% {
                            content: "Credit";
                        }
                    }

                }
            }

            p{
                font-size: 1.6rem;
                padding: 2rem 0rem 2rem 0rem;
            }

            button{
                background: white;
                border: 2px solid #00cba9;
                padding: .5rem 3rem;
                color: #00cba9;
                border-radius: 5px;
                font-size: 2rem;
                box-shadow: 5px 5px 20px 1px #BDC3C7;
                transition: all .6s ease;
                &:hover{
                    cursor: pointer;
                    background: #00bca9;
                    color: white;
                }
            }

            .signup{
                background: #00cba9;
                color: white;
                margin-left: 2rem;
                padding: .5rem 2.5rem;
            }
        }

        .image{
            flex: 1 1 40rem;
            overflow: hidden;
            img{
                width: 60%;
                height: 100%;
                margin-left: 10rem;
                /* margin-top: 10rem; */
            }
        }
    }

    .wave{
        svg{
            position: absolute;
            bottom: 0rem;
            pointer-events: none
    }
    }

    @media screen and (max-width: 780px){
        .main{
            display: block;
            text-align: center;
            padding-top: 10rem ;
            min-height: 50vh;
            .title h1{
               font-size: 36px ;
               line-height: 5rem;
            }
                
            .image{
                img{
                    display: none;
                }
            }
        }
    }
    @media screen and (max-width: 240px){
        .signup{
            margin: 2rem;
            }
            h1 span{
               display: block;
            }
        }
`;

const Icons = styled.div `
    display: none;
    /* .img{
        display: absolute;
        right: 0;
        top: 0;
    }
     */
`;

export default LandingPage
