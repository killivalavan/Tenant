import React, {Fragment} from 'react';
import loginimg from '../../img/loginimage.png';
import googleicon from '../../img/googleicon.png';
import print1 from '../../img/fingerprint.png';
import print2 from '../../img/fingerprint2.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <Fragment>
            <Main>
                <div className="main">
                    <div className="title">
                        <h3>Don’t Let Yesterday Take Up Too Much Of Today.</h3>
                        <img src={loginimg} alt="loginimage"/>
                    </div>
                    <div className="card">
                        <h3>Log in</h3>
                        <form action="">
                            <input type="email" name="email" placeholder="Email / Mobile No."/>
                            <input type="password" name="password" placeholder="Password"/>
                            <button className="login" name="login" >LOG IN</button>
                            <h4>OR</h4>
                            <button className="googleBtn"><img className="img" src={googleicon} alt="googleicon"/><div className="text">Continue with Google</div></button>
                        </form>
                        <div className="light">
                            <p>Forget your Password?</p>
                        </div>
                        <div className="lightline"></div>
                        <div className="light">
                            <p>Not on Tenant yet?
                            <Link className="signup" to="/SignupPage">Sign up</Link></p>
                        </div>
                    </div>
                </div>
            </Main>
            <Icon>
                <img src={print1} alt="print1" className="print1"/>
                <img src={print2} alt="print2" className="print2"/>
            </Icon>
        </Fragment>
    )
};


const Main = styled.div `
    background: #00cba9;
    color: white;
    
    .main{
        display: flex;
        justify-content: space-around;
        align-items: center;
        min-height: 90vh;
        width: 90%;
        margin: auto;
        
        .title{
            display: flex;
            flex-direction: column;
            h3{
                font-size: 2rem;
                padding-bottom: 10rem;
                width: 70%;
            }

            img{
                width: 60%;
                margin: auto;
            }
        }

        .card{
            background: white;
            color: black;
            text-align: center;
            min-height: 50vh;
            width: 350px;
            border-radius: 10px;

            h3{
                margin-top: 1.5rem;
                font-size: 2rem;
                font-weight: normal;
            }

            h4{
                font-size: 1.2rem;
                font-weight: normal;
                color: #6C7A89;
                margin: .6rem 0rem;
            }

            p{
                color: #6C7A89;
            }

            .signup{
                color: #00cba9;
                font-weight: 500;
                padding-left: .3rem;
            }

            .lightline{
                border-bottom: 2px solid #BDC3C7 ;
                opacity: .5;
                width: 30%;
                margin: .4rem auto;
            }

            input, button{
                padding: .6rem 1rem;
                width: 80%;
                border: 2px solid #BDC3C7;
                border-radius: 20px;
                outline: none;
                margin: 1rem  auto;
            }

            .login{
                background: #00cba9;
                color: white;
                border: none;
                &:hover{
                    cursor: pointer;
                }
            }

            .googleBtn{
                background: none;
                padding: .1rem 3rem .1rem 1rem; 
                margin-bottom: 2rem;               display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 1.4rem;
                color: #6C7A89;
                &:hover{
                    cursor: pointer;
                }

                img{
                    width: 2.3rem;
                    pointer-events: none;
                }
            }

            input{
                display: block;
                margin-top: 2rem;
            }
        }
    }
    
    @media screen and (max-width: 680px){
        .main{
            min-height: 60vh;
        }
        .title{
            img, h3{
            display: none;
            }
        }
        .main{
            .card{
                min-height: 40vh;
                width: 80%;
                margin: auto;
            }
        }
    }

`;


const Icon = styled.div `
    display: none;
    .print1{
        position: absolute;
        right: 1rem;
        top:4.5rem;
        width: 10rem;
        @media (max-width:  576px){
            right: 0;   
        }
    }
    .print2{
        position: absolute;
        top: 24rem;
        right: 29rem;
        width: 10rem;
        @media (max-width:  576px){
            left: 0;
            top: 38rem;   
        }
    }
`;

export default LoginPage
