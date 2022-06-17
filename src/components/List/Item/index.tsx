import style from '../List.module.scss'

// export default function Item(props: { tarefa: string, tempo: string }) {

export default function Item({ tarefa, tempo }: { tarefa: string, tempo: string }) {
    
    //  const { tarefa, tempo } = props;

    return (
        <li className={ style.item }> 
            <h3> { tarefa } </h3>
            <span> { tempo } </span>
        </li>  
    )
}