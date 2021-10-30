import React, { useState } from 'react';
import COLOR from '../../colors';
import Navbar from '../../Components/Navbar';

import { Container, InsideContainer, Modal, Title, TenhoConta, Registrar, TermosText, BottomDiv, ComContainer, Termos, Check, EmailInputs, Line, LineText, OuEmail, SocialDiv, SocialContainer } from './styles';

import { BiEnvelope, BiLockAlt, BiCheck } from 'react-icons/bi'

import google from '../../Assets/google.svg'
import apple from '../../Assets/apple.svg'
import Input from '../../Components/Input';
import { Link } from 'react-router-dom';

const Registro: React.FC = () => {
  const [checked, setChecked] = useState(false)

  return (
    <Container>
      <Navbar />
      <InsideContainer>
        <Modal>
          <Title>
            Bem vindo
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

          {/** TERMOS E SERVICOS */}

          <Termos>
            <Check
              style={{
                backgroundColor: checked ? COLOR.Primary : '#E4E4E4',
              }}
              onClick={() => {
                setChecked(!checked)
              }}
            >
              {checked && (
                <BiCheck size={22} color={COLOR.Light} />
              )}
            </Check>
            <TermosText>
              Ao marcar essa caixa, confirmo que <br /> sou maior de 18 anos e li e concordo  <br />com os <text
                style={{
                  textDecoration: 'underline'
                }}
              >termos de serviço</text>
            </TermosText>
          </Termos>

          {/** BOTTOM DIV (registro/entrar) */}
          <BottomDiv>

            <Link to={'/login'} style={{ textDecoration: 'none' }}>
              <TenhoConta>
                Ja tenho conta
              </TenhoConta>
            </Link>

            <Registrar
              style={{
                cursor: checked ? 'pointer' : 'default',
                backgroundColor: checked ? COLOR.Primary : COLOR.Inactive,
              }}
            >
              Registrar
            </Registrar>

          </BottomDiv>

        </Modal>
      </InsideContainer>
    </Container>
  );
}

export default Registro;