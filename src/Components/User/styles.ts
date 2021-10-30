import styled from 'styled-components'
import COLOR from '../../colors'

export const Container = styled.div`
    width: 100%;
    background-color: ${COLOR.Light};
    padding: 0px 24px;
    box-shadow: 0px 3px 4px 1px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-bottom: 12px;
    
    @media(max-width: 1000px) {
        padding: 0px 12px;
    }

`

export const Header = styled.div`
    width: 100%;
    padding-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Status = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLOR.Inactive};
    font-size: 14px;
    
    @media(max-width: 1000px) {
        font-size: 12px;
    }
`

export const StatusCircle = styled.div`
    height: 8px;
    width: 8px;
    border-radius: 100px;
    margin-right: 4px;
`

export const StatusText = styled.text`
    color: ${COLOR.Inactive};
    font-size: 14px;
    
    @media(max-width: 1000px) {
        font-size: 12px;
    }
`

export const NumberDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
    padding-bottom: 12px;
    font-size: 16px;
    
    @media(max-width: 1000px) {
        font-size: 14px;
    }
`