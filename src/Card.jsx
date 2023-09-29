export default function Card(props) {
  let badgeText; //now it's where it is undefined and undefined means false as a boolean
  if (props.data.openSpots === 0) {
    badgeText = "SOLD OUT"; //text means true as a boolean
  } else if (props.data.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card-section">
      <div className="card1-section">
        {(badgeText = true && <div className="card-badge">{badgeText}</div>)}
        <img
          src={`/${props.data.coverImg}`}
          className="card1-img"
          alt="card1"
        />
        <div className="info1">
          <img src="/Star1.png" className="star-icon" alt="star-icon" />
          <p className="rate1">{props.data.stats.rating}</p>
          <p className="review1">({props.data.stats.reviewCount})</p>
          <p className="country1">{" " + "•" + " " + props.data.location}</p>
        </div>
        <p className="text1">{props.title}</p>
        <p className="price1">
          <span style={{ fontWeight: 600 }}>From ${props.data.price} </span> /
          person
        </p>
      </div>
    </div>
  );
}
