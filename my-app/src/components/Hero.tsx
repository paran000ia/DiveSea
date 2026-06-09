import "./css/Hero.css";

import Rectangle1 from "../assets/Rectangle1.png";
import Rectangle2 from "../assets/Rectangle2.png";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-left">

        <h1>
          Discover And
          <br />
          Create NFTs
        </h1>

        <p>
          Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get a $20 bonus.
        </p>

        <div className="hero-buttons">

          <button className="explore-btn">
            Explore Now
          </button>

          <button className="create-btn">
            Create NFT
          </button>

        </div>

        <div className="stats">

          <div>
            <h2>430K+</h2>
            <span>Collections</span>
          </div>

          <div>
            <h2>150K+</h2>
            <span>Artists</span>
          </div>

          <div>
            <h2>670K+</h2>
            <span>Community</span>
          </div>

        </div>

      </div>

    <div className="hero-right">

  <div className="main-card">
    <img
      src={Rectangle1}
      alt=""
    />
  </div>

  <div className="arrow">
    ↺
  </div>

  <div className="gradient-card">
    <img
      src={Rectangle2}
      alt=""
    />
  </div>

  <div className="mini-card">

  <button>
    ←
  </button>

  <button>
    →
  </button>

</div>

</div>

    </section>
  );
};

export default Hero;