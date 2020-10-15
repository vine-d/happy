import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../../src/images/map-marker.svg';
import '../styles/pages/orphanages-map.css';

function OrphanageMap() {
	return (
		<div id="page-map">
			<aside>
				<header>
					<img src={mapMarkerImg} alt="happy"/>
					<h2>Escolha um orfanato no mapa</h2>
					<p>Muitas crianças estão esperando a sua visita :)</p>
				</header>
				<footer>
					<strong>Gravataí</strong>
					<span>Rio Grande do Sul</span>
				</footer>
			</aside>

			<Map
				center={[-29.9387714,-51.0003507]}
				zoom={14}
				style={{ width: '100%', height: '100%' }}
			>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			</Map>

			<Link to="" className="create-orphanage">
				<FiPlus size={32} color="#FFF" />
			</Link>
		</div>
	)
}

export default OrphanageMap
