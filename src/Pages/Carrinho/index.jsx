import React from 'react';
import { Header } from "../../Components/Header";
import { Footer } from '../../Components/Footer';
import { Content, CarrinhoContent, Title } from './styles';
import carrinho from '../../Assets/carrinho.jpg';

export function Carrinho(){
    
    return (
        <div>
            <Header/>
            <Content>
                <Title>Carinho de Compras</Title>
                <CarrinhoContent>
                    <img class="foto" src={carrinho} alt="imagem" height={556}/> 
                </CarrinhoContent>
            </Content>
            <Footer/>
        </div>
    );
}
