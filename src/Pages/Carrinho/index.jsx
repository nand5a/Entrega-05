import React from 'react';
import Header from "../../Components/Header";
import { Content, CarrinhoContent, Title } from './styles';

export function Carrinho(){
    
    return (
        <div>
            <Header/>
            <Content>
                <Title>Carinho de Compras</Title>
                <CarrinhoContent>
                    
                </CarrinhoContent>
            </Content>
        </div>
    );
}
