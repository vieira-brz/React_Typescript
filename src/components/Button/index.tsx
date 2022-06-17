import React from 'react';
import style from './Botao.module.scss';

class Botao extends React.Component <{ text: string }> {

    render() {
        return (
            <button className={ style.botao }>
                <h3>
                    { this.props.text }
                </h3> 
            </button>
        )
    }
}

export default Botao;