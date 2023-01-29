const today = new Date()

const App = () => (
    <div>
        <Tweet username="user1" message="Tweet tweet!" date={ today.toDateString() }/>
        <Tweet username="user2" message="Meow!" date={ today.toDateString() }/>
        <Tweet username="user3" message="Woof!" date={ today.toDateString() }/>
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))