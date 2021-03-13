import './Card.css'
import React from 'react'

export default props => {

    const cardStyle= {
        color: props.color || '#000'
    }
    const headerStyle= {
        backgroundColor: props.background || '#ccc'
    }
    return (
        <div className="card" style={ cardStyle }>
            <div className="title"  style={ headerStyle }>{ props.titulo }</div>
            <div className="content">
                { props.children }
            </div>
        </div>
    )
};