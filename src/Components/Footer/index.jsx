import React from 'react';
import { Foot, Info, Container } from './styles';

export function Footer() {

    return (
        <Foot>
            <Container>
                <Info>
                    <h1>SOBRE NÓS</h1>
                    <h2>NOSSA HISTÓRIA</h2>
                    <h2>FALE CONOSCO</h2>
                </Info>

                <Info>
                    <h1>REDES SOCIAIS</h1>
                    <h2>FACEBOOK</h2>
                    <h2>INSTAGRAM</h2>
                    <h2>TWITTER</h2>
                </Info>
            </Container>
        </Foot>
    )
}
