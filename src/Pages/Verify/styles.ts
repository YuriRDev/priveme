import styled from 'styled-components'
import COLOR from '../../colors'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${COLOR.Background};   
`

export const InsideContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 56px;
    
`

export const QuaseLaContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 32px;
    max=width: 480px;
    @media(max-width: 1000px) {
        padding: 0px 24px;
    }
    
`

export const InputContainer = styled.div`
    max-width: 480px;
    margin-top: 32px;
    @media(max-width: 1000px) {
        padding: 0px 24px;
    }
`