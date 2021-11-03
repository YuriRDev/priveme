import React, { useState } from 'react';
import COLOR from '../../colors';

import Navbar from '../../Components/Navbar';
import Options from '../../Components/Options';

import { Container, InsideContainer, BodyContainer } from './styles';

const Atividade: React.FC = () => {

  return (
    <Container>
      <Navbar/>

      <InsideContainer>
        <Options 
          selected={1}
        />
        <BodyContainer>


        </BodyContainer>
      </InsideContainer>

    </Container>
  );
}

export default Atividade;