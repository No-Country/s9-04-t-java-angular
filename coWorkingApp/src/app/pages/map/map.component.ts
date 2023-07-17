import { Component, OnInit } from '@angular/core';

declare const L:any;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  ngOnInit() {
    if (!navigator.geolocation) {
      console.log('location is not supported');
    }

    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      const latLong = [coords.latitude, coords.longitude];
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      let mymap = L.map('map').setView(latLong, 15);

      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(mymap);

      let myMarker = L.icon({
        iconUrl: './../../assets/marker/red_marker.png',
        iconSize: [40, 40],
    });
      let marker = L.marker(latLong,{icon:myMarker}).addTo(mymap);

      mymap.on('click', function (e: { latlng: { lat: any; lng: any; }; }) {
        console.log(e)
        var newMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap);

        L.Routing.control({
          waypoints: [
            L.latLng(marker),
            L.latLng(newMarker)
          ]
        }).addTo(mymap);
       });
    });

    this.watchPosition();
  }

  watchPosition() {
    let desLat = 0;
    let desLon = 0;
    let id = navigator.geolocation.watchPosition(
      (position) => {
        console.log(
          `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
        );
        if (position.coords.latitude === desLat) {
          navigator.geolocation.clearWatch(id);
        }
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }
}
