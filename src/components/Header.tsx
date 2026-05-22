function Header() {
  return (
    <header className="header">
      <div className="logo-section">
        <div className="logo-circle">MH</div>

        <div>
          <h1>MiniHelpDesk</h1>

          <p className="subtext">
            Demo Project by Arooba Afghan(2312145) | CS4717
          </p>
        </div>
      </div>

      <button className="btn logout-btn">
        Logout
      </button>
    </header>
  );
}

export default Header;