import React from "react";
import * as S from "./style";

const Header = ({
    title
}) => {
    return (
        <>
            <S.HeaderContainer>
                <S.TitleContainer>
                    {title}
                </S.TitleContainer>
            </S.HeaderContainer>
        </>
    )
}

export default Header;