import React, {Fragment} from 'react';
import Map from '../img/map1.png';
import icon1 from '../img/infoicon1.png';
import icon2 from '../img/infoicon2.png';
import icon3 from '../img/infoicon3.png';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faStopwatch, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const InformationSection = () => {
    return (
        <Fragment>
            <Main>
                <div className="main">
                    <div className="information">
                        <h1>Where we are!</h1>
                        <div className="line"></div>
                        <p className="add">
                        <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
                            71, Kamarraj street, Thakalakuppam, Puducherry, India.
                        </p>
                        <p>
                        <FontAwesomeIcon className="icon" icon={faPhoneAlt} />
                            Call  0413 - 2618073
                        </p>
                        <p>
                        <FontAwesomeIcon className="icon" icon={faStopwatch} />
                            Mon - Sat  9.00 AM - 9.00PM
                        </p>
                        <p>
                        <FontAwesomeIcon className="icon" icon={faEnvelope} />
                            contact@tenant.com
                        </p>
                    </div>

                    <div className="image">
                        <img src={Map} alt=""/>
                        <button>More Info</button>
                    </div>
                </div>
                <Icons>
                    <img src={icon1} alt="icon1" className="icon1"/>
                    <img src={icon2} alt="icon2" className="icon2"/>
                    <img src={icon3} alt="icon3" className="icon3"/> 
                </Icons>
            </Main>
        </Fragment>
    )
}


// Styled components
const Main = styled.div `
    .main{
        min-height: 80vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 80%;
        margin: auto;

        .information{
            .add{
                padding-top: 3rem;;
            }
            p{
                font-size: 1.5rem;
                padding-top: 1.5rem;
                
                .icon{
                    color: #00CBA9;
                    margin-right: 1rem;
                }
            }
            h1{
                font-size: 3rem;
            }
            .line{
                float: left;
                width: 15%;
                margin: auto;
            }
        }
        .image {
        
        img{
            width: 60%;
            margin-left: 15rem;
            transition: all .6s ease;
            &:hover{
                transform: scale(1.1);
             }
        }
        button{
            float:right;
            cursor: pointer;
            background: #00cba9;
            border: 3px solid #00cba9;
            padding: .5rem 2rem;
            margin-top: 2rem;
            color: white;
            font-size: 1.6rem;
            box-shadow: 5px 5px 20px 1px #BDC3C7;
            }
        }    
    }

    @media screen and (max-width: 680px){
        .main{
            min-height: 40vh;
            
            .information .line{
                width: 15%;
            }
        }
        .image{
            display:none;
        }
    }
         
`;


const Icons = styled.div `
    display: none;
    .icon1{
        position: absolute;
        bottom: 20rem;
        right: 0;
        top: 310vh;
        width: 100px;
        padding-top: .5rem;
    }
    .icon2{
        position: absolute;
        top: 340vh;
        width: 12rem;
    }
    .icon3{
        position: absolute;
        top: 310vh;
        left: 90vh;
        width: 14rem;
    }

`;


export default InformationSection
