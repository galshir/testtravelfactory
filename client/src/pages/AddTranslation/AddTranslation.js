import React, { useCallback, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import SlideBar from "../../components/SlideBar";
import * as S from './style';

const AddTranslation = () => {
    const { appTranslator } = useParams();
    const [keyEditing, setKeyEditing] = useState({});
    
    const addNewKeyWordToTranslate = useCallback(() => {
        
    }, []);

    const handleInputChange = (element) =>{
        const {value, name} = element.target;
        setKeyEditing({...keyEditing, [name]: value});
    }

    return (
        <>  
            <SlideBar appTranslator={appTranslator}/> 
            <S.AddTranslationContainer>
                <S.AddTranslationCard>
                    <S.LabelInput><i class="fa fa-language"></i> Key</S.LabelInput>
                    <S.FieldInput onChange={handleInputChange} name='key' value={keyEditing?.name} />
                </S.AddTranslationCard>
                <S.AddTranslationCard>
                    <S.LabelInput><i class="fa fa-language"></i> English</S.LabelInput>
                    <S.FieldInput onChange={handleInputChange} name='english' value={keyEditing?.name} />
                </S.AddTranslationCard>
                <S.AddTranslationCard>
                    <S.LabelInput><i class="fa fa-language"></i> French</S.LabelInput>
                    <S.FieldInput onChange={handleInputChange} name='french' value={keyEditing?.name} />
                </S.AddTranslationCard>
                <S.AddTranslationCard>
                    <S.LabelInput><i class="fa fa-language"></i> Dutch</S.LabelInput>
                    <S.FieldInput onChange={handleInputChange} name='dutch' value={keyEditing?.name} />
                </S.AddTranslationCard>
                <S.AddTranslationCard>
                   <S.EditProductDeleteButton onClick={() => addNewKeyWordToTranslate()}>
                    Add
                    </S.EditProductDeleteButton> 
                </S.AddTranslationCard>              
            </S.AddTranslationContainer>
        </>
    )
}

export default React.memo(AddTranslation);