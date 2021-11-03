import React, { useState } from 'react';
import COLOR from '../../colors';

import Navbar from '../../Components/Navbar';
import Options from '../../Components/Options';
import { TextField, createTheme, ThemeProvider, Select, MenuItem } from '@material-ui/core';


import { Container, InsideContainer, InputContainer, QuaseLaContainer } from './styles';

const Verify: React.FC = () => {
  const [newGroup, setNewGroup] = useState(false)

  const bancos = [{ value: "001", "name": "001 - Banco do Brasil" }, { value: "021", "name": "021 - Banestes" }, { value: "033", "name": "033 - Santander" }, { value: "041", "name": "041 - Banrisul" }, { value: "070", "name": "070 - BRB" }, { value: "077", "name": "077 - Inter" }, { value: "085", "name": "085 - Via Credi" }, { value: "104", "name": "104 - Caixa Econômica" }, { value: "212", "name": "212 - Banco Original" }, { value: "218", "name": "218 - BS2" }, { value: "237", "name": "237 - Bradesco" }, { value: "260", "name": "260 - Nubank" }, { value: "290", "name": "290 - Pagseguro" }, { value: "336", "name": "336 - Banco C6" }, { value: "341", "name": "341 - Itaú" }, { value: "422", "name": "422 - Safra" }, { value: "655", "name": "655 - Neon" }, { value: "746", "name": "746 - Modal" }, { value: "748", "name": "748 - Sicredi" }, { value: "756", "name": "756 - Sicoob" }]

  const theme = createTheme({
    palette: {
      primary: {
        main: COLOR.Primary
      },
      secondary: {
        main: COLOR.PrimaryMinusOne
      }
    },
    shape: {
      borderRadius: 3,
    },

  })

  const [bancoSelect, setBancoSelect] = useState('001')

  const [tipoConta, setTipoConta] = useState(0)

  return (
    <Container>
      <Navbar />

      <InsideContainer>
        {/** QUASE LA */}
        <QuaseLaContainer>
          <text
            style={{
              fontSize: 24,
              fontWeight: 500,
              marginBottom: 4
            }}
          >Verifique sua conta!</text>
          <text
            style={{
              color: COLOR.Inactive
            }}
          >Precisamos de um pouco mais de informações para você<br /> receber pelo seu grupo</text>
        </QuaseLaContainer>


        {/** INPUTS  */}
        <ThemeProvider
          theme={theme}
        >
          <InputContainer>
            {/** CEP */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column'
              }}
            >
              <text
                style={{
                  fontSize: 14,
                  fontWeight: 500
                }}
              >CEP</text>
              <TextField
                style={{
                  width: '100%',
                }}
                size={'small'}
              />
            </div>

            {/** Endereco / bairro */}
            <div
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 16
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  width: '48%'
                }}
              >
                <text
                  style={{
                    fontSize: 14,
                    fontWeight: 500
                  }}
                >Endereço</text>
                <TextField
                  style={{
                    width: '100%',
                  }}
                  size={'small'}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  width: '48%'
                }}
              >
                <text
                  style={{
                    fontSize: 14,
                    fontWeight: 500
                  }}
                >Bairro</text>
                <TextField
                  style={{
                    width: '100%',
                  }}
                  size={'small'}
                />
              </div>
            </div>

            {/** Endereco / bairro */}
            <div
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 16
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  width: '48%'
                }}
              >
                <text
                  style={{
                    fontSize: 14,
                    fontWeight: 500
                  }}
                >Número</text>
                <TextField
                  style={{
                    width: '100%',
                  }}
                  size={'small'}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  width: '48%'
                }}
              >
                <text
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: COLOR.Inactive
                  }}
                >
                  Complemento </text>
                <TextField
                  style={{
                    width: '100%',
                  }}
                  size={'small'}
                />
              </div>
            </div>

            {/** Endereco / bairro */}
            <div
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 16
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  width: '48%'
                }}
              >
                <text
                  style={{
                    fontSize: 14,
                    fontWeight: 500
                  }}
                >Cidade</text>
                <TextField
                  style={{
                    width: '100%',
                  }}
                  size={'small'}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  width: '48%'
                }}
              >
                <text
                  style={{
                    fontSize: 14,
                    fontWeight: 500
                  }}
                >
                  Estado</text>
                <TextField
                  style={{
                    width: '100%',
                  }}
                  size={'small'}
                />
              </div>
            </div>

            {/** Nome */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: 48
              }}
            >
              <text
                style={{
                  fontSize: 14,
                  fontWeight: 500
                }}
              >Nome Completo ou Razão Social</text>
              <TextField
                style={{
                  width: '100%',
                }}
                size={'small'}
                placeholder={'ex: Pedro Joao Carlos'}
              />
            </div>

            {/** CPF ou CNPJ */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: 16
              }}
            >
              <text
                style={{
                  fontSize: 14,
                  fontWeight: 500
                }}
              >CPF ou CNPJ</text>
              <TextField
                style={{
                  width: '100%',
                }}
                size={'small'}
              />
              <text
                style={{
                  fontSize: 14,
                  marginTop: 8
                }}
              >
                * O CPF ou CNPJ cadastrado deve ser igual ao do titular do cartão.
              </text>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: 16
              }}
            >
              <text
                style={{
                  fontSize: 14,
                  fontWeight: 500
                }}
              >Banco</text>
              <Select
                style={{
                  color: COLOR.Inactive,
                  fontSize: 16,
                  backgroundColor: COLOR.Background,
                  padding: '2px 16px',
                  width: '100%',
                  marginTop: 8,
                  border: `solid 1px #C4C1C1`,
                  borderRadius: 3
                }}
                value={bancoSelect}
                onChange={(e) => {
                  setBancoSelect(e.target.value)
                }}
                disableUnderline
                variant={'standard'}
              >
                {
                  bancos.map((item: any) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.name}
                    </MenuItem>
                  ))
                }
              </Select>
            </div>

            {/** Agencia / Conta */}
            <div
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 16
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  width: '48%'
                }}
              >
                <text
                  style={{
                    fontSize: 14,
                    fontWeight: 500
                  }}
                >Agência</text>
                <TextField
                  style={{
                    width: '100%',
                  }}
                  size={'small'}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  width: '48%'
                }}
              >
                <text
                  style={{
                    fontSize: 14,
                    fontWeight: 500
                  }}
                >

                  Conta</text>
                <TextField
                  style={{
                    width: '100%',
                  }}
                  size={'small'}
                />
              </div>
            </div>

            {/** Tipo de conta */}
            <div
              style={{
                width: '100%',
                display: 'flex',
                marginTop: 16,
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column'
              }}
            >
              <text
                style={{
                  fontSize: 14,
                  fontWeight: 500
                }}
              >

                Tipo de Conta</text>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 4
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '48%',
                    border: `solid 1px #C4C1C1`,
                    borderRadius: 3,
                    height: 44,
                    fontSize: 14,
                    color: COLOR.Inactive,
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    setTipoConta(0)
                  }}
                >
                  <div
                    style={{
                      borderRadius: 100,
                      border: tipoConta == 0 ? `solid 3px #26BF00` : `solid 1px ${COLOR.Inactive}`,
                      backgroundColor: COLOR.Background,
                      height: 12,
                      width: 12,
                      marginRight: 6,
                      transition: '.1s'
                    }}
                  >
                  </div>
                  Corrente
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '48%',
                    border: `solid 1px #C4C1C1`,
                    borderRadius: 3,
                    height: 44,
                    fontSize: 14,
                    color: COLOR.Inactive,
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    setTipoConta(1)
                  }}
                >
                  <div
                    style={{
                      borderRadius: 100,
                      border: tipoConta == 1 ? `solid 3px #26BF00` : `solid 1px ${COLOR.Inactive}`,
                      backgroundColor: COLOR.Background,
                      height: 12,
                      width: 12,
                      marginRight: 6
                    }}
                  >
                  </div>
                  Poupança
                </div>
              </div>
            </div>


            {/** CONTINUAR BUTTON  */}
            <div
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: COLOR.Light,
                backgroundColor: COLOR.Inactive,
                borderRadius: 3,
                marginBottom: 120,
                marginTop: 48,
                height: 48,
                fontWeight: 500
              }}
            >
              Continuar
            </div>

          </InputContainer>
        </ThemeProvider>

      </InsideContainer>

    </Container>
  );
}

export default Verify;