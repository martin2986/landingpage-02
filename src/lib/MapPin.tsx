import { FC } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
type MapPinProps = {
  lat: number;
  lng: number;
  title: string;
  id: any;
  bedroom: number;
  price: any;
  img: any;
};

const MapPin: FC<MapPinProps> = ({ lat, lng, title, id, bedroom, price, img }) => {
  return (
    <Marker position={[lat, lng]}>
      <Popup>
        <div>
          <img src={img} alt={title} />
          <div>
            <Link to={`/${id}`}>{title}</Link>
            <span>{bedroom}</span>
            <b>${price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default MapPin;
