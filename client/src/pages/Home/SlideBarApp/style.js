import styled from 'styled-components';

export const ProductEditContainer = styled.div`
    width: 50%;
`;

export const LabelInput = styled.label`
    font-size: 11px; 
    margin-top: 1%;
`

export const ProductEditCard = styled.div`
    width: 60%;
    border: solid 2px #555555;
    height: auto;
    margin-top: 3%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    border-radius: 3px;
`;

export const NameEdit = styled.input`
    width: 60%;
`

export const DescriptionEdit = styled.textarea`
    width: 60%;
    height: 90px;
`

export const PriceEdit = styled.input`
    width: 10%;
`

export const CardEditImg = styled.img`
    width: 70px;
    height: 70px;
    margin: 15px;
`;

export const EditProductDeleteButton = styled.button`
    background-color: #b6d7a8;
    font-size: 20px;
    color: black;
    margin-right: 2%;
    cursor :pointer;
    margin-top: 1%;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    align-self: flex-end;
`;
