import React from 'react';
import { Container } from './style';
import flyer from './assets/flyer.jpeg';

export default function Novidades() {

    return (
        <Container>
            <img class="foto" src={flyer} alt="imagem" height={400}/>  
        </Container>
    );
}
