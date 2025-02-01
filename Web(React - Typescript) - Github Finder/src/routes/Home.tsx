import { useState } from "react"

import { UserProps } from "../types/user"

import Search from "../components/Search"
import User from "../components/User"
import Error from "../components/Error"

export default function Home() {
  const [user, setUser] = useState<UserProps|null>(null);
  const [error, setError] = useState(false);

  const loadUser = async(userName: string) => {
    setUser(null);
    setError(false);
    
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();

    if (res.status === 404) {
      setError(true);
      return;
    }

    const userData: UserProps = {
      avatar_url: data.avatar_url,
      login: data.login,
      location: data.location,
      followers: data.followers,
      following: data.following,
    }
    setUser(userData);
  }

  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <User user={user} />}
      {error && <Error />}
    </div>
  )
}