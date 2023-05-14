import React, { useState, useEffect } from "react";
import Image from 'next/image';

function Card(props) {
  const [cardImage, setCardImage] = useState(null);

  useEffect(() => {
    import(`../public/cards/${props.value}_${props.suit}.png`)
      .then((image) => {
        setCardImage(image.default);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [props.value, props.suit]);

  return (
    <>
      {cardImage && (
        <div className="card">
          <Image src={cardImage} alt={`${props.value} of ${props.suit}`} />
        </div>
      )}
    </>
  );
}

export default Card;
