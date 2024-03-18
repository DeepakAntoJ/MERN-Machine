import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <>
      Logo
      <header>
        <div className="container">
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <Link to="/list">
            <h1>Employee List</h1>
          </Link>
        </div>
      </header>
    </>
    
  )
}

export default Navbar