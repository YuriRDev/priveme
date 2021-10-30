import React, { useState } from 'react';
import COLOR from '../../colors';

// import { Container } from './styles';


interface InputInterface {
    height?: number;
    type?: string;
    placeholder?: string;
    fontsize?: number;
}

const Input: React.FC<InputInterface> = ({ children, height = 54, fontsize = 16, type = 'text', placeholder }) => {
    const [isFocused, setIsFocused] = useState(false)

    return (
        <div
            style={{
                width: '100%',
                height: height,
                backgroundColor: COLOR.Light,
                boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.1)',
                borderRadius: 3,
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                padding: '0px 8px',
                flexDirection: 'column'
            }}
        >
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    paddingBottom: 7,
                    paddingRight: 6,
                    paddingLeft: 6,
                    paddingTop: 12
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: '.5s',
                        color: isFocused ? COLOR.Primary : COLOR.Inactive,
                    }}
                >
                    {children}
                </div>
                <input
                    
                    type={type}
                    style={{
                        width: '100%',
                        border: 'none',
                        outline: 'none',
                        fontSize: fontsize,
                        marginLeft: 8,
                        color: COLOR.Inactive,
                        fontWeight: 300
                    }}
                    placeholder={placeholder}
                    onFocus={() => {
                        setIsFocused(true)
                    }}
                    onBlur={() => {
                        setIsFocused(false)
                    }}
                />
            </div>

            <div
                style={{
                    width: '100%',
                    borderBottom: `solid 1px ${isFocused ? COLOR.Primary : COLOR.Inactive}`,
                    opacity: isFocused ? 1 : .3,
                    transition: '.5s'
                }}
            />
        </div>
    );
}

export default Input;