
import './App.css';

import Greet from './Greet';
import Intro from './Intro';

function App() {
  return (
    <div>
      <Greet
        name='GreetName'
        salutation_m='Mr. '
        salutaion_f='M/s. '
      />
      <Intro />
    </div>


  );
}

export default App;
