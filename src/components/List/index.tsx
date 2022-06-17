import React from 'react';
import Item from './Item';
import style from './List.module.scss';

function List() {

    // Array
    const tarefas = [
        {
            tarefa: 'React',
            tempo: '02:00:00'
        },
        {
            tarefa: 'Typescript',
            tempo: '01:00:00'
        },
        {
            tarefa: 'JavaScript',
            tempo: '00:30:00'
        }
    ]
    
    // Varrendo array
    return (
        <aside className={ style.listaTarefas }>
            <h2>Estudos do dia</h2>
            <ul>
                {
                tarefas.map((item, index) => (
                   <Item 
                     key={ index }
                     { ...item }
                   />                  
                ))
                }
            </ul>
        </aside>
    )
}

export default List;
