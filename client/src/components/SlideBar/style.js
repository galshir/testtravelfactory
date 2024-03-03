import styled from 'styled-components';

export const SlideBarContainer = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    gap: 4%;
    align-items: center;
`;

export const SlidBarTitle = styled.h2``

export const SlidBarButtons = styled.a`
    width: 100px;
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	outline: inherit;
    cursor: pointer;
    color: ${props => props.selected ? "blue" : "none"}
`