import image from '../../assets/save-the-oslo-fjord.png'
import './event-banner.css'

export default function Banner( items ?: any ) {
  return (
    <div className="banner-wrapper">
      <p>hei {items?.data?.length}</p>
        <div className="banner-image">
            <img src={image} alt="Image" />
        </div>
        <div className="banner-text">
            <h2 className="banner-title">Design Thinking: Save the Oslo Fjord</h2>
            <p className="banner-description">Kick off your entrepreneurial journey with our Design Thinking: Save the Oslo Fjord workshop. In a world facing ecological breakdown and environmental neglect, this hands-on session challenges you to confront reality head-on and design solutions that respond to real, local environmental crises.</p>
        </div>
    </div>
  );
}