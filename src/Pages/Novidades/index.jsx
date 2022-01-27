import React from 'react';
import Header from "../../Components/Header"
import { Container } from './styles';
import flyer from '../../Assets/flyer.jpeg';

export default function Novidades() {

    return (
        <div>
            <Header/>
            <Container>
                <img class="foto" src={flyer} alt="imagem" height={400}/> 
            </Container>


        </div>
    );
}