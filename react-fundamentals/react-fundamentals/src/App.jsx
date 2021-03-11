import React from 'react'

import First from './components/basic/First'
import WithParameter from './components/basic/WithParameter'
import Fragment from './components/basic/Fragment'
import RandomNumber from './components/basic/RandomNumber'

export default _ =>
        <div id="app">
            <h1>Fundamentos React</h1>
            <RandomNumber a={2} b={9}></RandomNumber>
            <Fragment></Fragment>
            <WithParameter titulo="Segundo componente" subtitulo="Muito legal!" nota={9.3}></WithParameter>
            <First></First>
        </div>