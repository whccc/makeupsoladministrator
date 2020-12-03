import React from 'react'
import {Container,Button} from './styles'
import {FaEdit,FaTrashAlt} from 'react-icons/fa'
const JsonButton=[
    {
        Name:"Modificar",
        Icon:<FaEdit/>,
        Background:"#3578E5"
    },
    {
        Name:"Eliminar",
        Icon:<FaTrashAlt/>,
        Background:"tomato"
    }
]

const Buttons=({
    Name,
    Icon,
    Background
})=>{
    return <Button Background={Background}>{Icon}</Button>
}

export const Products=({
    Id,
    Title,
    Description,
    Price,
    Img
})=>{
    return(
        <Container>
            <div>
                <img src={Img}/>
            </div>
            <div>
                <p>{Title}</p>
                <p>{Description}</p>
                <p>$ {Price}</p>
                <div>
                     {
                         JsonButton.map((Elementos)=>{
                             return <Buttons 
                             Name={Elementos.Name}
                             Icon={Elementos.Icon}
                             Background={Elementos.Background}
                              />
                         })
                     }   
                </div>
            </div>
        </Container>
    );
}