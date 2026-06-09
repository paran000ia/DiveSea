import "./css/Marketplace.css";

import { marketplaceData } from "../data/marketplaceData";

const Marketplace = () => {
  return (
    <section className="marketplace">

      <h2 className="marketplace-title">
        Explore Marketplace
      </h2>

      <div className="marketplace-filters">

        <button>All</button>

        <button>
          📚 Category
        </button>

        <button>
          🖼 Collection
        </button>

        <button>
          💰 Price
        </button>

      </div>

      <div className="marketplace-grid">

        {marketplaceData.map((item) => (
          <div
            key={item.id}
            className="market-card"
          >

            <div className="market-image">

              <img
                src={item.image}
                alt={item.title}
              />

              <span className="market-timer">
                {item.timer}
              </span>

            </div>

            <h3>{item.title}</h3>

            <p>
              Current bid
            </p>

            <div className="market-bottom">

              <span>
                ♦ {item.bid}
              </span>

              <button>
                PLACE BID
              </button>

            </div>

          </div>
        ))}

      </div>

      <div className="marketplace-footer">

        <button className="marketplace-more">
          Explore All →
        </button>

      </div>

    </section>
  );
};

export default Marketplace;