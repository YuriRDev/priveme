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
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 48px;
    
    @media(max-width: 800px) {
        margin-top: 24px;
    }

`

export const Body = styled.div`
    width: 100%;
    max-width: 800px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    @media(max-width: 800px) {
        width: 90%;
    }


`

export const CreateGroupContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const CreateGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${COLOR.Primary};
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 12px 20px;
    color: ${COLOR.Light};
    font-size: 16px;
    cursor: pointer;
    transition: .2s;

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

export const SearchGroup = styled.div`
    width: 100%;
    margin-top: 24px;
    z-index: 10;
`

export const GroupList = styled.div`
margin-top: 48px;
width: 90%;
    z-index: 10;

    @media(max-width: 800px) {
    margin-top: 32px;
    width: 100%;
    }
    `

export const ModalOut = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1000;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Modal = styled.div`
    padding: 24px;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: ${COLOR.Light};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 405px;
`

export const ModalTitle = styled.text`
    color: ${COLOR.Inactive};
    font-size: 16px;
    text-align: left;
    width: 100%;
    margin-bottom: 16px;
`

export const CaracteresRestantes = styled.div`
    text-align: left;
    width: 100%;
    color: ${COLOR.Inactive};
    font-size: 14px;
    margin-top: 8px;
    margin-bottom: 24px;
`

export const BodyBottom = styled.div`
    margin-top: 16px;
    width: 100%;
    margin-bottom: 24px;
    border-top: solid 1px rgb(214,214,214);
    padding-top: 8px;
    border-bottom: solid 1px rgb(214,214,214);
    padding-bottom: 16px;
`

export const CobrancaText = styled.text`
    color: ${COLOR.Inactive};
    font-size: 14px;
    text-align: left;
    width: 100%;
    font-weight: 400;
`

export const CobrancaContainer = styled.div`
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 16px;
`

export const BottomTop = styled.div`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 16px;
        color: ${COLOR.Inactive}
`

export const ImgBottom = styled.img`
    height: 90px;
    width: 90px;
`

export const Bottom = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
    margin-top: 24px;   
    font-size: 16px;
`

export const Cancelar = styled.div`
    margin-right: 24px;
    color: ${COLOR.Primary};
    text-decoration: underline;
    font-size: 14px;
    cursor: pointer;
    font-weight: 500;
`

export const Criar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 32px;
    background-color: ${COLOR.Primary};
    color: ${COLOR.Light};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    cursor: pointer;
    `

export const GraphicImg = styled.img`
    height: 500px;
    width: 500px;
    opacity: .3;
    position: absolute;
    top: 64px;
    left: 200px;
    z-index: 0;
    transition: .2s;

    @media(max-width: 800px) {
        height: 240px;
        width: 240px;
        left: 20px;
        top: 100px;
    }
`

export const FolderImg = styled.img`
    height: 400px;
    width: 400px;
    opacity: .3;
    position: absolute;
    bottom: 0px;
    transition: .2s;
    right: 100px;

    @media(max-width: 800px) {
        height: 200px;
        width: 200px;
        right: 20px;
    }
`