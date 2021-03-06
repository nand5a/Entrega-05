import React from 'react';
import { AiFillStar, AiFillShopping } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { Head, HeaderName, HeaderMenu, ItemsLink } from './styled';

export function Header() {
    const itensMenu = [
        {nome: "NOVIDADES", icone: <AiFillStar/>, path: "/"},
        {nome: "NOSSOS PRODUTOS", icone: <AiFillShopping/>, path: "/produtos"},
        {nome: "CARRINHO DE COMPRAS", icone: <FaShoppingCart/>, path: "/carrinho"},
    ];

    return (
        <Head>
            <HeaderName>Êta, bolo de rolo</HeaderName>
            <HeaderMenu>
                {
                    itensMenu.map((item, index) => {
                        return(
                            <li key={index}>
                                <ItemsLink to={item.path}>
                                    {item.icone}
                                    {item.nome}
                                </ItemsLink>
                            </li>
                        )
                    })
                }
            </HeaderMenu>
        </Head>
    )
}
