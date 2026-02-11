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
  const memory = typeof navigator !== "undefined" ? navigator.deviceMemory ?? 4 : 4;
  const cores = typeof navigator !== "undefined" ? navigator.hardwareConcurrency ?? 4 : 4;
  const lowPower = width < 768 || memory <= 4 || cores <= 4;

  const base = {
    lowPower,
    pixelRatio: typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, lowPower ? 1 : 1.3) : 1,
    showAtmosphere: !lowPower || width >= 768,
    pointLimit: lowPower ? 12 : width >= 960 ? 25 : 18,
    arcLimit: lowPower ? 28 : 48,
    arcDashAnimateTime: lowPower ? 1200 : 880,
    cameraDuration: lowPower ? 1800 : 2600,
    cameraInterval: lowPower ? 11000 : 8500,
  };

  if (width >= 1200 && !lowPower) {
    return {
      ...base,
      hexResolution: 4,
      hexMargin: 0.35,
      arcTransitionDuration: 760,
      showLabels: true,
    };
  }

  if (width >= 960 && !lowPower) {
    return {
      ...base,
      hexResolution: 4,
      hexMargin: 0.22,
      arcTransitionDuration: 680,
      showLabels: false,
    };
  }

  if (width >= 768) {
    return {
      ...base,
      hexResolution: 3,
      hexMargin: 0.08,
      arcTransitionDuration: 560,
      showLabels: false,
    };
  }

  return {
    ...base,
    hexResolution: 2,
    hexMargin: 0.02,
    arcTransitionDuration: 420,
    showLabels: false,
    showAtmosphere: false,
  };
};

const GlobeComponent = () => {
  const globeRef = useRef();
  const shellRef = useRef(null);
  const { setGlobeReady } = useGlobe();

  const [isClient, setIsClient] = useState(false);
  const [globeSize, setGlobeSize] = useState(0);
  const [settings, setSettings] = useState(() => getResponsiveConfig(1200));

  const arcsData = useMemo(() => travelHistory.flights.slice(0, settings.arcLimit), [settings.arcLimit]);
  const airportData = useMemo(() => airportHistory.airports.slice(0, settings.pointLimit), [settings.pointLimit]);
  const labelsData = useMemo(
    () => (settings.showLabels ? airportHistory.airports.slice(0, Math.min(settings.pointLimit, 12)) : []),
    [settings.pointLimit, settings.showLabels]
  );
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
    const renderer = globeRef.current?.renderer?.();
    if (!renderer) {
      return;
    }

    renderer.setPixelRatio(settings.pixelRatio);
  }, [globeSize, settings.pixelRatio]);

  useEffect(() => {
    if (!isClient || !globeRef.current || !globeSize) {
      return;
    }

    const cameraStops = settings.lowPower ? CAMERA_STOPS.filter((_, idx) => idx % 2 === 0) : CAMERA_STOPS;
    let currentIndex = 0;

    const updateView = () => {
      globeRef.current?.pointOfView(cameraStops[currentIndex], settings.cameraDuration);
      currentIndex = (currentIndex + 1) % cameraStops.length;
    };

    updateView();
    const intervalId = window.setInterval(updateView, settings.cameraInterval);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [globeSize, isClient, settings.cameraDuration, settings.cameraInterval, settings.lowPower]);

  useEffect(() => () => setGlobeReady(false), [setGlobeReady]);

  if (!isClient) {
    return <div ref={shellRef} className="globe-stage" />;
  }

  return (
    <div ref={shellRef} className="globe-stage">
      {globeSize > 0 && (
        <Globe
          ref={globeRef}
          rendererConfig={{
            antialias: !settings.lowPower,
            alpha: true,
            powerPreference: settings.lowPower ? "low-power" : "high-performance",
          }}
          width={globeSize}
          height={globeSize}
          animateIn={false}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="/earth-dark.jpg"
          showAtmosphere={settings.showAtmosphere}
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
          onGlobeReady={() => {
            const renderer = globeRef.current?.renderer?.();
            if (renderer) {
              renderer.setPixelRatio(settings.pixelRatio);
            }
            setGlobeReady(true);
          }}
          enablePointerInteraction={false}
          arcsData={arcsData}
          arcColor={(arc) => (arc.status ? "#9cff00" : "#ffffff")}
          arcAltitude={(arc) => arc.arcAlt}
          arcStroke={(arc) => (arc.status ? 0.5 : 0.6)}
          arcDashLength={0.9}
          arcDashGap={4}
          arcDashAnimateTime={settings.arcDashAnimateTime}
          arcsTransitionDuration={settings.arcTransitionDuration}
          arcDashInitialGap={(arc) => arc.order}
          labelsData={labelsData}
          labelColor={() => "#ffffff"}
          labelDotOrientation={(point) => (point.text === "NGA" ? "top" : "right")}
          labelDotRadius={0.35}
          labelSize={settings.lowPower ? 0.9 : 1.05}
          labelText="city"
          labelResolution={settings.lowPower ? 3 : 5}
          labelAltitude={0.07}
          pointsData={airportData}
          pointColor={() => "#ffffff"}
          pointsMerge
          pointAltitude={0.07}
          pointRadius={settings.lowPower ? 0.08 : 0.1}
        />
      )}
    </div>
  );
};

export default GlobeComponent;
