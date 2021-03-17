import React from 'react'

import studants from '../../data/studants'

export default props => {
    const listItems = studants.map(studant => {
        return <li key={studant.id}>{studant.id} - {studant.name} - {studant.points}</li>
    })
    return (
        <div>
            <ul style={{ listStyle: 'none' }}>
                { listItems }
            </ul>
        </div>
    )
}