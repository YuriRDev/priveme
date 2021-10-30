import styled from 'styled-components'
import COLOR from '../../colors'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: ${COLOR.Light};
    padding: 12px 24px;
    box-shadow: 0px 3px 4px 1px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    margin-bottom: 16px;
    border-radius: 3px;
    transition: .2s;

    @media(max-width: 800px) {
        padding: 12px 16px;
    }

    &:hover{
    border-radius: 5px;
    box-shadow: 0px 3px 4px 1px rgba(0, 0, 0, 0.2);
    }

    &:active{
        opacity: .8;
    }

`

export const LeftSize = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media(max-width: 800px) {
        font-size: 14px;
    }
`

export const RightSize = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLOR.Primary};
    @media(max-width: 800px) {
        font-size: 14px;
    }
`