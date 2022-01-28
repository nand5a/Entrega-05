import React from 'react';
import { Header } from "../../Components/Header"
import { Footer } from '../../Components/Footer';
import { Container } from './styles';
import flyer1 from '../../Assets/flyer1.jpg';
import flyer2 from '../../Assets/flyer2.jpg';

export default function Novidades() {

    return (
        <div>
            <Header/>
            <Container>
                <img class="foto" src={flyer1} alt="imagem" height={400}/> 
                <img class="foto" src={flyer2} alt="imagem" height={400}/> 
                
            </Container>
            <Footer/>
        </div>
    );
}