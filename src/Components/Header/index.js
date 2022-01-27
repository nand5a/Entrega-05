import React from 'react';
import { Link } from "react-router-dom";
import { AiFillStar, AiFillShopping } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { Head, HeaderName, HeaderMenu, MenuItem } from './styled';

export default function Header() {
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
                                <Link to={item.path}>
                                    {item.icone}
                                    {item.nome}
                                </Link>
                            </li>
                        )
                    })
                }
            </HeaderMenu>
        </Head>
    )
}
