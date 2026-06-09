import "./css/Header.css";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header">

      <div className="logo">
        <img src={Logo} alt="NFTSea Logo" />
      </div>

      <nav>
        <a href="#">Discover</a>
        <a href="#">Creators</a>
        <a href="#">Sell</a>
        <a href="#">Stats</a>
      </nav>

      <div className="header-buttons">
        <button className="search-btn">
          Search
        </button>

        <button className="connect-btn">
          Connect Wallet
        </button>
      </div>

    </header>
  );
};

export default Header;