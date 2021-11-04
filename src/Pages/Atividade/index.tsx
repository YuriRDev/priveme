import React, { useState } from 'react';
import COLOR from '../../colors';

import Navbar from '../../Components/Navbar';
import Options from '../../Components/Options';
import { Select, MenuItem } from '@material-ui/core';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { Container, InsideContainer, BodyContainer } from './styles';
import Fatura from '../../Components/Fatura';

const Atividade: React.FC = () => {

  const [faturaOption, setFaturaOption] = useState(0)

  const data = [
    {
      usuarios: 3,
    },
    {
      usuarios: 6,
    },
    {
      usuarios: 3,
    },
    {
      usuarios: 5,
    },
    {
      usuarios: 4,
    },
    {
      usuarios: 3,
    },
    {
      usuarios: 6,
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
          <div
            style={{
              backgroundColor: COLOR.Light,
              boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.1)',
              borderRadius: 3,
              padding: 24,
              width: 800

            }}
          >
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
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: 24
              }}
            >
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
            </div>

            {/** grafico */}

            <LineChart
              width={500}
              height={300}
              data={data}
              style={{
                top: 32
              }}
              margin={{
                top: 5,
                right: 30,
                left: -32,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="usuarios" stroke={COLOR.Primary} activeDot={{ r: 8 }} />
            </LineChart>

          </div>


          {/** FATURAS */}

          <div
            style={{
              backgroundColor: COLOR.Light,
              boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.1)',
              borderRadius: 3,
              padding: 24,
              width: 800,
              marginTop: 48,
              marginBottom: 128

            }}
          >
            {/** HEADER */}
            <text
              style={{
                fontSize: 20,
                fontWeight: 500
              }}
            >Faturas</text>


            {/** OPCOES */}
            <div
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginTop: 16,
                borderBottom: `solid 1px ${COLOR.Inactive}`,
                paddingBottom: 12
              }}
            >
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
            </div>


            {/** LISTA DE FATURA */}
            <div
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0px 24px',
                paddingTop: 32,
                flexDirection: 'column',
              }}
            >
              <Fatura />
              <Fatura />
              <Fatura />
              <Fatura />
              <Fatura />
              <Fatura />
            </div>


          </div>

        </BodyContainer>
      </InsideContainer>

    </Container>
  );
}

export default Atividade;