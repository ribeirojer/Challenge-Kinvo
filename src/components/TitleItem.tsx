import { Info } from 'phosphor-react';
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    span {
        margin-right: 0.5rem;
        color: #4e5b61;
        font-size: 9px;
        //font-family: 'SegoeUI';
        letter-spacing: 0.05em;
    }
`;

type Props = {}

const TitleItem = (props: any) => {
  
    return (
        <Wrapper>
            <span>{ props.title }</span>
            <Info size={16} weight="light" />
        </Wrapper>
    )
}

export default TitleItem;