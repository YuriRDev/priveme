import React from 'react';
import COLOR from '../../colors';
import Navbar from '../../Components/Navbar';


import { BiEnvelope, BiLockAlt } from 'react-icons/bi'

import google from '../../Assets/google.svg'
import apple from '../../Assets/apple.svg'
import Input from '../../Components/Input';

import { Container, InsideContainer, Modal, Title, ComContainer, EsqueciSenha, Registrar, BottomDivTop, Entrar, EmailInputs, BottomDiv, LineText, Line, OuEmail, SocialDiv, SocialContainer } from './styles';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <InsideContainer>
        <Modal>
          <Title>
            Bem vindo de volta
          </Title>

          <ComContainer>
            <Line
              style={{
                marginRight: 16
              }}
            />
            <LineText>COM</LineText>
            <Line
              style={{
                marginLeft: 16
              }}
            />
          </ComContainer>

          <SocialDiv>

            <SocialContainer>
              <img
                alt={'google'}
                src={google}
                style={{
                  height: 27,
                  width: 27
                }}
              />
            </SocialContainer>


            <SocialContainer
              style={{
                marginRight: 0
              }}
            >
              <img
                alt={'apple'}
                src={apple}
                style={{
                  height: 27,
                  width: 27
                }}
              />
            </SocialContainer>

          </SocialDiv>


          <ComContainer>

            <Line />
            <OuEmail>{'OU EMAIL'}</OuEmail>
            <Line />

          </ComContainer>

          <EmailInputs>
            <Input
              placeholder={'Email'}
            >
              <BiEnvelope
                size={20}
              />
            </Input>

            <div
              style={{
                marginTop: 18
              }}
            />
            <Input
              placeholder={'Email'}
              type={'password'}
            >
              <BiLockAlt
                size={20}
              />
            </Input>
          </EmailInputs>

          {/** BOTTOM DIV (registro/entrar) */}
          <BottomDiv>
            {/** BOTTOM DIV BOTTOM */}
            <BottomDivTop>
              <Link
                to={'/register'}
                style={{
                  textDecoration: 'none'
                }}
              >
                <Registrar>
                  Registrar
                </Registrar>
              </Link>

              <Entrar>
                Entrar
              </Entrar>

            </BottomDivTop>

            <Link
              to={'/forgotpassword'}
              style={{
                textDecoration: 'none',
                width: '100%'
              }}
            >
              <EsqueciSenha>
                <text
                  style={{
                    cursor: 'pointer'
                  }}
                >
                  Esqueci a senha
                </text>
              </EsqueciSenha>
            </Link>
          </BottomDiv>

        </Modal>
      </InsideContainer>
    </Container>
  );
}

export default Login;