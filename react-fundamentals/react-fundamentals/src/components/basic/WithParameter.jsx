import react from 'react'

export default function(props) {
    console.log(props)
    return (
        <div>
            <h2>{ props.titulo }</h2>
            <h3>{ props.subtitulo }</h3> 
            <h3>nota = { props.nota }</h3> 
        </div>
        )
}