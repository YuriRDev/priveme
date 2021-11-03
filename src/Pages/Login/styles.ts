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

export const ComContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 284px;
    margin-top: 18px;
`

export const Line = styled.div`
    border-bottom: solid 1px ${COLOR.Inactive};
    width: 100%;
`

export const LineText = styled.text`
    font-size: 14px;
    color: ${COLOR.Inactive}
`

export const SocialDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 18px;
`

export const SocialContainer = styled.div`
    height: 48px;
    width: 48px;
    background-color: ${COLOR.Light};
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    margin-right: 24px;
    transition: .2s;

    &:hover{
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.18);
        }
    
`

export const OuEmail = styled.text`
    font-size: 14px;
    color: ${COLOR.Inactive};
    margin: 0px 12px;
    width: 200px;
    text-align: center;
`

export const EmailInputs = styled.div`
    width: 100%;
    margin-top: 24px;
`


export const BottomDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
    flex-direction: column;
`

export const BottomDivTop = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Registrar = styled.div`
    color: ${COLOR.Primary};
    border: solid 1px ${COLOR.Primary};
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    padding: 10px 22px;
    border-radius: 4px;

    &:hover{
        opacity: .9;
    }
    
    &:active{
        opacity: .8;
    }

`

export const Entrar = styled.div`
    color: ${COLOR.Light};
    font-size: 16px;
    font-weight: 400;
    padding: 10px 34px;
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    transition: .2s;
    background-color: ${COLOR.Primary};
    cursor: pointer;

    &:hover{
        opacity: .9;
    }
    
    &:active{
        opacity: .8;
    }
`

export const EsqueciSenha = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: ${COLOR.Primary};
    font-size: 15px;
    text-align: right;
    margin-top: 12px;

    &:hover{
        opacity: .9;
    }
    
    &:active{
        opacity: .8;
    }
`