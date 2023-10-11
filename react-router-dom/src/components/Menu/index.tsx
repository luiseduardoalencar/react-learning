import './style.css';
import { Link } from 'react-router-dom';

export const Menu = () =>{
  return( 
    
    <header>
    
      <h2>Teste</h2>
    
    <div className='menu'>

      <Link to="/" state={"This is state from home"}>Home</Link>
      <Link to="/about">About</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/posts/10">Post 10</Link>
      <Link to="/redirect">Redirect</Link>

  </div>
  </header>
  )
}