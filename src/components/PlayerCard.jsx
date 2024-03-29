import { useState } from "react";
import { Card } from "react-bootstrap";


const PlayerCard = ({img, name, statistics}) => {
    // const {img, name, statistics} = props
    const [showImage, setshowImage] = useState(true)
    console.log(showImage);
    const handleClick = () => setshowImage(!showImage)
  return (
    <Card 
    className="rounded-2 m-auto player-card" 
    role="button" 
    onClick={handleClick}
    // onClick = {() => setShowImage(!showImage)}
    >
      { showImage ? (
        <Card.Img variant="top" src={img} className="player-logo" />
      ) : (
        <ul className="m-auto">
            {statistics.map((item,i) => (
                <li className="list-unstyled h5 text-start" key={i}> 
                {""}
                🏀 {item}
                </li>
            ))}
        </ul>
      )}

    {/* short circuit method */}
    {/* {showImage && (
        <Card.Img variant="top" src={img} className="player-logo" />
    )}
    {!showImage && (
    <ul className="m-auto">
        {statistics.map((item, i) => (
        <li className="list-unstyled h5 text-start " key={i}>
            {" "}
        🏀 {item}
        </li>
        ))}
    </ul>
    )} */}

        <Card.Footer>
            <Card.Title>{name}</Card.Title>
        </Card.Footer>
    </Card> 
  )
}

export default PlayerCard