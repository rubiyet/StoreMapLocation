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

    const mohipur = new maps.Polygon({
      paths: [
        { lng: 90.0992203, lat: 21.8559225 },
        { lng: 90.0890923, lat: 21.8406267 },
        { lng: 90.0916672, lat: 21.8344123 },
        { lng: 90.0985336, lat: 21.8275603 },
        { lng: 90.1050568, lat: 21.8235763 },
        { lng: 90.1129532, lat: 21.8181580 },
        { lng: 90.1218796, lat: 21.8146520 },
        { lng: 90.1306343, lat: 21.8130583 },
        { lng: 90.1381874, lat: 21.8121020 },
        { lng: 90.1460838, lat: 21.8116239 },
        { lng: 90.1546669, lat: 21.8106677 },
        { lng: 90.1625633, lat: 21.8106677 },
        { lng: 90.1671982, lat: 21.8106677 },
        { lng: 90.1696014, lat: 21.8135364 },
        { lng: 90.1771545, lat: 21.8148113 },
        { lng: 90.1828194, lat: 21.8184768 },
        { lng: 90.1843643, lat: 21.8207079 },
        { lng: 90.1915741, lat: 21.8216640 },
        { lng: 90.1955223, lat: 21.8245325 },
        { lng: 90.1975822, lat: 21.8285164 },
        { lng: 90.1984406, lat: 21.8320221 },
        { lng: 90.1965523, lat: 21.8318628 },
        { lng: 90.1936340, lat: 21.8294725 },
        { lng: 90.1905441, lat: 21.8345717 },
        { lng: 90.1908875, lat: 21.8395113 },
        { lng: 90.1924324, lat: 21.8417421 },
        { lng: 90.1857376, lat: 21.8462035 },
        { lng: 90.1824760, lat: 21.8503461 },
        { lng: 90.1840210, lat: 21.8559225 },
        { lng: 90.1811028, lat: 21.8575158 },
        { lng: 90.1761246, lat: 21.8589496 },
        { lng: 90.1732063, lat: 21.8597462 },
        { lng: 90.1653099, lat: 21.8560819 },
        { lng: 90.1565552, lat: 21.8559225 },
        { lng: 90.1476288, lat: 21.8551259 },
        { lng: 90.1419640, lat: 21.8556039 },
        { lng: 90.1368141, lat: 21.8562412 },
        { lng: 90.1325226, lat: 21.8559225 },
        { lng: 90.1275444, lat: 21.8541700 },
        { lng: 90.1225662, lat: 21.8530547 },
        { lng: 90.1184464, lat: 21.8524174 },
        { lng: 90.1103783, lat: 21.8519394 },
        { lng: 90.1048851, lat: 21.8525767 },
        { lng: 90.1004219, lat: 21.8557632 },
      ],
      strokeColor: "#005b96",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#5a97bf",
      fillOpacity: 0.35,
      map,
      // draggable: true
    });

    const kalaparaSadar = new maps.Polygon({
      paths: [
        { lng: 90.2174091, lat: 21.9846371 },
        { lng: 90.2184606, lat: 21.9879798 },
        { lng: 90.2186054, lat: 21.9879251 },
        { lng: 90.2187932, lat: 21.9884574 },
        { lng: 90.2186215, lat: 21.9885643 },
        { lng: 90.2195871, lat: 21.9913523 },
        { lng: 90.2226877, lat: 21.9915712 },
        { lng: 90.2343178, lat: 21.9897307 },
        { lng: 90.2414417, lat: 21.9847963 },
        { lng: 90.2438879, lat: 21.9815530 },
        { lng: 90.2454114, lat: 21.9788270 },
        { lng: 90.2448535, lat: 21.9727181 },
        { lng: 90.2382231, lat: 21.9691959 },
        { lng: 90.2380085, lat: 21.9702108 },
        { lng: 90.2379763, lat: 21.9703327 },
        { lng: 90.2374291, lat: 21.9703352 },
        { lng: 90.2372816, lat: 21.9708426 },
        { lng: 90.2370027, lat: 21.9711038 },
        { lng: 90.2369866, lat: 21.9716187 },
        { lng: 90.2358359, lat: 21.9733996 },
        { lng: 90.2352887, lat: 21.9739021 },
        { lng: 90.2347147, lat: 21.9749144 },
        { lng: 90.2338672, lat: 21.9756731 },
        { lng: 90.2332985, lat: 21.9766978 },
        { lng: 90.2324590, lat: 21.9772028 },
        { lng: 90.2321720, lat: 21.9779589 },
        { lng: 90.2316061, lat: 21.9784663 },
        { lng: 90.2313781, lat: 21.9787772 },
        { lng: 90.2310455, lat: 21.9789215 },
        { lng: 90.2299297, lat: 21.9798418 },
        { lng: 90.2281138, lat: 21.9805954 },
        { lng: 90.2272770, lat: 21.9813515 },
        { lng: 90.2261692, lat: 21.9814634 },
        { lng: 90.2261692, lat: 21.9819708 },
        { lng: 90.2245143, lat: 21.9819584 },
        { lng: 90.2244955, lat: 21.9824583 },
        { lng: 90.2236614, lat: 21.9825777 },
        { lng: 90.2228433, lat: 21.9830752 },
        { lng: 90.2203408, lat: 21.9838114 },
        { lng: 90.2200592, lat: 21.9840576 },
        { lng: 90.2181226, lat: 21.9842839 },
        { lng: 90.2178383, lat: 21.9845351 },
        { lng: 90.2174225, lat: 21.9846645 },
      ],
      strokeColor: "#995253",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#5a97bf",
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
