import GoogleMapReact from "google-map-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Map() {
  const [text, setText] = useState();

  const loadMap = (map, maps) => {
    // const cityCircle = new maps.Circle({
    //   strokeColor: "#000000",
    //   strokeOpacity: 0.8,
    //   strokeWeight: 2,
    //   fillColor: "#000000",
    //   fillOpacity: 0.35,
    //   map,
    //   center: { lat: 23.6850, lng: 90.3563 },
    //   radius: 50000,
    //   // draggable: true
    // });

    const divitionPolygon = new maps.Polygon({
      paths: [
        { lng: -269.8736572, lat: 23.6344598 },
        { lng: -269.5330811, lat: 23.4279689 },
        { lng: -269.230957, lat: 23.5639871 },
        { lng: -269.2529297, lat: 23.8707687 },
        { lng: -269.4177246, lat: 24.091604 },
        { lng: -269.730835, lat: 24.2269287 },
        { lng: -270.032959, lat: 24.0615124 },
        { lng: -270.0109863, lat: 23.7803181 },
        { lng: -269.8846436, lat: 23.6495561 },
      ],
      strokeColor: "#000000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#000000",
      fillOpacity: 0.35,
      map,
      // draggable: true
    });

    const cityPolygon = new maps.Polygon({
      paths: [
        { lng: -269.6209717, lat: 23.7048945 },
        { lng: -269.5166016, lat: 23.7803181 },
        { lng: -269.631958, lat: 23.8707687 },
        { lng: -269.7143555, lat: 23.7903713 },
        { lng: -269.6209717, lat: 23.7149535 },
      ],
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map,
      // draggable: true
    });

    const emptyPolygon = new maps.Polygon({
      paths: [
        { lng: -269.6298981, lat: 23.9398204 },
        { lng: -269.5571136, lat: 23.9573913 },
        { lng: -269.5495605, lat: 24.0031899 },
        { lng: -269.6161652, lat: 24.0207522 },
        { lng: -269.622345, lat: 23.9824885 },
        { lng: -269.598999, lat: 23.9780968 },
        { lng: -269.6257782, lat: 23.9366825 },
      ],
      strokeColor: "#FFFFFF",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FFFFFF",
      fillOpacity: 0.35,
      map,
      // draggable: true
    });

    let marker = new maps.Marker({
      position: {
        lat: 23.7721493,
        lng: -269.6161652,
      },
      map,
      draggable: false,
    });

    // marker.addListener("dragend", (event) => {
    //   setText("Dhaka");
    // });

    marker.addListener("click", (event) => {
      setText("Jashimuddiin, Uttara, Dhaka");
    });
  };
  return (
    <div className="flex items-center justify-center p-10 rounded-2xl">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div
            className=" bg-slate-600"
            style={{ height: "680px", width: "600px" }}
          >
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyBh1WzGe3_mytkvP1GiYSEKhsAtvIIiHRE",
              }}
              center={{ lat: 23.685, lng: 90.3563 }}
              defaultZoom={7.2}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) => loadMap(map, maps)}
            />
          </div>
          <div className="text-sm py-2 text-amber-600">***Click on the marker for store details.</div>
        </div>
        {text && (
          <div className="flex items-center justify-center">
            <div className="space-y-5">
              <div className="flex items-center justify-center p-5 border-2 bg-violet-800 text-white font-semibold rounded-xl">
                <h1>{text}</h1>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/1.jpeg"
                  alt="1"
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-teal-500"
                />
              </div>
              <div className="flex items-center justify-center">
                <div className="w-56">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  vitae ligula sit amet felis blandit viverra sit amet sed odio.
                  Phasellus magna lectus, cursus sed metus a, congue laoreet
                  augue.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
