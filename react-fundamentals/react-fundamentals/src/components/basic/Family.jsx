import React from 'react'

import FamilyMenber from './FamilyMember'

export default props => {
    return (
        <div>
            <FamilyMenber name="Erik" surname={ props.surname } />
            <FamilyMenber name="Lucas" surname={ ...props } />
            <FamilyMenber name="William" surname="Carvalho" />
        </div>
    )
}