import './App.css'

import React from 'react'

import First from './components/basic/First'
import WithParameter from './components/basic/WithParameter'
import Fragment from './components/basic/Fragment'
import RandomNumber from './components/basic/RandomNumber'
import Card from './components/layout/Card'
import Family from './components/basic/Family'
import FamilyMember from './components/basic/FamilyMember'

export default _ =>
        <div id="app">
            <h1>Fundamentos React</h1>
            <div className="cards">
                <Card titulo="#5 Membros da família" background="brown">
                    <Family surname="Ferreira">
                        <FamilyMember name="Erik" surname="Gomes" />
                        <FamilyMember name="Luiz" surname="Gomes" />
                    </Family>
                </Card>

                <Card titulo="#4 Valor Aleatório" color="red" background="yellow">
                    <RandomNumber a={2} b={9}></RandomNumber>
                </Card>

                <Card titulo="#3 Fragmento" background="green">
                    <Fragment></Fragment>
                </Card>

                <Card titulo="#2 Componente com parâmetro" background="orange">
                    <WithParameter titulo="Segundo componente" subtitulo="Muito legal!" nota={9.3}></WithParameter>
                </Card>
                
                <Card titulo="#1 Primeiro" background="cyan">
                    <First></First>
                </Card>
            </div>
        </div>