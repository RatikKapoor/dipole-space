import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icon';

export const NavigationBar: React.FC = () => {
    return(
        <div className="navigation-bar">
            <Link to="/">
                <Icon size={'30px'} icon={"home"} />
            </Link>
            <Link to="/chat">
                <Icon size={'30px'} icon={"messages"} />
            </Link>
            <Link to="/profile">
                <Icon size={'45px'} icon={"dipole"} />
            </Link>
            <Link to="/profile">
                <Icon size={'30px'} icon={"user"} />
            </Link>
            <Link to="/settings">
                <Icon size={'30px'} icon={"gear"} />
            </Link>
        </div>
    )
}