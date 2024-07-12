import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { MapPin } from 'lucide-react'
import { Icon } from 'leaflet'

export default function Location() {
  const markers = [
    {
      geocode: [-6.22708, 106.82640],
      popUp: "Menara Rajawali Level 7-1 Jl. DR Ide Anak Agung Gde Agung, Kawasan Mega Kuningan, Jakarta Selatan 12950."
    },
    {
      geocode: [-6.23575, 106.57796],
      popUp: "Ruko The Hive Parc 1 No. 81 Lt.2 Lippo Village, Kelurahan Kadu, Kecamatan Curug Kabupaten Tangerang 15810."
    }
  ]

  const customIcon = new Icon({
    iconUrl: "/map-pin.svg",
    iconSize: [38, 38]
  })
  const initMarker = (ref:any) => { ref?.leafletElement.openPopup() }
  return (
    <>
      <div className=''>
      <div className='flex flex-col gap-6 items-center my-20'>
          <p className='text-primary text-6xl font-quattrocentoregular pb-4'>Our Locations</p>
          <span className='border-b-2 border-black w-1/12'></span>
        </div>
        <MapContainer center={[-6.2293, 106.7164]} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {markers.map(marker => (
            <Marker position={marker.geocode} key={marker.geocode} icon={customIcon}>
              <Popup autoClose={false} autoPan={false} closeOnClick={false}>
                {marker.popUp}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </>
  )
}
