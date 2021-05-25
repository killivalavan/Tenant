import React, {Fragment} from 'react';
import razorpay from '../../img/razorpay.png';
import lockicon from '../../img/lockicon.png';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';

const Payrent = () => {
    return (
        <Fragment>
            <Main>
                <Navtwo>
                    <h1>Pay Your Rent</h1>
                </Navtwo>
                    <div className="main">
                        <div className="wrapper">
                            <div className="card-left">
                                <h2>Select Payments  Methods</h2>
                                <div className="line"></div>
                                    <input className="paymentOne" type="radio" name="payment" />
                                    <label htmlFor="razorpy"><img src={razorpay} alt="razorpayicon"/>Payment Gatway</label>
                                    <button>Pay Now</button>
                            </div>
                            <div className="card-right">
                                <div className="inner-card">
                                    <p className="pay" >You have to pay</p>
                                    <h2>
                                        <FontAwesomeIcon id="rupee" icon={faRupeeSign} size="2x"/>
                                            16200.00
                                    </h2>
                                    <div className="dotted-line"></div>
                                    <div className="no-date">
                                        <div className="invoiceNo">
                                            <p className="title" >Invoice No</p>
                                            <p>55328</p>
                                        </div>
                                        <div className="invoiceDate">
                                            <p className="title" >Invoice Date</p>
                                            <p>10-05-2021</p>
                                        </div>
                                    </div>
                                    <div className="current">
                                        <p className="title" >Current Rent</p>
                                        <p>
                                            <FontAwesomeIcon id="rupee-current" icon={faRupeeSign} />
                                                15,000
                                        </p>
                                    </div>
                                    <div className="electricty">
                                        <p className="title" >Electricty</p>
                                        <p>
                                            <FontAwesomeIcon id="rupee-current" icon={faRupeeSign} />
                                                1,200
                                        </p>
                                    </div>
                                    <div className="due">
                                        <p className="title" >Due Amount</p>
                                        <p>
                                            <FontAwesomeIcon id="rupee-current" icon={faRupeeSign} />
                                                0,000
                                        </p>
                                    </div> 
                                </div>
                                <button className="paynow">PAY NOW 16,200</button>
                            </div>
                        </div>
                    <Icon>
                        <img src={lockicon} alt="lockicon"/>
                    </Icon>
                    </div>
            </Main>
        </Fragment>
    );
};


const Main = styled.div `
    min-height: 90vh;
    background: #E8E8E8;
    
    
    .paynow{
        width: 250px;
        margin: auto;
        margin-top: 5rem;
        padding: .6rem 1rem;
        background: #00cba9;
        color: white;
        border: none;
        border-radius: 20px;
        transition: box-shadow .5s ease;
        &:hover{
            cursor: pointer;
            box-shadow: 5px 5px 20px 1px #BDC3C7;
            background: white;
            color: #00cba9;
            border: 2px solid #00cba9;
            }       
        }

    .wrapper{
        background: white;
        min-height: 70vh;
        width: 80%;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-top: 4rem;
        padding-top: 5rem;
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1),0px 20px 20px rgba(0, 0, 0, 0.1), 0px -4px 20px rgba(0, 0, 0, 0.1);

        .card-left{
            h2{
                font-size: 2rem;
            }

            
            .line{

                width: 20%;
                margin-left: 0rem;
            }

            .paymentOne{
                margin-top: 3rem;
            }

            label{
                font-size: 1.4rem;
                padding-left: 2rem;
            }

            button{
                display: block;
                margin-top: 1rem;
                margin-left: 3rem;
                font-size: 1rem;
                padding: .7rem 1.5rem;
                background: #00cba9;
                color: white;
                border: none;
                text-transform: uppercase;
                box-shadow: 5px 5px 20px 1px #BDC3C7;
            }

            img{
                position: relative;
                top: .3rem;
                width: 7rem;
                margin-right: .5rem;
            }
        }

        .card-right{
            background: linear-gradient(180deg, #04CBA1 0%, rgba(4, 203, 161, 0.61) 100%);
            color: white;
            height: 40vh;
            width: 250px;
            border-radius: 20px;

            .inner-card{
                display: flex;
                flex-direction: column;
                width: 70%;
                margin: auto;

                .title{
                    margin-top: 2rem;
                    font-weight: normal;
                }

                p{
                    font-weight: 500;
                }

                .pay{
                    margin: 2rem 0rem 1rem 0rem;
                    #rupee{
                      
                    }
                }

                .no-date{
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }
    @media screen and (max-width: 680px){

        .main{
            .wrapper{
                min-height: 70vh;
                
            } 

            .card-left{
                height: 10vh;

            .line{
                width: 20%;
                margin: auto;
            }           
            
            }
            .card-right{
                margin-top: 0;
                width: 70%;
                height: 30vh;
                
                .title{
                    font-size: 1.3rem;
                }
            }
            .paynow{
                width: 100%;
                margin-top: 7rem;
            }
        }   
    }     
`;


const Navtwo = styled.div `
    display: flex;
    justify-content: center;
    background: #00cba9;
`;


const Icon = styled.div `
display: none;
    img{
            position: absolute;
            top: 56vh;
            left: 50vh;
            width: 300px;
        }
`;



export default Payrent
