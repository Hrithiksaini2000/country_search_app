import { NavLink, useRouteError } from "react-router-dom"

export const Errorpage=()=>{

    // New Hook In react router 

    const error = useRouteError()
    console.log(error)

    return(
        <>
        <div>
            <h1>Opps An Error Occured</h1> 
            {error && <p>{error.data}</p>}
            <NavLink to="/">
                <button>Go Home</button>
            </NavLink>
        </div>
        </>
    )
}