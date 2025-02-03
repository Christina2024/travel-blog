import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitle">React & Node</span>
        <span className="headerTitle">Blog</span>
      </div>
      <img
        width="350px"
        src="https://media.istockphoto.com/id/1140379519/photo/african-woman-relaxing-in-swimming-pool.jpg?s=612x612&w=0&k=20&c=HfOJTviKJNzXqNI4zhSGxh32PjE5aOv9Tlu1Vz-S_mk="
        alt="woman smiling and floating in water"
      ></img>
      <img
        src="https://media.istockphoto.com/id/1156838940/photo/african-american-teen-girl-with-her-feet-in-the-sand.jpg?s=612x612&w=0&k=20&c=OReyHPuqNJ5IV8wlh2Y-gx0puOdxu7oLQkOeWRx-TKM="
        alt="feet resting on top of sand"
      ></img>
      <img src="./public/swimming_pool.jpg" alt=""></img>
    </div>
  );
}
