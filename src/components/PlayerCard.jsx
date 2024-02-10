import { useState } from "react";
import { Card } from "react-bootstrap";


const PlayerCard = ({img, name, statistics}) => {
    const [showImage, setshowImage] = useState(true)
    console.log(showImage);
  return (
    <Card className="rounded-2 m-auto player-card">
      { showImage ? (
        <Card.Img variant="top" src={img} className="player-logo" />
      ) : (
        <ul className="m-auto">
            {statistics.map((item,i) => (
                <li className="list-unstyled h5 text-start" key={i}> 🏀 {item}</li>
            ))}
        </ul>
      )}
        <Card.Footer>
            <Card.Title>{name}</Card.Title>
        </Card.Footer>
    </Card> 
  )
}

export default PlayerCard