import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	let map;
	let marker;
	//geolocalización
	let watchID;
	let geoLoc

	function showLocationOnMap(position){
		let latitud = position.coords.latitude
		let longitud = position.coords.longitude
		console.log("Latitud: "+ latitud +", Longitud: "+ longitud)

		const myLatLng = {lat:latitud, lng:longitud}
		marker.setPosition(myLatLng)
		map.setCenter(myLatLng)
	}
	function errorHandler(err){
		if(err.code == 1){
			alert("Acceso denegado")
		} else if (err.code == 2){
			alert("posicion no existe")
		}
	}
	function getPosition(){
		if(navigator.geolocation){
			//ejecuta cada 60000 milisegundos
			var options = {timeout:60000}
			geoLoc = navigator.geolocation
			watchID = geoLoc.watchPosition(showLocationOnMap, errorHandler, options)
		} else {
			alert("Lo sentimos, el explorador no soporta la geolocalización")
		}
	}

function initMap() {
		const myLatLng = { lat: -25.363, lng: 131.044 }
  		map = new google.maps.Map(document.getElementById("map"), {
    	center: myLatLng,
    	zoom: 10,
  	    });
		marker = new google.maps.Marker({
			position: myLatLng,
			map,
			title: "Aquí el mapa Nuria"
		});
		getPosition()
	}

useEffect(async () => {

 initMap()
}, [])


	return (
		<>
		<div id="map" className="molongui"></div>
		
		
		</>
	);
};
