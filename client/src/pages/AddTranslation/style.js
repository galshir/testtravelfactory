import styled from 'styled-components';

export const AddTranslationContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    align-items: center;
`;

export const AddTranslationCard = styled.div`
    display: flex;
    height: 120px;
    width: 15%;
    align-items: center;
    flex-direction: column;
    margin-top: 2%;
    justify-content: space-evenly;
    padding: 10px;
`;

export const LabelInput = styled.label`
    font-size: 15px; 
    margin-top: 1%;
`;

export const FieldInput = styled.input`
    width: 60%;
`

export const EditProductDeleteButton = styled.button`
    background-color: #b6d7a8;
    font-size: 20px;
    color: black;
    cursor :pointer;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    margin: auto;
`;
