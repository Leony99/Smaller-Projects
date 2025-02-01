import { Routes, Route } from 'react-router-dom'
import Home from './components/Content/Home.jsx'
import Users from './components/Content/Users.jsx'
import Contact from './components/Content/Contact.jsx'

export default props => {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
        </Routes>
    )
}