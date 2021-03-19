import React from 'react'

import products from '../../data/products'

export default props => {
    const listItems = products.map(product => {
        return <tr key={product.id}><td>{product.id}</td><td>{product.name}</td><td>R$ {product.price.toFixed(2)}</td></tr>
    })
    return (
        <table>
            <thead>
               <th>ID</th>
               <th>Nome</th>
               <th>Preço</th>
            </thead>
            <tbody>
               { listItems }
            </tbody>            
        </table>
    )
}