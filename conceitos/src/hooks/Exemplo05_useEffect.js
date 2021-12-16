// Importar módulos
import React, {useState, useEffect} from 'react';

// Função
function Exemplo05_useEffect(){

    // useState
    const [texto, setTexto] = useState('Hello World!');

    // useEffect
    useEffect(() => {

        setInterval(() => {
            setTexto('useEffect executado com sucesso!');
        }, 5000);

    });
    
    // Retorno
    return(
       <h1>{texto}</h1>
    );

}

// Exportar
export default Exemplo05_useEffect;