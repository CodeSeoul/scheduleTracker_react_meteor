import React from 'react';
import styled from 'styled-components';
import "../../../../client/main.css";


const WeekButtonContainer = styled.button`
background-color:#81baea;
border: none;
padding: 10px;
border-radius: 50%;
width: 100px;
height:100px;
box-shadow: 0 -2px 5px 3px #659ac6 inset, 0 5px 5px rgba(3, 25, 41, 0.17), 0 15px rgba(255, 255, 255, 0.25) inset;
font-size: 20px;
text-align: center;
text-decoration: none;
display: inline-block;
color: #fafdff;
text-shadow: 2px 2px #818181;
cursor:pointer;
    &:hover{
        background-color:#8dc0ec;
    }
`
const GeneralButtonContainer = styled.button`
border:none;
font-size: 20px;
width:auto;
height:auto;
background: none;
cursor:pointer;
    &:hover{
        background-color:#eff6fc;
    }
`

class Dashboard extends React.Component{

    state = {
        showLogin:false,
        showDashboard:false,
        showWeek:false
    };

    showWeek = ()=>{
        this.setState({showWeek:true});
    };

    showDashboard = ()=>{
        this.setState({showDashboard:true});
    };

    showLogin = ()=>{
        this.setState({showLogin:true});
    };

    hideModal =() =>{
        this.setState({
            showLogin:false,
            showDashboard:false,
            showWeek:false
        });
    };
    render(){
        return(
            <div>
                <ModalContainer show={this.state.showLogin} handleClose = {this.hideModal}>
                    Log in modal 
                </ModalContainer>
                <ModalContainer show={this.state.showDashboard} handleClose = {this.hideModal}>
                    dashboard modal
                </ModalContainer>
                <ModalContainer show={this.state.showWeek} handleClose = {this.hideModal}>
                    week modal
                </ModalContainer>
    
                <WeekButtonContainer onClick={this.showWeek}>
                    Week 1
                </WeekButtonContainer >
    
                <GeneralButtonContainer onClick={this.showDashboard}>
                    Dashboard
                </GeneralButtonContainer>
                <GeneralButtonContainer onClick={this.showLogin}>
                    Log in
                </GeneralButtonContainer>
            </div> 
        );
    }
};

const ModalContainer = ({handleClose, show, children}) =>{
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return(
        <div className = {showHideClassName}>
            <section className ="modal-main">
                {children}
                <button onClick = {handleClose}>Close</button>
            </section>
        </div>
    );
};

export default Dashboard;