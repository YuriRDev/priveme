import React from 'react';
import COLOR from '../../colors';

// import { Container } from './styles';

interface Activity {
    minutes: number;
    phone: string;
    message: string;
}

const Activity: React.FC<Activity> = ({ minutes, phone, message }) => {
    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                paddingBottom: 8,
                flexDirection: 'column',
                borderBottom: `solid 1px rgba(0, 0, 0, 0.15)`,
                marginBottom: 16
            }}
        >
            <text
                style={{
                    fontSize: 14,
                }}
            >{minutes} Minutos atras</text>
            <text
                style={{
                    fontSize: 14,
                    color: COLOR.Inactive
                }}
            >{phone} - {message}</text>

        </div>
    );
}

export default Activity;