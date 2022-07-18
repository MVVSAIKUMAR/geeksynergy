import React from "react"
import {BrowserRouter,Route} from "react-router-dom"
import LoginRegister from "./LoginRegister"
import MoviesList from "./MovieList"
import Header from "./Header"
import CompanyDetails from "./CompanyDetails"

const Routing =()=>{
    return(
        <BrowserRouter>
            <Header/> 
                <Route exact path="/" component={LoginRegister} />
                <Route  path="/movies" component={MoviesList} />
                <Route  path="/companyinfo" component={CompanyDetails} />
        </BrowserRouter>
    )
}

export default Routing