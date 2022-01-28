import React from 'react';
import { Header } from "../../Components/Header";
import { Footer } from '../../Components/Footer';
import { Content, MarketList, AddButton, Title, Product, DetailsLink } from './styles';
import docedeleite from '../../Assets/docedeleite.jpg';
import goiabada from '../../Assets/goiabada.jpg';
import chocolate from '../../Assets/chocolate.jpg';                                 

export function Market(){

    const products = [
        {
            id:1,
            name: "Bolo de Rolo",
            flavor: "Doce de Leite",
            price: 10.00,
            image: docedeleite,
        },
        {
            id:2,
            name: "Bolo de Rolo",
            flavor: "Goiabada",
            price: 10.00,
            image: goiabada,
        },
        {
            id:3,
            name: "Bolo de Rolo",
            flavor: "Chocolate",
            price: 12.00,
            image: chocolate,
        }
    ]

    return (
        <div>
            <Header/>
            <Content>
                <Title>Nossos Produtos</Title>
                <MarketList>
                    {
                        products.map((product) => {
                            return(
                                <Product>
                                    <img src={product.image} alt={product.name} />
                                    <h2>{product.name}</h2>
                                    <h3>{product.flavor}</h3>
                                    <h3>{product.price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</h3>
                                    <DetailsLink to={'/detalhes-produto/${product.id}'} state={product}>Ver detalhes</DetailsLink>
                                    <AddButton>Adicionar ao Carrinho</AddButton>
                                </Product>
                            )
                        })
                    }
                </MarketList>
            </Content>
            <Footer/>
        </div>
    );
}
