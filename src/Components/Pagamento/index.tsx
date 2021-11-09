import React from 'react';
import COLOR from '../../colors';

import { BiUser } from 'react-icons/bi'

import { Container, Header } from './styles';

const Pagamento: React.FC = () => {
    return (
        <Container>
            {/** HEADER */}
            <Header>
                <text>R$ 250,00</text>
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
                    Cartão terminado em 4141
                </div>
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

export default Pagamento;