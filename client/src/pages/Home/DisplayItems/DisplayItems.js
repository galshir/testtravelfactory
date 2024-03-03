import React from "react";
import * as S from './style';

const DisplayItems = ({
    translators, 
    downLoadXLSX,
    createNewTranslateApp,
    deploySave
}) => {
    return(
        <S.DisplayItemsContainer>
            {translators && (translators?.map((translator, index) => (
                <S.CardContainer onClick={() => onChangeEdittranslator(translator)}>
                    <S.TextConfiner>
                        <S.CardTitle><b>App:</b> {translator?.appName}</S.CardTitle>
                        <S.CardTitle><b>Last deployment:</b> {translator?.lastDeployment}</S.CardTitle>
                    </S.TextConfiner>
                    <S.ButtonsContainer>
                        <S.CardDeleteButton onClick={() => onDelete(downLoadXLSX)}>Download on xslx</S.CardDeleteButton>
                        <S.CardDeleteButton onClick={() => onDelete(deploySave)}>Deploy</S.CardDeleteButton>
                    </S.ButtonsContainer>
                </S.CardContainer>
            )))}
            <S.ButtonAddContainer>
                <S.AddButton>Add App</S.AddButton>
            </S.ButtonAddContainer>
        </S.DisplayItemsContainer>
    )
}

export default DisplayItems;