
import React from 'react';

class UserClass extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            userInfo: {
                name: "Dummy Name", 
                location: "Default Location", 
                contact: "Default Contact", 
                image_url: "default url"
            }
        }

    }

    async componentDidMount(){
        //api calls
        const data = await fetch("https://api.github.com/users/umangd98")
        const json = await data.json()
       this.setState({
        name: json.name,
        location: json.location, 
        contact: json.html_url, 
        image_url: json.avatar_url
       })
    }
    
    render(){
        const {name, location, contact, image_url} = this.state
        return (
            <div className="user-card">
            <img src={image_url}/>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: <a target='blank_' href={contact}>{name}</a></h4>


        </div>
        )
    }
}

export default UserClass  