const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Nate" />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))

/** Ask About Error in console.
 * 
 * Console Error :
 * 
 * react-dom.development.js:73 Warning: ReactDOM.render is no longer supported in React 18. 
 * Use createRoot instead. Until you switch to the new API, your app will behave as if it's 
 * running React 17. Learn more: https://reactjs.org/link/switch-to-createroot
*/