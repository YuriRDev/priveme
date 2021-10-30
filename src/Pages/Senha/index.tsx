import React, { useState } from 'react';
import COLOR from '../../colors';
import Navbar from '../../Components/Navbar';

// import { Container } from './styles';

import { BiEnvelope, BiInfoCircle, BiCheck } from 'react-icons/bi'

import Input from '../../Components/Input';

import { Container, Recuperar, InsideContainer, Modal, Title, MailInput, Messages, Bottom, Voltar } from './styles'
import { Link } from 'react-router-dom';

const Senha: React.FC = () => {

  const [messageType, setMessageType] = useState<any>(null)

  return (
    <Container
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOR.Primary
      }}
    >
      <Navbar />
      <InsideContainer>
        <Modal>
          <Title>
            Recuperar senha
          </Title>

          <MailInput>
            <Input
              placeholder={'Email'}
            >
              <BiEnvelope
                size={20}
              />
            </Input>
          </MailInput>

          {/** ERROR E MENSAGENS */}

          <Messages>
            {messageType != null && (
              <BiInfoCircle
                size={24}
                style={{
                  marginRight: 8,
                  height: 24,
                  width: 24
                }}
              />
            )}
            {messageType == 0 && (
              <text>Te enviamos um email para<br /> recuperar sua senha</text>
            )}
            {messageType == 1 && (
              <text>Não foi possivel encontrar<br /> sua conta</text>
            )}
          </Messages>

          {/** BOTTOM DIV (Senha/entrar) */}
          <Bottom>
            {/** BOTTOM DIV BOTTOM */}

            <Link
              to={'/login'}
              style={{
                textDecoration: 'none'
              }}
            >
              <Voltar>
                Voltar
              </Voltar>
            </Link>

            <Recuperar
              onClick={() => {
                setMessageType(messageType == 0 ? 1 : 0)
              }}
            >
              Recuperar
            </Recuperar>

          </Bottom>

        </Modal>
      </InsideContainer>
    </Container>
  );
}

export default Senha;