import { useState, KeyboardEvent } from "react"
import { Search as SearchIcon } from 'lucide-react'

import classes from "./Search.module.css"

type SearchProps = {
    loadUser: (userName: string) => void;
}

export default function Search({ loadUser }: SearchProps) {
  const [userName, setUserName] = useState<string>("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  }

  return (
    <div className={classes.search}>
        <h2>Search a user:</h2>
        <div className={classes.searchContainer}>
            <input type="text" placeholder="Username" 
            onChange={(e) => setUserName(e.target.value)}
            onKeyDown={handleKeyDown} />
            <button onClick={() => loadUser(userName)}>
                <SearchIcon />
            </button>
        </div>
    </div>
  )
}