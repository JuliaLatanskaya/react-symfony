import React from 'react';
import image from "../images/screensave.jpg";

function Main(props) {
    return (
        <section>
            <p>{props.message}</p>
            <img src={ image }/>
            <ul>
                { props.dishes.map((dish) => (
                    <li key={ dish.id }>{ dish.title }</li>
                ))}
            </ul>
        </section>
    );
}

const dishes = [
    'Pasta',
    'Salad',
    'Soup'
];

const dishObj = dishes.map((dish, i) => ({id: i, title: dish}));


function App() {
    return (
        <div className="App">
            <p>Start it here</p>
        <Main message="How are you there?" dishes={dishObj}/>
        </div>
    );
}

export default App;