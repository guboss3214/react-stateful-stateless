import './App.css'
import StatefulCounter from './components/Counter'
import StatelessGreeting from './components/Greeting'


function App() {
  
  return (
    <div className='app'>
      <div className="stateless">
        <h2>Stateless:</h2>
        <StatelessGreeting name="John" age={21} skills={['React', 'JS', 'HTML']} />
      </div>
      <div className="statuful">
        <h2>Stateful:</h2>
        <StatefulCounter num={1} />
      </div>
    </div>
  )

}

export default App
