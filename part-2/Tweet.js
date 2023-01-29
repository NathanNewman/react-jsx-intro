function Tweet(props) {
    return(
    <div>
        <h3>{props.username}</h3>
        <p>{props.message}</p>
        <h6>{props.date}</h6>
    </div>
    );
}