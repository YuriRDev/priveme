import styled from 'styled-components'
import COLOR from '../../colors'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${COLOR.Primary};   
`

export const InsideContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 56px;



`

export const Modal = styled.div`
    margin-top: 100px;
    background-color: ${COLOR.Light};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 32px 48px;
    flex-direction: column;
    
    @media(max-width: 800px) {
        margin-top: 64px;
        padding: 24px 32px;
    }

`

export const Title = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${COLOR.Inactive};
`

export const MailInput = styled.div`
    width: 284px;
    margin-top: 24px;
`

export const Messages = styled.div`
    width: 284px;
    color: ${COLOR.Orange};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 14px;
    margin-top: 16px;
`

export const Bottom = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 18px;
`

export const Voltar = styled.div`
    color: ${COLOR.Primary};
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    text-decoration: underline;
`

export const Recuperar = styled.div`
    color: ${COLOR.Light};
    font-size: 16px;
    font-weight: 400;
    padding: 10px 28px;
    border-radius: 4px;
    cursor: pointer;
    background-color: ${COLOR.Primary};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    transition: .2s;
`