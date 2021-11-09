import React from 'react';
import { Link } from 'react-router-dom';
import COLOR from '../../colors';

// import { Container } from './styles';

interface OptionInterface {
    selected?: number;
}

const Options: React.FC<OptionInterface> = ({ selected = 0 }) => {
    return (
        <div
            style={{
                width: '100%',
                backgroundColor: COLOR.Light,
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
                height: 48,
                display: 'flex',
                justifyContent: 'center',
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
                    fontSize: 14,
                    zIndex: 10
                }}
            >
                <Link to={'/'} style={{
                    textDecoration: 'none'
                }}>

                    <div
                        style={{
                            color: selected == 0 ? COLOR.Primary : COLOR.Dark,
                            fontWeight: selected == 0 ? 600 : 500,
                            cursor: 'pointer',
                            position: 'relative',
                        }}
                    >
                        MEUS GRUPOS
                        <div
                            style={{
                                backgroundColor: COLOR.Primary,
                                height: selected == 0 ? 2 : 0,
                                position: 'absolute',
                                zIndex: 10,
                                bottom: -13,
                                width: '100%',
                                borderRadius: 100
                            }}
                        />
                    </div>

                </Link>
                <Link to={'/atividade'} style={{
                    textDecoration: 'none'
                }}>
                    <div
                        style={{
                            color: selected == 1 ? COLOR.Primary : COLOR.Dark,
                            fontWeight: selected == 1 ? 600 : 500,
                            cursor: 'pointer',
                            position: 'relative',
                            marginLeft: 32,
                            marginRight: 32
                        }}
                    >
                        ATIVIDADE
                        <div
                            style={{
                                backgroundColor: COLOR.Primary,
                                height: selected == 1 ? 2 : 0,
                                position: 'absolute',
                                zIndex: 10,
                                bottom: -13,
                                width: '100%',
                                borderRadius: 100
                            }}
                        />
                    </div>
                </Link>

                <Link to={'/withdrawn'} style={{
                    textDecoration: 'none'
                }}>

                    <div
                        style={{
                            color: selected == 2 ? COLOR.Primary : COLOR.Dark,
                            fontWeight: selected == 2 ? 600 : 500,
                            cursor: 'pointer',
                            position: 'relative',
                        }}
                    >
                        PAGAMENTO
                        <div
                            style={{
                                backgroundColor: COLOR.Primary,
                                height: selected == 2 ? 2 : 0,
                                position: 'absolute',
                                zIndex: 10,
                                bottom: -13,
                                width: '100%',
                                borderRadius: 100
                            }}
                        />
                    </div>

                </Link>

            </div>
        </div>
    );
}

export default Options;