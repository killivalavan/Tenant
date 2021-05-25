import React from 'react';
import paymenticon from '../img/paymenticon.jpg';
import privacyicon from '../img/privacyicon1.png';
import razorpay from '../img/razorpay.png';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const SecureSection = () => {
    return (
              <Main>
                <div className="main">
                    <div className="title">
                        <div className="one">
                            <h3>100% secure transactions</h3>
                            <p>With <img src={razorpay} alt=""/>Payment gateway.</p>
                        </div>
                        <div className="two">
                            <h3>Privacy</h3>
                            <p>No spamming. We promise.</p>
                        </div>
                        <div className="three">
                            <img src={paymenticon} alt=""/>
                            <p>We accept all payment methods.</p>
                        </div>
                    </div>    
                    <div className="image">
                        <img src={privacyicon} alt=""/>
                    </div>
                </div>
               
                <div className="background">
                    <div className="bottom">
                        <div className="card">
                            <h2><FontAwesomeIcon icon={faRupeeSign} />50+ Lac</h2>
                            <p>AMOUNT PROCESSED</p>
                        </div>
                        <div className="card">
                            <h2>1000+</h2>
                            <p>FLATS</p>
                        </div>
                        <div className="card">
                            <h2>15,000+</h2>
                            <p>TENANTS</p>
                        </div>
                    </div>
                    <Link id="paynow" to="/payrent">
                       <button>
                        PAY NOW 
                        </button>
                    </Link>
                </div>
            </Main>
    )
};


// Styled components
const Main = styled.div `
    .main{
        min-height: 65vh;
        display: flex;
        justify-content: space-around;
        width: 80%;
        margin: auto;
        padding: 3rem 0rem;

        .title{
            display: flex;
            flex-direction: column;

            h3{
                font-family: Noto Sans JP;
                font-style: normal;
                font-size: 2rem;
            }

            p{
                font-size: 1.5rem;
                margin-bottom: 4rem;

                img{
                    width: 20%;
                    position: relative;
                    top: 4px;
                }
            }
            .three img{
                width: 50%;
            }
        }
        .image img{
            width: 70%;
        }
    }

        .background{
            background: rgba(66, 151, 250, 0.32);
           

            .bottom{
                min-height: 20vh;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                width: 80%;
                margin: 0rem auto;
                
                .card{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    flex: 1 1 15rem;
                    /* margin-left: 5rem; */
                }

                h2{
                    font-size: 3rem;
                }

                p{
                    font-size: 2rem;
                }
            }

            #paynow{
                display: flex;
                justify-content: center;
                padding-bottom: 3rem;
                button{
                    background: #268AFF;
                    border: 3px solid #268AFF;
                    padding: 1.3rem 8rem;
                    color: white;
                    font-size: 1.6rem;
                    transition: all .6s ease;
                    &:hover{
                        cursor: pointer;
                        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1),0px 10px 10px rgba(0, 0, 0, 0.1);
                        }
                }
            }
           
    }
    

    @media screen and (max-width: 680px){
        .main{
            min-height: 40vh;
           
            .title{   
                min-height: 50%;
                display: block;             
                width: 80%;
                margin: auto;
                padding-top: 4rem;
                text-align: center;
               p img{
                    width:35%;
                }
            
                .three img{
                    width: 70%;
                }
            }

            .image{
                display: none;
            }
        }
        .bottom{
            h2{
                padding-top: 3rem;
            }
        }
       button{
                margin: 3rem 0rem;
            }
    }
`;


export default SecureSection
