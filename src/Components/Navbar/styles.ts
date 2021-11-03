import styled from 'styled-components'
import COLOR from '../../colors'

export const Container = styled.div`
    background-color: ${COLOR.Primary};
    height: 56px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 48px;
    position: fixed;
    border-bottom: solid 1px ${COLOR.Light};
    z-index: 100;

    @media(max-width: 800px) {
    padding: 0px 24px;
    height: 48px;
      }
`

export const LogoText = styled.text`
    color: ${COLOR.Light};
    font-size: 28px;
    font-weight: 700;

    @media(max-width: 800px) {
        font-size: 24px;
    }
`

export const NotLoggedContainer = styled.div`
    font-size: 16px;
    color: ${COLOR.Primary};
    background-color: ${COLOR.Light};
    padding: 8px 26px;
    font-weight: 600;
    border-radius: 3px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
`

export const LoggedContainer = styled.div`
    height: 38px;
    width: 38px;
    background-color: ${COLOR.PrimaryMinusTwo};
    color: ${COLOR.Primary};
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    cursor: pointer;
    z-index: 2;

    @media(max-width: 800px) {
        height: 36px;
        width: 36px;
          }
`
export const MenuContainer = styled.div`
    height: 460px;
    width: 280px;
    position: absolute;
    background-color: ${COLOR.Light};
    top: 54px;
    right: 48px;
    border-radius: 5px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    transition: .2s;

    @media(max-width: 800px) {
        height: 100vh;
        top: 0px;
        right: 0px;
        width: 245px;   
    }
`

export const MenuHeader = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
`

export const MenuHeaderTop = styled.div`
    width: 100%;
    background-color: ${COLOR.Background};
    padding: 24px 0px 0px 0px;
    border-radius: 5px 5px 0px 0px;
`

export const NameContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 16px;
    font-weight: 700;
    color: ${COLOR.Primary};
    margin-bottom: 10px;
    padding: 0px 18px;
    
    @media(max-width: 800px) {
        margin-bottom: 32px;
    }

`

export const UserIcon = styled.div`
    background-color: ${COLOR.Primary};
    height: 32px;
    width: 32px;
    font-size: 16px;
    font-weight: 500;
    color: ${COLOR.Light};
    display: flex;
    opacity: .6;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    margin-right: 12px;
    
`


export const MenuHeaderList = styled.div`
    width: 100%;
    backgroud-color: ${COLOR.Light};
    padding: 18px 0px;
`

export const MenuAjuda = styled.div`
    margin-top: 0px;
    color: ${COLOR.Primary};
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 14px;
    padding: 6px 16px;
    transition: .2s;
    cursor: pointer;

    &:hover{
        background-color: rgba(0, 0, 0, 0.1);
    }

 `

export const MenuHeaderLine = styled.div`
    border: solid 1px ${COLOR.PrimaryMinusTwo};
    width: 100%;
    margin-top: 16px;
    border-radius: 100px;
    opacity: .3;
 `

export const SairConta = styled.div`
    margin-top: 16px;
    color: ${COLOR.Primary};
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 4px 16px;
    font-size: 14px;
 `

export const HeaderOption = styled.div`
    margin-top: 18px;
    color: ${COLOR.Primary};
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 6px 16px;
    transition: .2s;
    cursor: pointer;

    &:hover{
        background-color: rgba(0, 0, 0, 0.1);
    }



 `

export const MenuBottom = styled.div`
    padding: 24px 16px;
    width: 100%;
 
    @media(max-width: 800px) {
        margin-bottom: 120px;
    }
    `

export const LanguageOption = styled.div`
    margin-top: 16px;
    color: ${COLOR.Primary};
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 14px;
 `

