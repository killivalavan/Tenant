import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import logo from '../img/home.svg';


const Nav = () => {

    return (
            <Main>
                <div className="nav">
                    <div className="logo">
                        <Link to="/" > 
                            <h3>
                                <img src={logo} alt="logo"/> 
                                    TENANT
                            </h3>
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/payrent">
                                Pay Rent
                            </Link>
                        </li>
                        <li>
                            <Link to="/compliantpage">
                                Support
                            </Link>
                        </li>
                    </ul>
                </div>    
            </Main>
    );
};


// styled components
const Main = styled.nav`
    min-height: 10vh;
    color: black;
    -webkit-box-shadow: 0 8px 6px -6px rgba(4,203,161, 0.5);
    -moz-box-shadow: 0 8px 6px -6px rgba(4,203,161, 0.5);
    box-shadow: 0 8px 6px 0px rgba(4,203,161, 0.3);

    .nav{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        width: 90%;
        margin: auto;
        font-size: 2rem;
        padding-top: 1.5rem;

        .logo{
            flex: 1 1 30rem;
                img{
                    /* width: 9%; */
                    max-height: 2.5rem;
                    margin-right: .5rem;
                }
        
          }
    
        ul{
            flex: 1 1 30rem;
            display: flex;
            justify-content: space-around;
            list-style: none;
        }
    }


    @media screen and (max-width: 728px){
       
        .logo{
            text-align: center;
            padding: .5rem;
        }
    }
  
`;



export default Nav
