import React, { useState } from 'react';
import COLOR from '../../colors';

import Navbar from '../../Components/Navbar';
import Options from '../../Components/Options';
import { Select, MenuItem } from '@material-ui/core';

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import { Container, FaturasList, InsideContainer, Retirar, BodyContainer, FaturaOpcoes, FaturaContainer, GraphicContainer, GraphicData, ChartContainer } from './styles';
import Fatura from '../../Components/Fatura';
import Pagamento from '../../Components/Pagamento';

const Withdrawn: React.FC = () => {

  return (
    <Container>
      <Navbar />

      <InsideContainer>
        <Options
          selected={2}
        />
        <BodyContainer>
          <GraphicContainer>
            {/** DADOS */}


            {/** valor bruto */}
            <GraphicData>
              <text
                style={{
                  fontSize: 14
                }}
              >Valor Disponível</text>
              <text
                style={{
                  fontSize: 20,
                  fontWeight: 500
                }}
              >R$ 0,00</text>
            </GraphicData>

            {/** grafico */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
            >
              <Retirar>
                Retirar
              </Retirar>
            </div>

          </GraphicContainer>


          {/** FATURAS */}

          <FaturaContainer>
            {/** HEADER */}
            <text
              style={{
                fontSize: 20,
                fontWeight: 500
              }}
            >Histórico de pagamento</text>


            {/** LISTA DE FATURA */}
            <FaturasList>
              <Pagamento />
              <Pagamento />
              <Pagamento />
              <Pagamento />
            </FaturasList>


          </FaturaContainer>

        </BodyContainer>
      </InsideContainer>

    </Container>
  );
}

export default Withdrawn;