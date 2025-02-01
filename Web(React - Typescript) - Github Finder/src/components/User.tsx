import { MapPin } from 'lucide-react';

import { UserProps } from "../types/user"

import classes from './User.module.css'

export default function User(props: { user: UserProps }) {
    const { avatar_url, login, location, followers, following } = props.user;
    
    return (
        <div className={classes.user}>
            <img src={avatar_url} alt={login} />
            <h2>{login}</h2>
            {location && (
                <p className={classes.location}>
                    <MapPin strokeWidth={2} color="#644aff" />
                    <span>{location}</span>
                </p>
            )}
            <div className={classes.stats}>
                <div>
                    <p>Followers:</p>
                    <p className={classes.statsNumber}>{followers}</p>
                </div>
                <div>
                    <p>Following:</p>
                    <p className={classes.statsNumber}>{following}</p>
                </div>
            </div>
            <a href={`https://github.com/${login}?tab=repositories`} 
            target="_blank" rel="noopener noreferrer">
                Check out repositories
            </a>
        </div>
    )
}