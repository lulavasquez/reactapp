import React,{useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail';

const postres = {id:1, image:macarons.jpg, title:'Macarons'};


export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        const getData = new Promise(resolve =>{
            setTimeout(()=>{
                resolve(postres);
            }, 3000);
        });
        getData.then(res => setData(res));

    },[])
    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;