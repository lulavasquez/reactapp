import React from 'react';
import Item from '../Item';

const ItemList = ({data = []}) => {
    return (
        data.map(postres => <Item key={postres.id} info={postres} />)
    );
}
export default ItemList;