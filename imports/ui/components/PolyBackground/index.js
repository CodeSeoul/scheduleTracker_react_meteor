import React from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Background = styled.img`
  width: 100%;
  filter: blur(${props => props['data-blur']? '20' : '1'}px);
  overflow: hidden;
  transform: scale(1.1);
  pointer-events: none;
  user-select: none;
  transition: all 0.8s;
`;

class PolyBackground extends React.Component{
  state={
    blur: true
  }
  
  render(){
    // The background image must be in /public folder. see https://guide.meteor.com/structure.html.
    const ret = <ContainerDiv><Background data-blur={this.state.blur} src={'/background.png'}/></ContainerDiv>;
    return ret;
  }

  componentDidMount(){
      setTimeout(()=>{ this.setState({blur: false}); }, 1000);
  }
}

export default PolyBackground;