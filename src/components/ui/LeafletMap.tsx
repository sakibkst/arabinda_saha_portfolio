"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

type LeafletMapProps = {
  lat: number;
  lng: number;
  label: string;
  zoom?: number;
  className?: string;
};

const PIN_SVG = `
  <svg width="32" height="42" viewBox="0 0 32 42" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 0C7.163 0 0 7.163 0 16c0 11 16 26 16 26s16-15 16-26C32 7.163 24.837 0 16 0z" fill="#b8860b"/>
    <circle cx="16" cy="16" r="6.5" fill="#0b1220"/>
  </svg>
`;

export function LeafletMap({ lat, lng, label, zoom = 15, className }: LeafletMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let map: import("leaflet").Map | undefined;
    let cancelled = false;

    import("leaflet").then((L) => {
      if (cancelled || !containerRef.current) return;

      const icon = L.divIcon({
        html: PIN_SVG,
        className: "",
        iconSize: [32, 42],
        iconAnchor: [16, 42],
        popupAnchor: [0, -38],
      });

      map = L.map(containerRef.current, {
        center: [lat, lng],
        zoom,
        scrollWheelZoom: false,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      L.marker([lat, lng], { icon }).addTo(map).bindPopup(label);
    });

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, [lat, lng, label, zoom]);

  return <div ref={containerRef} className={className} />;
}
