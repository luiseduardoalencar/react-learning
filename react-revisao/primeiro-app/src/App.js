
import { useState,useEffect } from 'react';

function App() {
  
  const [input,setInput] = useState();
  const [tarefas, setTarefas] = useState(['pagar conta', 'trabalhar']);
  

  useEffect(()=>{
    const tarefasStorage = localStorage.getItem('@tarefa');
    
   if(tarefasStorage){
     setTarefas(JSON.parse(tarefasStorage));
   } 

 },[])

  useEffect(()=>{
    
    localStorage.setItem('@tarefa',JSON.stringify(tarefas))

  },[tarefas])

  


function handleRegister(event) {
  event.preventDefault();

  setTarefas([...tarefas,input])
  setInput('')
  
}

  return (
   <div>
    <form onSubmit = {handleRegister}>
      <label>TAREFA:</label>
      <input placeholder="Digite Uma tarefa"  value={input} onChange={ (event) => setInput(event.target.value)  }/> <br />
      
      <button type="submit">REGISTRAR</button>
    </form>
    <br />

    <ul>
      {tarefas.map(tarefa => (
        <li key = {tarefa}>{tarefa}</li>
      ))}
    </ul>
    </div>
  ); 
}

export default App;


