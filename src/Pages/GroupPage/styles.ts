import styled from 'styled-components'
import COLOR from '../../colors'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${COLOR.Background};   
    overflow-x: hidden;
`

export const InsideContainer = styled.div`
    padding-top: 56px;
    background-color: ${COLOR.Background};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`


export const GroupName = styled.div`
    width: 100%;
    height: 60px;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: ${COLOR.Primary};

`

export const TextsContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
`

export const InfoLine = styled.div`
    visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    color: ${COLOR.Inactive};
    font-weight: 300;

    @media(max-width: 1000px) {
    visibility: visible;
    width: 100%;
    margin-bottom: 16px;
    }


`

export const GroupVoltar = styled.div`
    color: ${COLOR.Light};
    display: flex;
    align-items: center;
    z-index: 10;
    text-decoration: underline;
    margin-left: 16px;

    &:hover{
        opacity: .9;
    }
    
        &:active{
            opacity: .8;
        }


    @media(max-width: 1000px) {
        margin-left: 2px;
        font-size: 14px;
    }

`

export const GroupVoltarHidden = styled.div`
    color: ${COLOR.Light};
    display: flex;
    align-items: center;
    z-index: 10;
    text-decoration: underline;
    margin-left: 16px;
    visibility: hidden;

    @media(max-width: 1000px) {
        height: 0px;
        width: 0px;
        margin-left: 2px;
    }

`

export const Group = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    font-size: 18px;
    color: ${COLOR.Light};
    font-weight: 500;

    @media(max-width: 1000px) {
        font-size: 16px;
        text-align: right;
        width: 100%;
    }
`

export const ImgGroup = styled.img`
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 1;
    opacity: .6;
    object-fit: cover;
`

export const PageWidth = styled.div`
    width: 100%;
    max-width: 1440px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;


`

export const AllContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 80px;
    padding: 0px 80px;
    flex-direction: row;

    @media(max-width: 1000px) {
        flex-direction: column-reverse;
        align-items: center;
    margin-top: 48px;
    justify-content: center;
    }
    @media(max-width: 1000px) {
        padding: 0px 16px;
    }

`

export const GroupVerified = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-right: 160px;
    transition: .2s;

    @media(max-width: 1200px) {
        margin-right: 64px;
    }
    @media(max-width: 1000px) {
    width: 90%;
    margin-right: 0px;
        margin-bottom: 128px;
}
`


export const AddUserButton = styled.div`
    color: ${COLOR.Light};
    background-color: ${COLOR.Primary};
    padding: 12px 20px;
    border-radius: 3px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 14px;
    transition: .2s;

    &:hover {
        box-shadow: 0px 4px 4px rgba(0, 0, 1, 0.3);
        opacity: .9;
    }

    &:active {
        opacity: .8;
    }
`

export const UserSearch = styled.div`
    width: 90%;
    margin-top: 32px;
    @media(max-width: 1000px) {
        width: 100%;
    }

`

export const UserList = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const UserCount = styled.text`
    margin-top: 18px;
    margin-bottom: 12px;
    color: ${COLOR.Inactive};
`

export const GroupNotVerified = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.1);
    width: 100%;
    margin-right: 160px;
    background-color: ${COLOR.Light};
    padding: 24px;

    @media(max-width: 1000px) {
        margin-right: 0px;
        margin-bottom: 128px;

    }
`

export const NotVerifiedHeader = styled.div`
    color: ${COLOR.Inactive};
    boder-bottom: solid 1px rgba(0, 0, 0, 0.1);
    width: 100%;
`

export const NotVerifiedBody = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 16px;
    font-size: 14px;
    color: ${COLOR.Inactive};
`
export const NotVerifiedImg = styled.img`
    height: 100px;
    width: 100px;
    margin-right: 16px;
`

export const NotVerifiedBottom = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 28px;
`

export const ErrorMsgVerified = styled.text`
    color: ${COLOR.Orange};
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 12px;
`

export const VerificarButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${COLOR.Primary};
    padding: 12px 24px;
    border-radius: 3px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 14px;
    color: ${COLOR.Light};
    cursor: pointer;
`

export const RightContainer = styled.div`
@media(max-width: 1000px) {
    margin-bottom: 32px;
}
`

export const UltimasAtividades = styled.div`
    width: 450px;
    background-color: ${COLOR.Light};
    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 24px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: 32px;

    @media(max-width: 1000px) {
        width: 100%;
    }
