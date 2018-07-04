import React from 'react';
import styled from 'styled-components';

const Dashboard = (props)=>{

    const ButtonContainer = styled.button`
        background-color:#81baea;
        border: none;
        padding: 10px;
        border-radius: 50%;
        width: 100px;
        height:100px;
        box-shadow: 0 -2px 5px 3px #659ac6 inset, 0 5px 5px rgba(3, 25, 41, 0.17), 0 15px rgba(255, 255, 255, 0.25) inset;
        font-size: 20px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        color: #fafdff;
        text-shadow: 2px 2px #818181;
        cursor:pointer;
    `

    return(

        <ButtonContainer>
            Week 1
        </ButtonContainer>

    )
}

export default Dashboard;