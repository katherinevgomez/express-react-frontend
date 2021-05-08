import {useState, useEffect} from "react"

function About(props) {
    //Create state to hold about data
    const [about, setAbout] = useState(null)
    //Create function to make api call
    const getAboutData = async () => {
        //Make api call and get response
        const response = await fetch(props.URL + "about")
        //Turn response into javascript data
        const data = await response.json()
        //Set the about state to the data
        setAbout(data)
    }
    //Make an initial call for the data inside a useEffect, so it only happens once on component load
    useEffect(() => getAboutData(), [])
    //define a function that will return the JSX needed once we get the data
    const loaded = () => (
        <div>
            <h2>{about.name}</h2>
            <h3>{about.email}</h3>
            <p>{about.bio}</p>
        </div>
    )
    return about ? loaded(): <h1>Loading...</h1>
}
export default About