`

export const AtividadesHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
export const AtividadesImg = styled.img`
    height: 77px;
    width: 47px;
`

export const AtividadesListText = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-left: 16px;
`

export const AtividadeDescription = styled.text`
    font-size: 14px;
    color: ${COLOR.Inactive};
    font-weight: 500;
    margin-top: 4px;
`

export const AtividadeList = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 16px;
`

export const BotContainer = styled.div`
    background-color: ${COLOR.Light};
    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 24px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: 64px;
`

export const BotHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`

export const BotImg = styled.img`
    height: 90px;
    width: 90px;
`

export const BotTexts = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-left: 16px;
`

export const BotStatusTitle = styled.text`
    font-size: 14px;
    font-weight: 500;
`

export const BotStatusText = styled.text`
    font-size: 14px;
    color: #26BF00;
    font-weight: 500;
    margin-bottom: 12px;
`

export const DeleteGroupContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
`

export const Line = styled.div`
    height: 1px;
    width: 100%;
    background-color: ${COLOR.Inactive};
    margin-top: 24px;
    opacity: .6;
`

export const DeleteGroup = styled.div`
    border: solid 2px ${COLOR.Error};
    padding: 8px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: ${COLOR.Error};
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
`

export const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1000;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    `

export const AddUserModal = styled.div`
    padding: 24px;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: ${COLOR.Light};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 405px;
    padding-bottom: 32px;
`

export const AddUserText = styled.text`
    color: ${COLOR.Inactive};
    font-size: 16px;
    margin-bottom: 18px;
    text-align: left;
    width: 100%;
`

export const AddUserBody = styled.div`
    border-top: solid 1px  rgba(0, 0, 0, 0.2);
    border-bottom: solid 1px  rgba(0, 0, 0, 0.2);
    padding-top: 18px;
    padding-bottom: 18px;
    margin-top: 24px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 14px;
    color: ${COLOR.Inactive};
    `

export const AddUserImg = styled.img`
    height: 80px;
    width: 60px;
    margin-right: 12px;
`

export const AddUserBottom = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
    margin-top: 32px;
    font-size: 14px;
`

export const AddUserCancelar = styled.div`
    margin-right: 24px;
    color: ${COLOR.Primary};
    text-decoration: underline;
    font-size: 14px;
    cursor: pointer;
    font-weight: 500;
`

export const AddUserConfirm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    background-color: ${COLOR.Primary};
    color: ${COLOR.Light};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    cursor: pointer;
    transition: .2s;

    &:hover {
        box-shadow: 0px 4px 4px rgba(0, 0, 1, 0.3);
        opacity: .9;
    }

    &:active {
        opacity: .8;
    }

    ${props => props.theme.disabled && (
        `
        background-color: ${COLOR.Inactive};

        &:hover {
            opacity: 1;
        }
    
        &:active {
            opacity: 1;
        }    
        cursor: default;
        `
    )}

`

export const DeleteGroupModal = styled.div`
    padding: 24px;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: ${COLOR.Light};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 405px;
    padding-bottom: 32px;

`

export const DeleteGroupHeader = styled.text`
    color: ${COLOR.Inactive};
    font-size: 16px;
    text-align: left;
    width: 100%;
`

export const DeleteGroupBody = styled.div`
    border-top: solid 1px  rgba(0, 0, 0, 0.2);
    border-bottom: solid 1px  rgba(0, 0, 0, 0.2);
    padding-top: 12px;
    padding-bottom: 12px;
    margin-top: 24px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 14px;
    color: ${COLOR.Inactive};
`

export const DeleteGroupImg = styled.img`
    height: 80px;
    width: 80px;
`

export const DeleteGroupMessage = styled.text`
    width: 100%;
    color: ${COLOR.Inactive};
    text-align: left;
    margin-top: 24px;
`

export const DeleteGroupBottom = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
    margin-top: 24px;
    font-size: 14px;
`

export const DeleteButton = styled.div`
    margin-right: 24px;
    color: ${COLOR.Primary};
    text-decoration: underline;
    font-size: 14px;
    cursor: pointer;
    font-weight: 500;
`

export const CancelDelete = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 36px;
    background-color: ${COLOR.Primary};
    color: ${COLOR.Light};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    cursor: pointer;
`