import React from 'react'

import First from './components/basic/First'
import WithParameter from './components/basic/WithParameter'
import Fragment from './components/basic/Fragment'

export default _ =>
        <div id="app">
            <h1>Fundamentos React</h1>
            <Fragment></Fragment>
            <WithParameter titulo="Segundo componente" subtitulo="Muito legal!" nota={9.3}></WithParameter>
            <First></First>
        </div>