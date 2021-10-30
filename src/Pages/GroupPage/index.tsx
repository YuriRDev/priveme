import React, { useState } from 'react';
import COLOR from '../../colors';

import Navbar from '../../Components/Navbar';
import Options from '../../Components/Options';

import { BiChevronLeft, BiUserPlus, BiSearch, BiX, BiPhone, BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { SiWhatsapp } from 'react-icons/si'

import groupContainer from '../../Assets/groupContainer.svg'
import clock from '../../Assets/clock.png'
import bot from '../../Assets/bot.png'
import user from '../../Assets/user.png'
import forbidden from '../../Assets/forbidden.png'
import cone from '../../Assets/cone.png'

import Input from '../../Components/Input';
import User from '../../Components/User';
import Activity from '../../Components/Activity';

import { Container, InfoLine, InsideContainer, ModalContainer, DeleteGroupImg, DeleteGroupMessage, DeleteButton, CancelDelete, DeleteGroupBottom, AddUserText, DeleteGroupBody, DeleteGroupHeader, DeleteGroupModal, AddUserCancelar, AddUserImg, AddUserConfirm, AddUserBottom, AddUserBody, AddUserModal, UserCount, VerificarButton, BotImg, Line, DeleteGroup, DeleteGroupContainer, BotStatusTitle, BotStatusText, BotTexts, BotHeader, BotContainer, AtividadesListText, AtividadeDescription, AtividadesImg, NotVerifiedBottom, AtividadesHeader, AtividadeList, UltimasAtividades, RightContainer, GroupName, ErrorMsgVerified, NotVerifiedHeader, NotVerifiedImg, NotVerifiedBody, GroupNotVerified, TextsContainer, AddUserButton, UserSearch, UserList, GroupVerified, GroupVoltar, GroupVoltarHidden, PageWidth, AllContainer, Group, ImgGroup } from './styles';

import { Link } from 'react-router-dom';

const GroupPage: React.FC = () => {
  const [addUser, setAddUser] = useState(false)
  const [deleteGroup, setDeleteGroup] = useState(false)

  const [isGroupVerified, setIsGroupVerified] = useState(true)

  const [isInfoOn, setIsInfoOn] = useState(true)

  return (
    <Container>
      <Navbar />
      <InsideContainer >
        <Options />

        {/** GROUP NAME! */}
        <GroupName>
          {/** TEXTS CONTAINERS */}
          <TextsContainer>

            <Link
              to={'/'}
              style={{
                color: COLOR.Dark,
                textDecoration: 'none',
                opacity: 1,
                zIndex: 10
              }}
            >
              <GroupVoltar>
                <BiChevronLeft
                  size={24}
                /> Voltar
              </GroupVoltar>
            </Link>

            <Group>
              <SiWhatsapp
                style={{
                  marginRight: 8
                }}
                color={'#26D367'}
                size={24}
              />
              Nome do grupo zapzapkkkk
            </Group>

            <GroupVoltarHidden>
              <BiChevronLeft
                size={24}
              /> Voltar
            </GroupVoltarHidden>

            <ImgGroup
              src={groupContainer}
              onDragStart={(e) => {
                e.preventDefault()
              }}
            />

          </TextsContainer>
        </GroupName>

        {/** page width */}
        <PageWidth>
          {/** ALL CONTAINER CONTAINER */}
          <AllContainer
          // style={{
          //  flexDirection: 'column-reverse'
          // }}
          >

            {/** LEFT CONTAINER */}
            {isGroupVerified && (
              <GroupVerified>

                <InfoLine
                  style={{
                    marginBottom: 32
                  }}
                  onClick={() => {
                  }}
                >
                  <Line
                    style={{
                      marginTop: 0,
                      marginRight: 24,
                    }}
                  />
                  Users
                  <Line
                    style={{
                      marginTop: 0,
                      marginLeft: 24
                    }}
                  />
                </InfoLine>

                {/** ADD USER BUTTON */}
                <AddUserButton
                  onClick={() => {
                    setAddUser(true)
                  }}
                >
                  <BiUserPlus
                    size={24}
                    style={{
                      marginRight: 6
                    }}
                  />
                  Adicionar usuario
                </AddUserButton>

                {/** USER SEARCH */}
                <UserSearch>
                  <Input
                    placeholder={'Pesquisar telefone do usuario'}
                  >
                    <BiSearch size={18} />
                  </Input>
                </UserSearch>

                {/** USER LIST! */}
                <UserList>
                  <UserCount>142 Usuarios</UserCount>

                  <User
                    status={0}
                    number={'+55 (31) 9 9959-3050'}
                    daysToRenew={30}
                  />

                  <User
                    status={1}
                    number={'+55 (31) 9 9959-3050'}
                    daysToRenew={30}
                  />
                  <User
                    status={2}
                    number={'+55 (31) 9 9959-3050'}
                    daysToRenew={30}
                  />

                </UserList>
              </GroupVerified>

            )}

            {!isGroupVerified && (
              <GroupNotVerified>
                {/** HEADER */}
                <NotVerifiedHeader>
                  Grupo não verificado
                </NotVerifiedHeader>

                {/** BODY */}
                <NotVerifiedBody>
                  <NotVerifiedImg
                    src={cone}
                    onDragStart={(e) => {
                      e.preventDefault()
                    }}
                  />
                  Para verificar o grupo, você precisa dar ao bot (nome do bot) o cargo de administrador.
                </NotVerifiedBody>

                {/** BOTTOM */}

                <NotVerifiedBottom>
                  {/** ERROR MSG: */}
                  <ErrorMsgVerified>Parece que o bot ainda não tem o cargo de <br />administrador, tente novamente</ErrorMsgVerified>

                  {/** VERIFICAR BUTTON */}
                  <VerificarButton>
                    Verificar Grupo
                  </VerificarButton>
                </NotVerifiedBottom>


              </GroupNotVerified>
            )}

            {/** RIGHT CONTAINER */}
            <RightContainer>
              <InfoLine
                onClick={() => {
                  setIsInfoOn(!isInfoOn)
                }}
              >
                <Line
                  style={{
                    marginTop: 0,
                    marginRight: 24,
                  }}
                />
                Informações
                {isInfoOn && (
                  <BiChevronDown style={{
                    height: 25,
                    width: 80
                  }} />
                )}
                {!isInfoOn && (
                  <BiChevronUp style={{
                    height: 25,
                    width: 80
                  }} />
                )}
                <Line
                  style={{
                    marginTop: 0,
                    marginLeft: 24
                  }}
                />
              </InfoLine>
              <div
                style={{
                  visibility: isInfoOn ? 'visible' : 'hidden',
                  height: isInfoOn ? '100%' : 0
                }}
              >
                {/** ULTIMAS ATIVIDADES */}
                <UltimasAtividades>
                  {/** HEADER */}
                  <AtividadesHeader>
                    <AtividadesImg
                      src={clock}
                      style={{
                        height: 77,
                        width: 47,
                      }}
                    />
                    <AtividadesListText>
                      <text>Ultimas atividades</text>
                      <AtividadeDescription>Ultimas 5 atividades</AtividadeDescription>
                    </AtividadesListText>

                  </AtividadesHeader>

                  <AtividadeList>
                    <Activity
                      message={'Pagamento confirmado'}
                      minutes={5}
                      phone={'+55 31 9 9959-3050'}
                    />
                    <Activity
                      message={'Usuario removido'}
                      minutes={7}
                      phone={'+55 31 9 9959-3050'}
                    />
                    <Activity
                      message={'Usuario adicionado'}
                      minutes={12}
                      phone={'+55 31 9 9959-3050'}
                    />
                    <Activity
                      message={'Pagamento confirmado'}
                      minutes={14}
                      phone={'+55 31 9 9959-3050'}
                    />
                    <Activity
                      message={'Pagamento confirmado'}
                      minutes={22}
                      phone={'+55 31 9 9959-3050'}
                    />

                  </AtividadeList>

                </UltimasAtividades>

                <BotContainer>
                  {/** HEADER */}
                  <BotHeader>
                    <BotImg
                      alt={''}
                      src={bot}
                    />
                    <BotTexts>
                      <BotStatusTitle>Status do bot</BotStatusTitle>
                      <BotStatusText>Ativo</BotStatusText>
                      <BotStatusTitle>Informações do grupo</BotStatusTitle>
                      <BotStatusText
                        style={{
                          color: COLOR.Inactive,
                        }}
                      >R$ 240.00 / Mes <br />
                        Nome do grupo zap zap kkkkk
                      </BotStatusText>
                    </BotTexts>

                  </BotHeader>

                  {/** LINHA */}
                  <Line />

                  <DeleteGroupContainer>
                    <DeleteGroup
                      onClick={() => {
                        setDeleteGroup(true)
                      }}
                    >
                      <BiX size={24} />
                      Deletar grupo
                    </DeleteGroup>
                  </DeleteGroupContainer>


                </BotContainer>
              </div>

            </RightContainer>

          </AllContainer>
        </PageWidth>
      </InsideContainer>

      {addUser && (
        <ModalContainer>
          <AddUserModal>
            {/** HEADER  */}
            <AddUserText>Adicionar Usuario</AddUserText>
            <Input
              placeholder={'+55 (00) 0 0000-0000'}
              fontsize={16}
              height={60}
            >
              <BiPhone size={18} />
            </Input>

            {/** BODY */}

            <AddUserBody>
              <AddUserImg
                alt={''}
                src={user}
                onDragStart={(e) => {
                  e.preventDefault()
                }}
              />
              O usuário receberá automaticamente uma mensagem para confirmar o pagamento
            </AddUserBody>

            {/**BOTTOM */}

            <AddUserBottom>
              <AddUserCancelar
                onClick={() => {
                  setAddUser(false)
                }}
              >
                Cancelar
              </AddUserCancelar>

              <AddUserConfirm>
                Adicionar
              </AddUserConfirm>
            </AddUserBottom>

          </AddUserModal>

        </ModalContainer>
      )}

      {deleteGroup && (
        <ModalContainer>
          <DeleteGroupModal>
            {/** HEADER  */}
            <DeleteGroupHeader>Deletar grupo</DeleteGroupHeader>


            {/** BODY */}

            <DeleteGroupBody>
              <DeleteGroupImg
                alt={''}
                src={forbidden}
                onDragStart={(e) => {
                  e.preventDefault()
                }}
              />
              Essa ação não pode ser desfeita, ao deletar o grupo, ele não poderá mais ser recuperado
            </DeleteGroupBody>

            {/**BOTTOM */}

            <DeleteGroupMessage>Deseja deletar o grupo?</DeleteGroupMessage>
            <DeleteGroupBottom>
              <DeleteButton>
                Deletar grupo
              </DeleteButton>

              <CancelDelete
                onClick={() => {
                  setDeleteGroup(false)
                }}
              >
                Não
              </CancelDelete>
            </DeleteGroupBottom>

          </DeleteGroupModal>

        </ModalContainer>
      )}
    </Container>
  );
}

export default GroupPage;