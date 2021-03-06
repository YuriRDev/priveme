import React from 'react';
import COLOR from '../../colors';

import { BiUser } from 'react-icons/bi'

import { Container, Header } from './styles';

const Fatura: React.FC = () => {
    return (
        <Container>
            {/** HEADER */}
            <Header>
                <text>Nome do grupo</text>
                <text>04/12/2021 08:45</text>
            </Header>

            {/** BOTTOM */}
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    color: COLOR.Inactive,
                    fontWeight: 400,
                    fontSize: 14,
                    marginTop: 6
                }}

            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <BiUser size={16} style={{
                        marginRight: 4
                    }} />
                    +55 (31) 9 9959-3050
                </div>
                <text>R$ 24,00</text>
            </div>

            {/** TRACADO     */}
            <div
                style={{
                    height: 1,
                    width: '90%',
                    borderBottom: `solid 1px ${COLOR.Inactive}`,
                    marginTop: 8,
                    opacity: .3
                }}
            />

        </Container>

    );
}

export default Fatura;