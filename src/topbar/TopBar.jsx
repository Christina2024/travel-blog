import "./topBar.css";

export default function TopBar() {
  return (
    <>
      <div className="top">
        <div className="topCenter">
          <h1>Travelling in Colour</h1>
          <ul className="topList">
            <li className="topListItem">Home</li>
            <li className="topListItem">Destinations</li>
            <li className="topListItem">Blog</li>
            <li className="topListItem">Solo-travel 101</li>
            <li className="topListItem">Join the tribe</li>
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
