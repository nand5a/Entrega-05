import React from 'react';
import { CardContainer, CardContent } from './style.js';

export default function Card({data}){
    return (
        <CardContainer>
            <CardContent>
                <strong>Nome</strong>: {data.nome}
                <strong>Sabor</strong>: {data.sabor}
                <strong>Preço</strong>: {data.preço}
            </CardContent>
      </CardContainer>
        );
}