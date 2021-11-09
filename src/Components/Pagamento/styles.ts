import styled from 'styled-components'
import COLOR from '../../colors'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 16px;
`

export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${COLOR.Inactive};

    font-size: 14px;
    font-weight: 500
`