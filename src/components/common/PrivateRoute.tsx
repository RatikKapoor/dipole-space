import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { useAppSelector } from '../../app/hooks'
import { selectUser } from '../../features/user/userSlice'

interface PrivateRouteProps {
    path: string
}

export const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
    const user = useAppSelector(selectUser);
    return (
        user.user ?
            <Route {...props} />
            :
            <Redirect to="/login" />
    )
}
