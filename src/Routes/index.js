import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Market } from "../Pages/Market";
import Novidades from "../Pages/Novidades";
import { Carrinho } from "../Pages/Carrinho";
import { ProductDetail } from "../Pages/ProductDetail";

export function AppRoutes (){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Novidades/>} path="/"/> 
                <Route element={<Market/>} path="/produtos"/> 
                <Route element={<Carrinho/>} path="/carrinho"/>
                <Route element={<ProductDetail/>} path="/detalhes-produto/:id"/>
            </Routes>
        </BrowserRouter>
    )
}