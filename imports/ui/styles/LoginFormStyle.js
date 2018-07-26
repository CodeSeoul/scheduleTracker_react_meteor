import styled from 'styled-components';

const LoginInputContainer = styled.div`
display: flex;
justify-content: center;
margin: 12px;
`

const LoginInput = styled.input`
&:focus{
  border: 1px solid #fca311;
  color: #fca311;
}
width: 70%;
height: 60px;
background-color: transparent;
border: 1px solid dimgray;
border-radius: 5px;
font-size: 20px;
padding-left: 5px;
padding-right: 5px;
transition: border .2s, color .2s;
`

const LoginSubmitButton = styled.button`
width:70%;
transition: background-color, .2s;
background-color: rgba(41, 53, 78, 0.95);
&:hover{
  background-color: #fca311;
}
height: 64px;
border: none;
border-radius: 5px;
box-sizing: content-box;
padding-left: 5px;
padding-right: 5px;
color:white;
font-size: 20px;
`

const LoginFormContainer = styled.form`
margin:auto;
flex:1;
`

const LoginFormRoot = styled.div`
width: 30%;
margin: auto;
margin-top: 30px;
height: 40%;
background: white;
box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
display: flex;
`

export { LoginFormRoot, LoginFormContainer, LoginInputContainer, LoginInput, LoginSubmitButton };