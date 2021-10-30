import React, { useState } from 'react';
import COLOR from '../../colors';

import Navbar from '../../Components/Navbar';
import Options from '../../Components/Options';
import { Select, MenuItem, createTheme, ThemeProvider } from '@material-ui/core';

import { BiPlusCircle, BiSearch, BiMessageAltDetail, BiMoney } from 'react-icons/bi'
import Input from '../../Components/Input';
import Group from '../../Components/Group';

import Graphic from '../../Assets/Graphic.png'
import warning from '../../Assets/warning.png'
import Folder from '../../Assets/Folder.png'

import { Container, InsideContainer, GraphicImg, Cancelar, FolderImg, BodyContainer, Criar, Bottom, ImgBottom, ModalTitle, BodyBottom, BottomTop, CobrancaContainer, CobrancaText, CaracteresRestantes, Body, Modal, CreateGroupContainer, CreateGroup, ModalOut, GroupList, SearchGroup } from './styles';

const Dashboard: React.FC = () => {
  const [newGroup, setNewGroup] = useState(false)

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
      borderRadius: 3
    }
  })

  return (
    <Container>
      <Navbar />

      <InsideContainer>
        <Options />
        <BodyContainer>
          {/** CONTAINER */}
          <Body>
            {/** CRIAR GRUPO BUTTON */}

            <CreateGroupContainer>
              <CreateGroup
                onClick={() => {
                  setNewGroup(true)
                }}
              >
                <BiPlusCircle size={20}
                  style={{
                    marginRight: 6,
                    cursor: 'pointer'
                  }}
                />
                Criar grupo
              </CreateGroup>
            </CreateGroupContainer>

            {/** PROCURAR GRUPO INPUT */}
            <SearchGroup>
              <Input
                placeholder={'Pesquisar nome do grupo...'}
                height={60}
              >
                <BiSearch size={20} />
              </Input>
            </SearchGroup>
            {/** LISTA DE GRUPO LIST! */}

            <GroupList>
              <Group
                app={1}
                name={'Nome grupo telegram'}
                people={142}
                toUrl={'id1'}
                />

              <Group
                app={2}
                name={'Nome grupo zapzap kkkkk'}
                people={142}
                toUrl={'id2'}
              />
            </GroupList>
          </Body>
        </BodyContainer>
      </InsideContainer>

      {/** BACKGROUND IMG! */}
      <GraphicImg
        src={Graphic}
        alt={'Graphic'}
        onDragStart={(e) => {
          e.preventDefault()
        }}
      />

      <FolderImg
        src={Folder}
        alt={'Folder'}
        onDragStart={(e) => {
          e.preventDefault()
        }}

      />

      {newGroup && (
        <ModalOut>
          <Modal>
            {/** HEADER  */}
            <ModalTitle>Criar novo grupo</ModalTitle>


            {/** BODY */}


            <Input
              placeholder={'Nome do grupo'}
              fontsize={16}
              height={60}
            >
              <BiMessageAltDetail size={18} />
            </Input>
            <CaracteresRestantes>25 caracteres restantes </CaracteresRestantes>

            <Input
              placeholder={'Link do grupo'}
              fontsize={16}
              height={60}
            >
              <BiMessageAltDetail size={18} />
            </Input>

            <ThemeProvider theme={theme}>
              {/**BODY BOTTOM */}
              <BodyBottom>
                <CobrancaText>Cobrança</CobrancaText>
                <CobrancaContainer>
                  <Select
                    style={{
                      color: COLOR.Inactive,
                      fontSize: 14,
                      backgroundColor: COLOR.Light,
                      boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.1)',
                      padding: '2px 16px',
                      marginRight: 16,
                    }}
                    disableUnderline
                    variant={'standard'}
                  >
                    <MenuItem value={'br'}>
                      R$ BRL
                    </MenuItem>
                    <MenuItem value={'usd'}>
                      $ USD
                    </MenuItem>
                  </Select>


                  <Select
                    style={{
                      color: COLOR.Inactive,
                      fontSize: 14,
                      backgroundColor: COLOR.Light,
                      boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.1)',
                      padding: '2px 12px'
                    }}
                    disableUnderline
                    variant={'standard'}
                  >
                    <MenuItem value={'br'}>
                      Mensal
                    </MenuItem>
                    <MenuItem value={'usd'}>
                      Unico
                    </MenuItem>
                  </Select>

                </CobrancaContainer>
                <Input
                  placeholder={'R$ 0.00'}
                  fontsize={16}
                  height={60}
                >
                  <BiMoney size={18} />
                </Input>
              </BodyBottom>
            </ThemeProvider>


            {/** BOTTOM  */}

            <BottomTop>
              <ImgBottom
                alt={''}
                src={warning}
                onDragStart={(e) => {
                  e.preventDefault()
                }}
              />
              Verifique se o link do grupo é válido.
            </BottomTop>

            <Bottom>
              <Cancelar
                onClick={() => {
                  setNewGroup(false)
                }}
              >
                Cancelar
              </Cancelar>

              <Criar>
                Criar
              </Criar>
            </Bottom>
          </Modal>
        </ModalOut>
      )}

    </Container>
  );
}

export default Dashboard;