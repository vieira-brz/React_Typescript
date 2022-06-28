import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss';
import Cronometro from '../components/Cronometro';
import { ITarefa } from '../types/tarefa';

function App() {

  // Array
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  return (
    <div className={ style.AppStyle }>
      
      <Form setTarefas={ setTarefas } />
      <List tarefas={ tarefas } />
      <Cronometro />

    </div>
  );
}

export default App;