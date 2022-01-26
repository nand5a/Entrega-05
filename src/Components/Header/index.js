import React from 'react';
import { AiFillStar, AiFillShopping } from "react-icons/ai"
import { FaShoppingCart } from "react-icons/fa"
import { Head, HeaderName, HeaderMenu, MenuItem } from './styled';

export default function Header() {
    const itensMenu = [
        {nome: "NOVIDADES", icone: <AiFillStar/>},
        {nome: "NOSSOS PRODUTOS", icone: <AiFillShopping/>},
        {nome: "CARRINHO DE COMPRAS", icone: <FaShoppingCart/>},
    ];

    const renderList = itensMenu.map((item, index) =>(
        <MenuItem key={index}>
            {item.icone}
            {item.nome}        
        </MenuItem>

    ));

    return (
        <Head>
            <HeaderName>Êta, bolo de rolo</HeaderName>
            <HeaderMenu>{renderList}</HeaderMenu>
        </Head>
    )
}