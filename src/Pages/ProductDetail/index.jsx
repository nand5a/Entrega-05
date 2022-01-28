import React from 'react';
import { useLocation, useParams, useNavigate } from "react-router-dom"
import { Header } from '../../Components/Header';
import { ReturnButton, Content } from './styles';

export function ProductDetail(){
    const location = useLocation()
    const navigate = useNavigate()
    const {id} = useParams()

    console.log(id)
    const product = location.state

    function handleNavigate(){
        navigate(-1)
    }

    return (
        <div>
            <Header/>
            <Content>
                <ReturnButton onClick={handleNavigate}>Voltar</ReturnButton>
                <h3>Detalhes do produto: {product.name} sabor: {product.flavor}.</h3>
            </Content>            
        </div>
    )
}