function App() {
    return (
      <div>
        <Person
          name="John"
          age={35}
          hobbies={["watching football", "playing golf", "fishing"]}
        />
        <Person 
            name="Jane" 
            age={26} 
            hobbies={["cooking", "shopping", "yoga"]} />
        <Person
          name="Michael"
          age={17}
          hobbies={["playing video games", "Netflix and chill", "dating"]}
        />
        <Person
            name="TestLongName"
            age={7}
            hobbies={["reading", "writing"]} 
        />
      </div>
    );
  }

ReactDOM.render(<App />, document.getElementById("root"));

/** Ask about Console Key Warning Error
 * 
 * Warning: Each child in a list should have a unique "key" prop.

Check the render method of `Person`. See https://reactjs.org/link/warning-keys for more information.
    at li
    at Person (<anonymous>:4:20)
    at div
    at App
 */