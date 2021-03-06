import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import First from './components/basic/First'
import WithParameter from './components/basic/WithParameter'

ReactDOM.render(
    <div>
        <First></First>
        <WithParameter titulo="Segundo componente" subtitulo="Muito legal!" nota="9.3"></WithParameter>
    </div>,
    document.getElementById('root')
)