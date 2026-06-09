import "./css/Collection.css";

import { collectionData } from "../data/collectionData";

const Collection = () => {
  return (
    <section className="collection">

      <h2 className="collection-title">
        Top Collection
      </h2>

      <div className="collection-table">

        <div className="collection-head">

          <span>Collection</span>
          <span>Volume</span>
          <span>24h %</span>
          <span>Floor Price</span>
          <span>Owners</span>
          <span>Items</span>

        </div>

        {collectionData.map((item) => (
          <div
            key={item.id}
            className="collection-row"
          >

            <div className="collection-user">

              <img
                src={item.avatar}
                alt={item.name}
              />

              <div>

                <h4>{item.name}</h4>

                <p>
                  By {item.author}
                </p>

              </div>

            </div>

            <span className="volume">
              ♦ {item.volume}
            </span>

            <span className="green">
              {item.change}
            </span>

            <span>
              ♦ {item.floorPrice}
            </span>

            <span>{item.owners}</span>

            <span>{item.items}</span>

          </div>
        ))}

      </div>

      <div className="collection-footer">

        <button className="explore-all">
          Explore All →
        </button>

      </div>

    </section>
  );
};

export default Collection;