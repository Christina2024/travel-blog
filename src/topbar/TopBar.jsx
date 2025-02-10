import "./topBar.css";

export default function TopBar() {
  return (
    <>
      <div className="top">
        <div className="topLeft">
          <i class="socialMedia fa-brands fa-square-instagram"></i>
          <i class="socialMedia fa-brands fa-youtube"></i>
          <i class="socialMedia fa-brands fa-square-facebook"></i>
        </div>

        <div className="topCenter">
          <h1>Travelling <em>in</em> Colour</h1>
          <ul className="topList">
            <li className="topListItem">Home</li>
            <li className="topListItem">Destinations</li>
            <li className="topListItem">Blog</li>
            <li className="topListItem">Solo-travel 101</li>
            <li className="topListItem">Community</li>
          </ul>
        </div>
        <div className="thumbnailRight">
          <img
            className="thumbnailImg"
            src="https://inclubmagazine.com/wp-content/uploads/2023/09/cover.jpeg"
            alt="woman standing on cliff"
          />
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </>
  );
}
