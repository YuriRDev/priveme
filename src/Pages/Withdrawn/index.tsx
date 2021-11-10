import React, { useEffect, useState } from 'react';
import COLOR from '../../colors';

import Navbar from '../../Components/Navbar';
import Options from '../../Components/Options';
import { Select, MenuItem } from '@material-ui/core';

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import { Container, FaturasList, InsideContainer, Retirar, BodyContainer, FaturaOpcoes, FaturaContainer, GraphicContainer, GraphicData, ChartContainer } from './styles';
import Fatura from '../../Components/Fatura';
import Pagamento from '../../Components/Pagamento';

import loading from '../../Assets/loading';

import Lottie from 'react-lottie';

const Withdrawn: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },

  };

  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 300)
  }, [])

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
              {isLoading && (
                <div
                  style={{
                    marginLeft: -8,
                    opacity: .5
                  }}
                >
                  <Lottie
                    options={defaultOptions}
                    height={60}
                    width={60}
                    isClickToPauseDisabled={true}
                  />
                </div>
              )}
              {!isLoading && (
                <text
                  style={{
                    fontSize: 20,
                    fontWeight: 500
                  }}
                >R$ 0,00</text>
              )}
            </GraphicData>


            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
            >
              {!isLoading && (
                <Retirar>
                  Retirar
                </Retirar>
              )}
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
            {!isLoading && (
              <FaturasList>
                <Pagamento />
                <Pagamento />
                <Pagamento />
                <Pagamento />
              </FaturasList>
            )}
            {isLoading && (
              <FaturasList
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  padding: '0px'
                }}
              >
                <div
                  style={{
                    marginLeft: -8,
                    opacity: .5
                  }}
                >
                  <Lottie
                    options={defaultOptions}
                    height={60}
                    width={60}
                    isClickToPauseDisabled={true}
                  />
                </div>
              </FaturasList>
            )}


          </FaturaContainer>

        </BodyContainer>
      </InsideContainer>

    </Container >
  );
}

export default Withdrawn;