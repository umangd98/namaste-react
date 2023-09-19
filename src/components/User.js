const User = ({name}) => {
    return (
        <div className="user-card m-4 p-4 bg-gray-50 rounded-md">
            <h2>Name: {name}</h2>
            <h3>Location: Dehradun</h3>
            <h4>Contact: @akshay</h4>


        </div>
    )
}

export default User