import React, { Fragment } from 'react';
import signupimg from '../../img/signupimage.png';
import googleicon from '../../img/googleicon.png';
import icon1 from '../../img/Mask Group.svg';
import icon2 from '../../img/Mask Group1.svg';
import  styled from'styled-components';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';

const SignupPage = () => {
    return (
        <Fragment>
            <Main>
                <div className="main">
                    <div className="title">
                        <h3>Technology is best when it brings people together, Create your account soon.</h3>
                        <img src={signupimg} alt="signupimage"/>
                    </div>
                    <div className="card">
                        <h3>Sign up</h3>
                        <form action="">
                            <input type="text" name="name" placeholder="Name"/>
                            <input type="email" placeholder="Email adddress"/>
                            <input type="number" name="number" placeholder="Mobile number"/>
                            <input type="password" name="password" placeholder="Password"/>
                            <input type="password" name="confirmpassword" placeholder="Confirm Password"/>
                            <button className="signup" name=" signup">SIGN UP</button>
                            <h4>OR</h4>
                            <button type="submit" className="googleBtn">
                                <img className="img" src={googleicon} alt="googleicon"/>
                                    Continue with Google
                            </button>                    
                        </form>
                        <div className="light">
                            <p>Already have an account? <Link className="login" to="/LoginPage">Log in</Link></p>
                        </div>
                    </div>
                </div>
            </Main>
            <Icon>
                <img src={icon1} alt="icon1" className="icon1"/>
                <img src={icon2} alt="icon2" className="icon2"/>
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
                padding-bottom: 1rem;
                width: 90%;
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
            min-height: 66vh;
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

            .login{
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

            .signup{
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
                margin-bottom: 2rem;               
                display: flex;
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
            min-height: 70vh;
        }
        .title{
            img, h3{
            display: none;
            }
        }
        .main{
            .card{
                min-height: 59vh;
                width: 80%;
                margin: auto;
            }
        }
    }

`;

const Icon = styled.div `
    display: none;
   .icon2{
    position: absolute;
    right: 3.5rem;
    top: 5rem;
    width: 100px;
    @media (max-width:  576px){
        right: 0rem;
        width: 80px
      }
   }
   .icon1{
    position: absolute;
    right: 32rem;
    top: 33rem;
    width: 100px;
    @media (max-width:  576px){
        left: 0rem;
        top: 45rem;
        width: 80px
      }
   }
  
`;

export default SignupPage
