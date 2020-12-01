
import './CounterComponent.css';

function CounterComponent(props) {
    var startCount = props.startCount;
    var countRate = props.countRate;

    function buttonClicked (rate) {
        startCount += countRate;
        console.log('startCount: ', startCount)

    }
    function whenClicked (rate) {
        startCount -= countRate;
        console.log('decreaseCount: ', startCount)
    }

    return(
        <div className = 'container'>
            <h1>Counter: {startCount} </h1>
            <h1>Count Rate: {countRate} </h1>

            <div>
                <button onClick = {() => buttonClicked(countRate)}> + </button>
                <button onClick = {() => whenClicked(countRate)}> - </button>
            </div>
        </div>
    )
}

export default CounterComponent;