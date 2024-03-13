// import './App.css';

function Header() {
  return (
    // <div className="App">
      <header className="Header">
        <div className="Header-component">
          <div className="Header-left">
            <img src="./logo_grt.svg" alt="GRT Logo" />
          </div>
          <div className="Header-centre">
            <div className="Icon">
              <img className="Icon-notification" src="./icon_notification.svg" alt="Notification Icon" />
              <img className="Icon-badge" src="./icon_badge.svg" alt="Notification Badge" />
            </div>
            <span className="Text-notification">Notifications</span>
          </div>
          <div className="Header-right">
            <div className="Profile-pic">
              <img src="./icon_profile_pic.svg" alt="Profile Pic" />
            </div>
            <div className="Profile-email">member@greenridertech.com</div>
            <div className="Btn-logout"><button>Logout</button></div>
          </div>
        </div>
      </header>
      
    // </div>
  );
}

export default Header;
