import React from 'react';
import COLOR from '../../colors';

// import { Container } from './styles';

const Options: React.FC = () => {
    return (
        <div
            style={{
                width: '100%',
                backgroundColor: COLOR.Light,
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
                height: 48,
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            {/** OPTION LIST! */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    position: 'relative',
                    fontSize: 14
                }}
            >

                <div
                    style={{
                        color: COLOR.Primary,
                        fontWeight: 600,
                        cursor: 'pointer',
                        position: 'relative',
                    }}
                >
                    MEUS GRUPOS
                    <div
                        style={{
                            backgroundColor: COLOR.Primary,
                            height: 2,
                            position: 'absolute',
                            zIndex: 10,
                            bottom: -13,
                            width: '100%',
                            borderRadius: 100
                        }}
                    />
                </div>
                
                <div
                    style={{
                        color: COLOR.Dark,
                        fontWeight: 500,
                        cursor: 'pointer',
                        position: 'relative',
                        marginLeft: 32
                    }}
                >
                    ATIVIDADE
                    <div
                        style={{
                            backgroundColor: COLOR.Dark,
                            height: 0,
                            position: 'absolute',
                            zIndex: 10,
                            bottom: -13,
                            width: '100%',
                            borderRadius: 100
                        }}
                    />
                </div>

            </div>
        </div>
    );
}

export default Options;