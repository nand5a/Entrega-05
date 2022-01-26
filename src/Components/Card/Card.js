import React from 'react';
import { CardContent } from './style.js';

export default function Card({data}){
    return (
        <CardContent>
            <strong>Nome: {data.nome} </strong>
            <strong>Sabor: {data.sabor} </strong>
            <strong>Preço: R$ {data.preço} </strong>
        </CardContent>
        );
}
