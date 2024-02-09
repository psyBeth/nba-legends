import nbaLogo from "../assets/nba-logo.png"
import { Container } from "react-bootstrap"
import { Image } from "react-bootstrap"

const Header = () => {
  return (
    <Container>
        <Image src={nbaLogo}></Image>
        <h1 className="my-2 font-monospace display-4 fw-bold">NBA Legends</h1>
    </Container>
  )
}

export default Header