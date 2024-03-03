import React, { useEffect, useState } from "react";
import * as S from './style'

const ProductEdit = ({productEdit, onEdit}) => {
    const [productEditing, setProductEditing] = useState({});
    
    
    useEffect(() => {
        productEditing && setProductEditing({...productEdit})
    }, [productEdit])

    const handleInputChange = (element) =>{
        const {value, name} = element.target;
        setProductEditing({...productEditing, [name]: value});
    }

    return(
        <S.ProductEditContainer>
            <S.ProductEditCard>
                <S.CardEditImg src={productEditing?.image} />
                 <S.LabelInput><i class="fa fa-user"></i>Name</S.LabelInput>
                 <S.NameEdit onChange={handleInputChange} name='name' value={productEditing?.name} />
                 <S.LabelInput><i class="fa fa-user"></i>Description</S.LabelInput>
                 <S.DescriptionEdit onChange={handleInputChange} name='description' value={productEditing?.description} />
                 <S.LabelInput><i class="fa fa-user"></i>Price</S.LabelInput>
                 <S.PriceEdit onChange={handleInputChange} name='price' value={productEditing?.price} />
                 <S.EditProductDeleteButton onClick={() => onEdit(productEditing)}>
                    Save
                 </S.EditProductDeleteButton>
            </S.ProductEditCard>
        </S.ProductEditContainer>
    )
}

export default ProductEdit;