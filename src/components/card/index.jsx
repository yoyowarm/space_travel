import './index.scss'

const Card = (props) => {
  return (<div className="card">
    <div>
      <img src={props.img} alt="" />
    </div>
    <div>
      <h5>{props.item.name}</h5>
      <ul>
        <li>Rocket:{props.item.rocket}</li>
        <li>Date:{props.item.date}</li>
        <li>Launchpad:{props.item.launchpad}</li>
        <li>Locality:{props.item.locality}</li>
      </ul>
      <button className="details">Details</button>
    </div>
  </div>)
}

export default Card