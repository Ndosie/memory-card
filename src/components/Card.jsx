import { useState } from "react";

function Card() {
  const [image, setImage] = useState(null);

  console.log(import.meta.env.VITE_PEXELS_KEY);

  fetch("https://api.pexels.com/v1/photos/5130821", {
    headers: {
      Authorization: import.meta.env.VITE_PEXELS_KEY,
    },
  })
    .then((res) => res.json())
    .then((data) => setImage(data))
    .catch((reason) => console(reason));

  return (
    <div className="card">
      {image && <img src={image.src.medium} alt={image.photographer} />}
      <span>Cow</span>
    </div>
  );
}

export default Card;
