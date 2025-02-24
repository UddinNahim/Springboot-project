import { AuthContext } from "./security/AuthContext";
import { useContext } from 'react';


function FooterComponent() {
    const authconext = useContext(AuthContext)

    // console.log(`Footer Componenent - ${authconext.number}`)

    return (
        <footer className="footer">

            <div className='container'>
                your footer is under copywrite!
            </div>

        </footer>
    )

}

export default FooterComponent;