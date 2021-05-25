import React, { Fragment } from 'react';
import imcompliantimage from '../../img/compliantimage.png';
import icon1 from '../../img/contacticon.png';
import icon2 from '../../img/contacticon2.png';
import styled from 'styled-components';

const CompliantPage = () => {
    return (
        <Fragment>
            <Main>
                <div className="image">
                    <img src={imcompliantimage} name="compliantimage" alt="imcompliantimage"/>
                </div>
                <div className="card">
                    <h2>Submit a <span>Compliant</span></h2>
                    <p>Tell us what happened. We ill review your request as soon as possible.</p>
                    <div className="form">
                    <form action="">
                        <input type="text" name="name" placeholder="Your name" required /> 
                        <input type="text" name="email" placeholder="Email adddress"/>
                        <input type="number" name="number" placeholder="Mobile number" required />
                        <select name="CompliantType" id="CompliantType" required>
                            <option>Select your Category</option>
                            <option value="Plumbing Problems">Plumbing Problems</option>
                            <option value="Roof Leaks">Roof Leaks</option>
                            <option value="Drainage Problem">Drainage Problem</option>
                            <option value="Electrical Wiring">Electrical Wiring</option>
                            <option value="Sticking Door">Sticking Door</option>
                            <option value="Neighbourhood Issues">Neighbourhood Issues</option>
                            <option value="Harassment /Crime">Harassment/Crime</option>
                            <option value="Payment Related">Payment Related</option>
                            <option value="Rent Details">Rent Details</option>
                            <option value="Others">Others</option>
                        </select>
                        <textarea name="message" id="" cols="30" rows="5" placeholder="More Details (Optional)"></textarea>
                        <button className="submit" name="submit" >SUBMIT</button>
                    </form>
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
    min-height: 90vh;
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
   
    .image{
       
        z-index: -1;
        img{
            width: 80%;
        }
    } 
    .card{
        min-height: 60vh;
        h2{
            font-size: 3rem;

            span{
                color: #00CBA9;
            }
        }
        p{
            font-size: 1.2rem;
        }
        

        input, select, button, textarea{
            display: block;
            margin-top: 2rem;
            width: 80%;
            border: 2px solid #BDC3C7;
            border-radius: 20px;
            outline: none;
            width: 100%;
            margin: 2rem  auto;
        }
        input, select, button{
            padding: .6rem 1rem;
        }
        textarea{
            border-radius: 15px;
            resize: none;
            padding: 1rem;
            font-family: Poppins, sans-serif;
        }
        button{
            background-color: #00CBA9;
            color: white;
            border: none;
            padding: .9rem 0rem;
            &:hover{
                cursor: pointer;
            }
        }
        select{
	        appearance: none;
            &:hover{
                cursor: pointer;
            }
        }
    }
 
    @media screen and (max-width: 680px){
        display: block;
        width: 70%;
        margin: auto;
        text-align: center;

        .image {
            min-height: 30vh;
            padding: 8rem 0rem 4rem 0rem;

            img{
                min-width: 250px;
                object-fit: cover;
            }
        }
    }
`;

const Icon = styled.div `
display: none;
    .icon1{
        position: absolute;
        top: 39rem;
        width: 120px;
        margin-left: 4rem;
    }
    .icon2{
        position: absolute;
        right: 0;
        bottom: 30rem;
        width: 120px;
    }
`;

export default CompliantPage
