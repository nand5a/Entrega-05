import React, { useState} from 'react';
import Card from '../../Components/Card/Card';
import { Container, ContainerContent, ContainerName, MarketList, Input, ResetButton, AddButton, MarketContent, Title, CardList } from './style';

export default function Market() {
    const[name, setName] = useState("");
    const[flavor, setFlavor] = useState("");
    const[price, setPrice] = useState("");

    const handleAddCard=()=>{
        const newItem={id:1, nome:name, sabor:flavor, preço:price}
        const newList=list.concat(newItem)
        setList(newList) 
    }

    const oldList=[{
        nome: "Bolo de Rolo",
        sabor: "Doce de Leite",
        preço: 10.00,
    }
    ];

    const[list, setList]=useState(oldList)

    const renderList = list.map((item,index)=>(
        <li key={index}>
        <Card  data={item}/>
        </li>
        ));

    return (
        <Container>
            <ContainerName>Adicionar Produto</ContainerName>
            <ContainerContent>
                <MarketList>
                    <Input
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => setName(e.currentTarget.value)}
                    />
                    <Input
                        placeholder="Sabor"
                        value={flavor}
                        onChange={(e) => setFlavor(e.currentTarget.valuevent)}
                    />
                    <Input
                        placeholder="Preço"
                        value={price}
                        onChange={(e) => setPrice(e.currentTarget.value)}
                    />
                    <AddButton onClick={handleAddCard}>Adicionar Produto</AddButton>
                    <ResetButton>Reset</ResetButton>
                </MarketList>
                
                <MarketContent>
                    <Title>Nossos Produtos</Title>
                    <CardList>{renderList}</CardList>
                </MarketContent>
            </ContainerContent>

        </Container>

    );
}