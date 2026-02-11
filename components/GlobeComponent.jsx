import React, { useEffect, useMemo, useRef, useState } from "react";
import Globe from "react-globe.gl";

import airportHistory from "./files/my-airports.json";
import countries from "./files/globe-data-min.json";
import travelHistory from "./files/my-flights.json";
import { useGlobe } from "./globe/globeContext";

const CAMERA_STOPS = [
  { lat: 2.286389, lng: 18.82023, altitude: 2.4 },
  { lat: 45.0902, lng: -95.714, altitude: 2.4 },
  { lat: -25.2744, lng: 133.7751, altitude: 2.5 },
  { lat: 36.2048, lng: 138.2529, altitude: 2.35 },
  { lat: -30.5595, lng: 22.9375, altitude: 2.4 },
  { lat: 35.8617, lng: 104.1954, altitude: 2.45 },
];

const highlightedCountries = new Set(["KEN", "CHN", "FRA", "ZAF", "JPN", "USA", "AUS"]);

const getResponsiveConfig = (width) => {
  if (width >= 1200) {
    return {
      hexResolution: 4,
      hexMargin: 0.7,
      arcTransitionDuration: 950,
      showLabels: true,
    };
  }

  if (width >= 960) {
    return {
      hexResolution: 3,
      hexMargin: 0.45,
      arcTransitionDuration: 820,
      showLabels: true,
    };
  }

  if (width >= 768) {
    return {
      hexResolution: 3,
      hexMargin: 0.25,
      arcTransitionDuration: 700,
      showLabels: true,
    };
  }

  if (width >= 425) {
    return {
      hexResolution: 2,
      hexMargin: 0.05,
      arcTransitionDuration: 520,
      showLabels: false,
    };
  }

  return {
    hexResolution: 2,
    hexMargin: 0,
    arcTransitionDuration: 480,
    showLabels: false,
  };
};

const GlobeComponent = () => {
  const globeRef = useRef();
  const shellRef = useRef(null);
  const { setGlobeReady } = useGlobe();

  const [isClient, setIsClient] = useState(false);
  const [globeSize, setGlobeSize] = useState(0);
  const [settings, setSettings] = useState(() => getResponsiveConfig(1200));

  const arcsData = useMemo(() => travelHistory.flights, []);
  const airportData = useMemo(() => airportHistory.airports, []);
  const countriesData = useMemo(() => countries.features, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    setIsClient(true);

    const handleResize = () => {
      if (!shellRef.current) {
        return;
      }

      const { width, height } = shellRef.current.getBoundingClientRect();
      const resolvedSize = Math.max(250, Math.floor(Math.min(width, height)));

      setGlobeSize((prev) => (prev === resolvedSize ? prev : resolvedSize));
      setSettings(getResponsiveConfig(width));
    };

    handleResize();

    const observer = new ResizeObserver(handleResize);
    observer.observe(shellRef.current);

    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isClient || !globeRef.current || !globeSize) {
      return;
    }

    let currentIndex = 0;

    const updateView = () => {
      globeRef.current?.pointOfView(CAMERA_STOPS[currentIndex], 2800);
      currentIndex = (currentIndex + 1) % CAMERA_STOPS.length;
    };

    updateView();
    const intervalId = window.setInterval(updateView, 8500);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [globeSize, isClient]);

  useEffect(() => () => setGlobeReady(false), [setGlobeReady]);

  if (!isClient) {
    return <div ref={shellRef} className="globe-stage" />;
  }

  return (
    <div ref={shellRef} className="globe-stage">
      {globeSize > 0 && (
        <Globe
          ref={globeRef}
          rendererConfig={{ antialias: true, alpha: true }}
          width={globeSize}
          height={globeSize}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="/earth-dark.jpg"
          showAtmosphere
          atmosphereColor="#ffffff"
          atmosphereAltitude={0.2}
          hexPolygonsData={countriesData}
          hexPolygonResolution={settings.hexResolution}
          hexPolygonMargin={settings.hexMargin}
          hexPolygonAltitude={0.01}
          hexPolygonUseDots={false}
          hexPolygonColor={(country) =>
            highlightedCountries.has(country.properties.ISO_A3) ? "#9cff00" : "#f1302494"
          }
          onGlobeReady={() => setGlobeReady(true)}
          enablePointerInteraction={false}
          arcsData={arcsData}
          arcColor={(arc) => (arc.status ? "#9cff00" : "#4a00e0")}
          arcAltitude={(arc) => arc.arcAlt}
          arcStroke={(arc) => (arc.status ? 0.5 : 0.6)}
          arcDashLength={0.9}
          arcDashGap={4}
          arcDashAnimateTime={900}
          arcsTransitionDuration={settings.arcTransitionDuration}
          arcDashInitialGap={(arc) => arc.order}
          labelsData={settings.showLabels ? airportData : []}
          labelColor={() => "#ffffff"}
          labelDotOrientation={(point) => (point.text === "NGA" ? "top" : "right")}
          labelDotRadius={0.35}
          labelSize={1.1}
          labelText="city"
          labelResolution={5}
          labelAltitude={0.07}
          pointsData={airportData}
          pointColor={() => "#ffffff"}
          pointsMerge
          pointAltitude={0.07}
          pointRadius={0.1}
        />
      )}
    </div>
  );
};

export default GlobeComponent;
