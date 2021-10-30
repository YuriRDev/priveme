import React from 'react';
import COLOR from '../../colors';


import { BiUser, BiUserMinus } from 'react-icons/bi'

import { Container, Header, Status, StatusCircle, StatusText, NumberDiv} from './styles';

interface UserInterface {
    status: number;
    number: string;
    daysToRenew?: number;
}

{/** 
    status 0 = Ativo
    status 1 = Aguardando
    status 2 = Cancelado 
*/}

const User: React.FC<UserInterface> = ({ status, number, daysToRenew }) => {
    return (
        <Container>
            {/** PARTE DE CIMA */}
            <Header>
                {/** STATUS */}
                <Status>
                    <StatusCircle
                        style={{
                            backgroundColor: status == 0 ? '#26BF00' : status == 1 ? COLOR.Orange : COLOR.Error,
                        }}
                    />
                    {status == 0 ? 'Ativo' : status == 1 ? 'Aguardando' : 'Removido'}
                </Status>

                <StatusText
                >{status == 0 ? `${daysToRenew} dias para renovação` : status == 2 ? `${daysToRenew} dias restantes` : 'Aguardando pagamento'}</StatusText>

            </Header>

            {/** PARTE DE BAIXO */}

            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    color: COLOR.Inactive
                }}
            >
                <NumberDiv>
                    <BiUser
                        size={22}
                        style={{
                            marginRight: 8
                        }}
                    />
                    {number}
                </NumberDiv>
                {status == 1 || status == 0 && (
                    <div
                        style={{
                            backgroundColor: COLOR.Error,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: COLOR.Light,
                            height: 28,
                            width: 28,
                            boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.1)',
                            borderRadius: 5,
                            cursor: 'pointer'
                        }}
                    >
                        <BiUserMinus size={20} />
                    </div>

                )}


            </div>


        </Container>
    );
}

export default User;