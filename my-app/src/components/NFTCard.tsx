import "./css/NFTCard.css";

interface NFTCardProps {
  image: string;
  title: string;
  price: string;
}

const NFTCard = ({
  image,
  title,
  price
}: NFTCardProps) => {
  return (
    <div className="nft-card">

      <div className="nft-image">
        <img
          src={image}
          alt={title}
        />

        <span className="time-badge">
          04h 21m
        </span>
      </div>

      <div className="nft-info">

        <h4>{title}</h4>

        <p>{price}</p>

        <button>
          Place Bid
        </button>

      </div>

    </div>
  );
};

export default NFTCard;