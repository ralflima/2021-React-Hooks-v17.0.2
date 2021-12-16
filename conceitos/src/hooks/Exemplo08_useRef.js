// Importar módulos
import React, {useRef} from 'react';

// Função
function Exemplo08_useRef(){

    // useRef
    const elemento = useRef();

    // Função
    const acao = () => {
        elemento.current.focus();
        elemento.current.style.backgroundColor = 'red';
        elemento.current.value = 'Digite algo...';
    }

    // Retorno
    return(
        <div>
            <input type='text' ref={elemento} />
            <input type='button' value='Clique aqui' onClick={acao} />
        </div>
    );

}

// Exportar
export default Exemplo08_useRef;