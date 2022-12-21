import React, {useState,useEffect} from "react";
import Title from '../Title';
import ItemCount from '../ItemCount';
import ItemList from '../ItemList';

const postres = [
    {id:1, image: "macarons.jpg", title: Macarons},
    {id:2, image: "donas.jpg", title:Donas},
    {id:3, image: "cupcake.jpg", title:Cupcake},
];

export const ItemListContainer = ({texto}) =>{
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const getData = new Promise(resolve =>{
            setTimeout(()=>{
                resolve(postres);
            }, 3000);
        });
        getData.then(res => setData(res));

    },[])

    const onAdd = (quantity) => {
        console.log('Compraste {quantity} unidades');
    }
    return (
        <>
        <Title greeting={texto} />
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
        <ItemList data={data} />
        </>
    );
}



export default ItemListContainer;