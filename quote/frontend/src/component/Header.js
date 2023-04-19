import './app.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <div>
      <Navbar style={{ background: 'linear-gradient(to right, #441D5D, #352142,#313A73)' }} variant="dark">
        <Container style={{justifyContent:"center"}}>
          <Navbar.Brand className="navbar-brand-centered" >Random Quote Generator</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header