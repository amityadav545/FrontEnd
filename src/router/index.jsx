import React from 'react'


//router
import { Switch, Route } from 'react-router'
//layoutpages


import Default from '../layouts/dashboard/default'
import SignIn from '../views/dashboard/auth/sign-in'

const IndexRouters = () => {
    return (
        <>
            <Switch>

                <Route path="/sign-in" component={SignIn}></Route>

                <Route path="/" component={Default}></Route>


            </Switch>
        </>
    )
}

export default IndexRouters
