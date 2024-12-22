/**
 * @Project: learn-react
 * @Author: CHUNAM
 * @Date: 12/13/2024
 * @Time: 4:24 PM
 * @File: VnptMap123.tsx
 */
import React, {useEffect} from 'react';
import './style.css';
import VnptMap from '@ecogis/maps';


const MapComponent: React.FC = () => {
    useEffect(() => {
        VnptMap.initMap('map', import.meta.env.VITE_API_KEY,
            {
                showFullscreen: true,
                hash: true,
            });
    }, []); // Chỉ chạy khi component được mount

    return (
        <div id="map" className="map"></div>
    );
};

export default MapComponent;