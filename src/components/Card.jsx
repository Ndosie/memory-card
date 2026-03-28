import { useEffect, useState } from "react";

function Card({ id, name, onCardClick }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await fetch(`https://api.pexels.com/v1/photos/${id}`, {
          headers: {
            Authorization: import.meta.env.VITE_PEXELS_KEY,
          },
        });
        const data = await res.json();
        setImage(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchImage();
  }, [id]);

  return (
    <div
      className="card"
      onClick={() => {
        onCardClick();
      }}
    >
      {image && <img src={image.src.medium} alt={image.photographer} />}
      <span>{name}</span>
    </div>
  );
}

export default Card;
