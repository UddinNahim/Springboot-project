import { Link, useParams } from "react-router-dom";

function WelcomeComponent() {
    const { username } = useParams()
    console.log(username)
    return (

        <div className="welcome">
            <h1>Welcome {username}</h1>
            <div >
                Manage your todos. <Link to="/todos">Go Here</Link>

            </div>

        </div>
    )

}
export default WelcomeComponent;