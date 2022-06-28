import React from 'react';
import style from './Botao.module.scss';

class Botao extends React.Component <{ text: string, type?: "button" | "submit" | "reset" | undefined }> {

    render() {

        const { type = 'button' } = this.props;

        return (
            <button type={ type } className={ style.botao }>
                <h3>
                    { this.props.text }
                </h3> 
            </button>
        )
    }
}

export default Botao;