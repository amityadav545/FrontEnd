import React from 'react'



import { Switch, Route } from 'react-router'



import Default from '../layouts/dashboard/default'
import Recoverpw from '../views/dashboard/auth/recoverpw'
import SignIn from '../views/dashboard/auth/sign-in'
import SignUp from '../views/dashboard/auth/sign-up'

const IndexRouters = () => {
    return (
        <>
            <Switch>

                <Route path="/sign-up" component={SignUp}></Route>
                <Route path="/sign-in" component={SignIn}></Route>
                <Route path="/recoverpw" component={Recoverpw}></Route>

                <Route path="/" index component={Default}></Route>


            </Switch>
        </>
    )
}

export default IndexRouters
