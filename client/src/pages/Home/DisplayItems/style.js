import styled from 'styled-components';

export const DisplayItemsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
`;

export const CardContainer = styled.div`
    display: flex;
    height: 200px;
    width: 400px;
    align-items: center;
    border: solid 2px #555555;
    flex-direction: column;
    margin-top: 2%;
    justify-content: space-evenly;
    border-radius: 10px;
    padding: 25px;
`;

export const CardImg = styled.img`
    width: 70px;
    height: 70px;
    margin: 15px;
`;

export const TextConfiner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`

export const CardTitle = styled.div`
    font-size: 16px;
`

export const CardDescription = styled.div`
    font-size: 15px;
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30%;
    justify-content: center;
`

export const CardDeleteButton = styled.button`
    background-color: #ff9900;
    color: white;
    margin-right: 2%;
    cursor :pointer;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    font-size: 15px;
`;

export const AddButton = styled.button`
    background-color: #ff9900;
    font-size: 25px;
    color: white;
    cursor :pointer;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
`;

export const ButtonAddContainer = styled.div`
    display: flex;
    height: 200px;
    width: 400px;
    align-items: center;
    flex-direction: column;
    margin-top: 2%;
    justify-content: space-evenly;
    padding: 25px;
`

