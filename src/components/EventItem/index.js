// Write your code here
import './index.css'

const EventItem = props => {
  const {eventListElem, changeRegistrationStatus} = props
  const {imageUrl, name, location, registrationStatus} = eventListElem

  const onClickEvent = () => {
    changeRegistrationStatus(registrationStatus)
  }

  return (
    <li className="event-item-container" onClick={onClickEvent}>
      <button type="submit" className="img-container">
        <img src={imageUrl} alt="event" className="event-img-style" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
