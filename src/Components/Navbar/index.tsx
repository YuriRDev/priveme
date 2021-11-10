import React, { useState } from 'react';
import COLOR from '../../colors';

import { BiSearch, BiEqualizer, BiGroup, BiHelpCircle, BiLogOut, BiWorld, BiChevronRight } from 'react-icons/bi'

import { Container, LogoText, NotLoggedContainer, SairConta, LanguageOption, MenuBottom, HeaderOption, MenuHeaderLine, MenuAjuda, MenuHeaderList, UserIcon, LoggedContainer, NameContainer, MenuContainer, MenuHeaderTop, MenuHeader } from './styles';
import { Link } from 'react-router-dom';



const Navbar: React.FC = () => {
    const isLogged = true;

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <Container>
            <Link
                to={'/'}
                style={{
                    textDecoration: 'none'
                }}
            >
                <LogoText>PriveMe</LogoText>
            </Link>

            {!isLogged && (
                <NotLoggedContainer>
                    Entrar
                </NotLoggedContainer>
            )}

            {isLogged && (
                <LoggedContainer
                    onClick={() => {
                        setMenuOpen(true)
                    }}
                >
                    P
                </LoggedContainer>
            )}

            <MenuContainer
                style={{
                    zIndex: menuOpen ? 5 : 0,
                    opacity: menuOpen ? 1 : 0,
                    visibility: menuOpen ? 'visible' : 'hidden'
                }}
                onMouseLeave={() => {
                    setMenuOpen(false)
                }}
            >
                <MenuHeader>
                    <MenuHeaderTop>
                        <NameContainer>
                            <UserIcon>
                                P
                            </UserIcon>
                            Nome da pessoa
                        </NameContainer>
                        <Link
                            to={'/atividade'}
                            style={{
                                textDecoration: 'none',
                            }}
                        >
                            <HeaderOption
                                style={{
                                    marginBottom: -12
                                }}
                            >
                                <BiEqualizer style={{ marginRight: 8 }} size={22} />
                                ATIVIDADE
                            </HeaderOption>
                        </Link>

                        <Link
                            to={'/'}
                            style={{
                                textDecoration: 'none',
                            }}
                        >
                            <HeaderOption>
                                <BiGroup style={{ marginRight: 8 }} size={22} />
                                MEUS GRUPOS
                            </HeaderOption>
                        </Link>
                    </MenuHeaderTop>

                    <MenuHeaderList>
                        <MenuAjuda>
                            <BiHelpCircle style={{ marginRight: 8 }} size={22} />
                            AJUDA
                        </MenuAjuda>

                        <MenuHeaderLine />

                        <SairConta>
                            <BiLogOut style={{ marginRight: 8 }} size={22} />
                            SAIR DA CONTA
                        </SairConta>

                    </MenuHeaderList>

                </MenuHeader>

                <MenuBottom>
                    <MenuHeaderLine />
                    <LanguageOption>
                        <BiWorld style={{ marginRight: 8 }} size={22} />
                        PORTUGUÊS
                        <BiChevronRight style={{ marginLeft: 4 }} size={20} />
                    </LanguageOption>
                </MenuBottom>

            </MenuContainer>

            <div
                style={{
                    position: 'absolute',
                    height: '100vh',
                    width: '100vw',
                    backgroundColor: COLOR.Dark,
                    opacity: menuOpen ? .2 : 0,
                    top: 0,
                    right: 0,
                    transition: '.2s',
                    visibility: menuOpen ? 'visible' : 'hidden'
                }}
            />

        </Container>
    );
}

export default Navbar;