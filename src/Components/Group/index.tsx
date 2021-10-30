import React, { useRef } from 'react';
import COLOR from '../../colors';


import { SiTelegram, SiWhatsapp } from 'react-icons/si'
import { BiGroup } from 'react-icons/bi'

import { Container, LeftSize, RightSize } from './styles';

import { Link } from 'react-router-dom';

interface Group {
    name: string;
    app: number;
    people: number;
    toUrl: any;
}

const Group: React.FC<Group> = ({ name, app, people, toUrl }) => {

    return (
        <Link
            to={`/group/${toUrl}`}
            style={{
                textDecoration: 'none',
                color: COLOR.Dark
            }}
        >
            <Container>
                <LeftSize
                >
                    {app === 1 && (
                        <SiTelegram size={24} color={'#299CD1'} style={{
                            marginRight: 8,
                        }} />
                    )}
                    {app === 2 && (
                        <SiWhatsapp size={24} color={'#26D367'} style={{
                            marginRight: 8,
                        }} />
                    )}

                    {name}
                </LeftSize>
                <RightSize>
                    <BiGroup
                        color={COLOR.Primary}
                        size={22}
                        style={{
                            marginRight: 8
                        }}
                    />
                    {people}
                </RightSize>
            </Container>
        </Link>

    );
}

export default Group;