import React from 'react'

import First from './components/basic/First'
import WithParameter from './components/basic/WithParameter'
import Fragment from './components/basic/Fragment'
import RandomNumber from './components/basic/RandomNumber'
import Card from './components/layout/Card'

export default _ =>
        <div id="app">
            <h1>Fundamentos React</h1>
            <Card titulo="Valor Aleatório">
                <RandomNumber a={2} b={9}></RandomNumber>
            </Card>

            <Card titulo="Fragmento">
                <Fragment></Fragment>
            </Card>

            <Card titulo="Componente com parâmetro">
                <WithParameter titulo="Segundo componente" subtitulo="Muito legal!" nota={9.3}></WithParameter>
            </Card>
            
            <Card titulo="Primeiro">
                <First></First>
            </Card>

        </div>