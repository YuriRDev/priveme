import styled from 'styled-components'
import COLOR from '../../colors'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${COLOR.Background};   
`

export const InsideContainer = styled.div`
    padding-top: 56px;
    background-color: ${COLOR.Background}
`

export const BodyContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 48px;
    
    @media(max-width: 800px) {
        margin-top: 24px;
    }

`


export const GraphicContainer = styled.div`
    background-color: ${COLOR.Light};
    box-shadow: 0px 3px 4px 1px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    padding: 24px;
    width: 800px;
    @media(max-width: 800px) {
        width: 500px;
    }
    @media(max-width: 600px) {
        width: 350px;
    }


`

export const ChartContainer = styled.div`
    width: 500px;
    height: 300px;
    @media(max-width: 800px) {
        width: 450px;
    }
    @media(max-width: 600px) {
        width: 350px;
        height: 200px;
    }
`

export const GraphicData = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
`

export const FaturaContainer = styled.div`
    background-color: ${COLOR.Light};
    box-shadow: 0px 3px 4px 1px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    padding: 24px;
    width: 800px;
    margin-top: 48px;
    margin-bottom: 128px;

    @media(max-width: 800px) {
        width: 500px;
    }
    @media(max-width: 600px) {
        width: 350px;
    }
`

export const FaturaOpcoes = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 16px;
    border-bottom: solid 1px ${COLOR.Inactive};
    padding-bottom: 12px;
`

export const FaturasList = styled.div`
    width: 100%;
    display: flex;
    align-items: center
    justify-content: center;
    padding: 0px 24px;
    margin-top: 16px;
    padding-top: 16px;
    flex-direction: column;
    border-top: solid 1px #E2E2E2;

    @media(max-width: 800px) {
        padding: 0px;
        padding-top: 16px;
    }
`

export const Retirar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${COLOR.Primary};
    border-radius: 3px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 10px 31px;
    color: ${COLOR.Light};
    font-size: 16px;
    cursor: pointer;
    transition: .2s;
    margin-top: 16px;

    @media(max-width: 800px) {
        font-size: 14px;
    }

    &:hover{
        box-shadow: 0px 3px 4px 1px rgba(0, 0, 0, 0.36);
        }
    
        &:active{
            opacity: .8;
        }

`
