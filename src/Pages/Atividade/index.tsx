import React, { useState } from 'react';
import COLOR from '../../colors';

import Navbar from '../../Components/Navbar';
import Options from '../../Components/Options';
import { Select, MenuItem } from '@material-ui/core';

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import { Container, FaturasList, InsideContainer, BodyContainer, FaturaOpcoes, FaturaContainer, GraphicContainer, GraphicData, ChartContainer } from './styles';
import Fatura from '../../Components/Fatura';

import loading from '../../Assets/loading';

import Lottie from 'react-lottie';

const Atividade: React.FC = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },

  };

  const [faturaOption, setFaturaOption] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const formatter = (value: any) => `R$ ${value}`;
  const data = [
    {
      valor: 23,
    },
    {
      valor: 26,
    },
    {
      valor: 32,
    },
    {
      valor: 25,
    },
    {
      valor: 24,
    },
    {
      valor: 23,
    },
    {
      valor: 26,
    },
  ];

  return (
    <Container>
      <Navbar />

      <InsideContainer>
        <Options
          selected={1}
        />
        <BodyContainer>
          <GraphicContainer>
            {/** HEADER */}
            <div>
              <Select
                style={{
                  color: COLOR.Inactive,
                  fontSize: 16,
                  backgroundColor: COLOR.Light,
                  padding: '2px 16px',
                  marginTop: 8,
                  border: 'none',
                  borderRadius: 3,
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
                  marginRight: 16,
                }}
                value={'todos'}
                disableUnderline
                variant={'standard'}
              >
                <MenuItem value={'todos'}>
                  Todos os grupos
                </MenuItem>
              </Select>

              <Select
                style={{
                  color: COLOR.Inactive,
                  fontSize: 16,
                  backgroundColor: COLOR.Light,
                  padding: '2px 16px',
                  marginTop: 8,
                  border: 'none',
                  borderRadius: 3,
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)'
                }}
                value={'hoje'}
                disableUnderline
                variant={'standard'}
              >
                <MenuItem value={'hoje'}>
                  Hoje
                </MenuItem>
                <MenuItem value={'semana'}>
                  Essa semana
                </MenuItem>
                <MenuItem value={'mes'}>
                  Esse mes
                </MenuItem>
                <MenuItem value={'6meses'}>
                  Ultimos 6 meses
                </MenuItem>
                <MenuItem value={'ano'}>
                  Ultimo ano
                </MenuItem>
                <MenuItem value={'sempre'}>
                  Sempre
                </MenuItem>
              </Select>
            </div>

            {/** DADOS */}


            {/** valor bruto */}
            <GraphicData>
              <text
                style={{
                  fontSize: 14
                }}
              >Valor Bruto</text>
              <text
                style={{
                  fontSize: 20,
                  fontWeight: 500
                }}
              >R$ 0,00</text>
            </GraphicData>

            {/** grafico */}
            {!isLoading && (

              <ChartContainer>
                <ResponsiveContainer width={'100%'} height={'100%'}>
                  <LineChart
                    data={data}
                    style={{
                      top: 32
                    }}
                    margin={{
                      top: 5,
                      right: 30,
                      bottom: 5,
                    }}
                  >
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={formatter} />
                    <Tooltip />
                    <Line type="monotone" dataKey="valor" stroke={COLOR.Primary} activeDot={{ r: 8 }} />
                  </LineChart>

                </ResponsiveContainer>
              </ChartContainer>
            )}
            {isLoading && (
              <div
                style={{
                  opacity: .5,
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  width: '100%'
                }}
              >
                <Lottie
                  options={defaultOptions}
                  height={120}
                  width={120}
                  isClickToPauseDisabled={true}
                />
              </div>
            )}

          </GraphicContainer>


          {/** FATURAS */}

          <FaturaContainer>
            {/** HEADER */}
            <text
              style={{
                fontSize: 20,
                fontWeight: 500
              }}
            >Faturas</text>


            {/** OPCOES */}
            <FaturaOpcoes>
              <text
                style={{
                  marginRight: 16,
                  color: faturaOption == 0 ? COLOR.Primary : COLOR.Inactive,
                  fontWeight: faturaOption == 0 ? 500 : 400,
                  cursor: 'pointer'
                }}
                onClick={() => {
                  setFaturaOption(0)
                }}
              >Pagas</text>
              <text
                style={{
                  marginRight: 16,
                  color: faturaOption == 1 ? COLOR.Primary : COLOR.Inactive,
                  fontWeight: faturaOption == 1 ? 500 : 400,
                  cursor: 'pointer'
                }}
                onClick={() => {
                  setFaturaOption(1)
                }}
              >Pendentes</text>
              <text
                style={{
                  marginRight: 16,
                  color: faturaOption == 2 ? COLOR.Primary : COLOR.Inactive,
                  fontWeight: faturaOption == 2 ? 500 : 400,
                  cursor: 'pointer'
                }}
                onClick={() => {
                  setFaturaOption(2)
                }}
              >Todos</text>
            </FaturaOpcoes>


            {/** LISTA DE FATURA */}
            {!isLoading && (
              <FaturasList>
                <Fatura />
                <Fatura />
                <Fatura />
                <Fatura />
                <Fatura />
                <Fatura />
              </FaturasList>
            )}

            {isLoading && (
              <FaturasList
                style={{
                  opacity: .5
                }}
              >
                <Lottie
                  options={defaultOptions}
                  height={120}
                  width={120}
                  isClickToPauseDisabled={true}
                />
              </FaturasList>
            )}


          </FaturaContainer>

        </BodyContainer>
      </InsideContainer>

    </Container>
  );
}

export default Atividade;