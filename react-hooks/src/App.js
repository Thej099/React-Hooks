import './App.css';
import Classcounter from './components/Classcounter';
import UseStateCounter from './components/UseStateCounter';
import UseStatePrev from './components/UseStatePrev';
import UseStateObject from './components/UseStateObject';
import UseStateArray from './components/UseStateArray';
import ClassCounterOne from './components/ClassCounterOne';
import UseEffectCounter from './components/UseEffectCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* To run any component comment the other components and run the application */}
        <Classcounter />
        <UseStateCounter />
        <UseStatePrev />
        <UseStateObject />
        <UseStateArray />
        <ClassCounterOne />
        <UseEffectCounter />
        <HookMouse />
        <IntervalHookCounter />
        <DataFetching />

      </header>
    </div>
  );
}

export default App;
