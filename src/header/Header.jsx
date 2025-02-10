import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="aboutText">
        <p><em>Hi,  </em> I'm Annita!<br/> <br/>
          Welcome to my blog where solo <strong>travelling</strong>  and <strong>in colour</strong> meets community!<br />
          <br/>
          This community is built upon the interests and <em>some </em>curiousity (as newbies) for solo
          travelling as women of colour. <br />
          <br/>
          This is a space where I like to express some adventures I have been, with advice of pros 
          and cons for varied destinations. Learning to become unafraid of the unknown and be more self-reliant 
          through solo-travelling has helped me to face my challenge of flying alone. <br />
          Being in a foreign country not speaking the native lnguage with no one around me has empowered me to
          overcome self-doubt. <br />
          Life is a journey and the only way to explore is to get ten toes 
          in and explore! <br />
          As well as supporting our fellow sistas on the 
          journeys 
        </p>
        <div>
          <img
            className="boat"
            src="boat-ride.jpeg">
          </img>
         </div>
      </div>
      <div className="headerImages">
        <img
          src="floating_in_water.jpg"
          alt="woman smiling and floating in water"
        ></img>
        <img src="feet.jpg" alt="feet resting on top of sand"></img>
        <img
          className="hotel"
          src="hotel.jpeg"
          alt="woman_in_pool"
        />
        <img
          height="500px"
          width="550px"
          src="hand.jpg"
          alt="A hand"
        ></img>
       </div>
     </div>
  );
}
