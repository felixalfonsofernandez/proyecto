import './App.css';
import imagen from '../src/imagenes/logo.png';
import TareaFormulario from './componentes/TareaFormulario';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="Aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img
         src={imagen}
         className='freecodecamp-logo' 
         alt='el real logo'
        />
      </div>

      <div className='tareas-lista-principal'>
        <h1>Administrador de tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
