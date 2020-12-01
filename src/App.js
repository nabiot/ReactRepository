
import CounterComponent from './Counter/CounterComponent';

function Counter() {
  return(
    <div>
      <CounterComponent startCount = {0} countRate = {3}/>
    </div>
  );
}

export default Counter;