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