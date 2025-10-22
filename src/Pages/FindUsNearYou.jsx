import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  CircleMarker,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaStar,
  FaFilter,
  FaDirections,
  FaCrosshairs,
  FaRoute,
  FaUserCheck,
  FaExclamationTriangle,
} from "react-icons/fa";

// ---- Fix default marker icons for leaflet ----
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// ---- Custom icons ----
const serviceIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const premiumServiceIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const userLocationIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// ---- Helper: update map view when center/zoom change ----
function MapViewUpdater({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    if (!map) return;
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

// ---- Haversine distance (km) ----
function calculateDistance(lat1, lon1, lat2, lon2) {
  const toRad = (deg) => (deg * Math.PI) / 180;
  const R = 6371; // km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export default function FindUsNearYou() {
  // State
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("all");
  const [selectedService, setSelectedService] = useState("all");
  const [mapCenter, setMapCenter] = useState([23.6850, 90.3563]); // Bangladesh center
  const [mapZoom, setMapZoom] = useState(7);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [isLocating, setIsLocating] = useState(false);
  const [nearestLocations, setNearestLocations] = useState([]);

  // Map ref using whenCreated
  const mapRef = useRef(null);

  // Sample service locations across Bangladesh districts
  const serviceLocations = [
    {
      id: 1,
      name: "SwiftFix Dhaka Central",
      district: "Dhaka",
      position: [23.8103, 90.4125],
      address: "House #45, Road #12, Dhanmondi, Dhaka",
      phone: "+880 1711 123 456",
      services: ["AC Repair", "Plumbing", "Electrical", "Appliance Repair"],
      hours: "8:00 AM - 10:00 PM",
      rating: 4.8,
      reviews: 1247,
      isPremium: true,
      email: "dhaka@swiftfix.com",
    },
    {
      id: 2,
      name: "Chittagong Service Center",
      district: "Chittagong",
      position: [22.3569, 91.7832],
      address: "Agrabad Commercial Area, Chittagong",
      phone: "+880 1811 234 567",
      services: ["Plumbing", "Electrical", "Carpentry"],
      hours: "9:00 AM - 8:00 PM",
      rating: 4.6,
      reviews: 892,
      isPremium: true,
      email: "chittagong@swiftfix.com",
    },
    {
      id: 3,
      name: "Khulna Technical Hub",
      district: "Khulna",
      position: [22.8456, 89.5403],
      address: "Sonadanga R/A, Khulna",
      phone: "+880 1911 345 678",
      services: ["AC Repair", "Appliance Repair", "Electrical"],
      hours: "8:30 AM - 9:00 PM",
      rating: 4.5,
      reviews: 567,
      isPremium: false,
      email: "khulna@swiftfix.com",
    },
    {
      id: 4,
      name: "Sylhet City Services",
      district: "Sylhet",
      position: [24.8949, 91.8687],
      address: "Zindabazar, Sylhet",
      phone: "+880 1611 456 789",
      services: ["Plumbing", "Carpentry", "Appliance Repair"],
      hours: "8:00 AM - 9:30 PM",
      rating: 4.7,
      reviews: 723,
      isPremium: true,
      email: "sylhet@swiftfix.com",
    },
    {
      id: 5,
      name: "Rajshahi Solutions",
      district: "Rajshahi",
      position: [24.3745, 88.6042],
      address: "Shaheb Bazar, Rajshahi",
      phone: "+880 1712 567 890",
      services: ["Electrical", "Plumbing"],
      hours: "9:00 AM - 8:00 PM",
      rating: 4.4,
      reviews: 445,
      isPremium: false,
      email: "rajshahi@swiftfix.com",
    },
    {
      id: 6,
      name: "Barisal Service Point",
      district: "Barisal",
      position: [22.7029, 90.3466],
      address: "Sadar Road, Barisal",
      phone: "+880 1812 678 901",
      services: ["AC Repair", "Appliance Repair"],
      hours: "8:00 AM - 8:00 PM",
      rating: 4.3,
      reviews: 389,
      isPremium: false,
      email: "barisal@swiftfix.com",
    },
    {
      id: 7,
      name: "Rangpur Technical",
      district: "Rangpur",
      position: [25.7439, 89.2752],
      address: "College Road, Rangpur",
      phone: "+880 1912 789 012",
      services: ["Electrical", "Carpentry", "Plumbing"],
      hours: "8:30 AM - 9:00 PM",
      rating: 4.5,
      reviews: 512,
      isPremium: false,
      email: "rangpur@swiftfix.com",
    },
    {
      id: 8,
      name: "Cox's Bazar Beach Services",
      district: "Cox's Bazar",
      position: [21.4272, 92.0058],
      address: "Marine Drive, Cox's Bazar",
      phone: "+880 1612 890 123",
      services: ["AC Repair", "Electrical", "Appliance Repair"],
      hours: "8:00 AM - 10:00 PM",
      rating: 4.6,
      reviews: 678,
      isPremium: true,
      email: "coxsbazar@swiftfix.com",
    },
  ];

  // derived lists
  const districts = [...new Set(serviceLocations.map((loc) => loc.district))];
  const allServices = [
    ...new Set(serviceLocations.flatMap((loc) => loc.services)),
  ];

  // Filtered locations according to search and filters
  const filteredLocations = serviceLocations.filter((location) => {
    const matchesSearch =
      location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.district.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDistrict =
      selectedDistrict === "all" || location.district === selectedDistrict;
    const matchesService =
      selectedService === "all" || location.services.includes(selectedService);

    return matchesSearch && matchesDistrict && matchesService;
  });

  // Detect user location
  const getUserLocation = () => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by this browser.");
      return;
    }

    setIsLocating(true);
    setLocationError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const userPos = [latitude, longitude];

        setUserLocation(userPos);
        setMapCenter(userPos);
        setMapZoom(13);
        setIsLocating(false);

        const locationsWithDistance = serviceLocations
          .map((svc) => ({
            ...svc,
            distance: calculateDistance(
              latitude,
              longitude,
              svc.position[0],
              svc.position[1]
            ),
          }))
          .sort((a, b) => a.distance - b.distance);

        setNearestLocations(locationsWithDistance.slice(0, 3));
      },
      (error) => {
        setIsLocating(false);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setLocationError("Location access denied. Please enable location services.");
            break;
          case error.POSITION_UNAVAILABLE:
            setLocationError("Location information unavailable.");
            break;
          case error.TIMEOUT:
            setLocationError("Location request timed out.");
            break;
          default:
            setLocationError("An unknown error occurred.");
            break;
        }
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  };

  // click handler when user picks a location (list or popup)
  const handleLocationClick = (location) => {
    if (!location) return;
    setSelectedLocation(location);
    setMapCenter(location.position);
    setMapZoom(15);

    // If map instance exists, smoothly fly to location and set zoom
    if (mapRef.current) {
      try {
        mapRef.current.flyTo(location.position, 15, { duration: 0.8 });
      } catch (err) {
        // fallback to setView
        console.log(err.message)
        mapRef.current.setView(location.position, 15);
      }
    }
  };

  // when clicking a marker's Directions
  const getDirections = (position) => {
    const [lat, lng] = position;
    const origin = userLocation ? `&origin=${userLocation[0]},${userLocation[1]}` : "";
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}${origin}`, "_blank");
  };

  const clearUserLocation = () => {
    setUserLocation(null);
    setNearestLocations([]);
    setMapCenter([23.6850, 90.3563]);
    setMapZoom(7);
  };

  // on mount: nothing special, but ensure mapRef persists
  useEffect(() => {
    // no-op
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-15 pb-16">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="text-center mb-12 px-4">
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6 rounded-full" />
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 bg-clip-text text-transparent mb-3">
          Find Us Near You
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover SwiftFix service centers across Bangladesh. Search, filter, or detect your location to see nearest centers.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Controls */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2"><FaCrosshairs /> Find My Location</h3>
                <p className="text-green-100 mb-4">
                  {userLocation ? "We found your location! Showing nearest service centers." : "Click to detect your location and find nearby centers."}
                </p>

                {!userLocation ? (
                  <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={getUserLocation} disabled={isLocating} className="w-full bg-white text-green-600 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-50">
                    {isLocating ? <div className="w-5 h-5 border-2 border-green-600 border-t-transparent rounded-full animate-spin" /> : <FaCrosshairs />} 
                    {isLocating ? "Locating..." : "Detect My Location"}
                  </motion.button>
                ) : (
                  <>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-white/20 p-3 rounded-lg">
                        <span className="text-sm">Location Found</span>
                        <FaUserCheck className="text-xl" />
                      </div>
                      <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={clearUserLocation} className="w-full bg-white/20 text-white py-2 rounded-xl font-semibold hover:bg-white/30">Clear Location</motion.button>
                    </div>
                  </>
                )}

                {locationError && (
                  <div className="mt-3 p-3 bg-red-100 border border-red-300 rounded-lg text-red-700 text-sm flex items-center gap-2">
                    <FaExclamationTriangle />
                    {locationError}
                  </div>
                )}
              </div>

              {/* Nearest locations */}
              {nearestLocations.length > 0 && (
                <div className="mt-4 bg-blue-50 rounded-xl p-4">
                  <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2"><FaRoute /> Nearest to You</h4>
                  <div className="space-y-2">
                    {nearestLocations.map((location, idx) => (
                      <motion.div key={location.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.08 }} className="p-3 bg-white rounded-lg cursor-pointer hover:shadow-md transition-shadow" onClick={() => handleLocationClick(location)}>
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-medium text-sm">{location.name}</h5>
                            <p className="text-xs text-gray-600">{location.district}</p>
                          </div>
                          <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{location.distance.toFixed(1)} km</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Search & filters */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input type="text" placeholder="Search locations..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <select value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="all">All Districts</option>
                    {districts.map((d) => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>

                <div className="relative">
                  <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="all">All Services</option>
                    {allServices.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-4">
                  <span className="text-blue-700 font-semibold">{filteredLocations.length} {filteredLocations.length === 1 ? 'Location' : 'Locations'} Found</span>
                  {userLocation && <span className="text-green-600 text-sm flex items-center gap-1"><FaUserCheck /> Showing distances from your location</span>}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Locations list */}
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white">
                <h2 className="text-2xl font-bold">Service Centers</h2>
                <p className="text-blue-100 opacity-90">{userLocation ? "Sorted by distance" : "Select a location for details"}</p>
              </div>

              <div className="max-h-[600px] overflow-y-auto">
                {filteredLocations
                  .map((loc) => ({
                    ...loc,
                    distance: userLocation ? calculateDistance(userLocation[0], userLocation[1], loc.position[0], loc.position[1]) : null,
                  }))
                  .sort((a, b) => {
                    if (userLocation) return a.distance - b.distance;
                    return a.name.localeCompare(b.name);
                  })
                  .map((location, idx) => (
                    <motion.div key={location.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.04 }} className={`border-b border-gray-100 last:border-b-0 ${selectedLocation?.id === location.id ? 'bg-blue-50' : 'hover:bg-gray-50'} transition-colors duration-150`}>
                      <button onClick={() => handleLocationClick(location)} className="w-full text-left p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-semibold text-gray-800 text-lg">{location.name}</h3>
                            <p className="text-xs text-gray-500">{location.address}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            {userLocation && <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded-full">{location.distance ? location.distance.toFixed(1) + ' km' : '-'}</span>}
                            {location.isPremium && <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">Premium</span>}
                          </div>
                        </div>

                        <div className="flex items-center text-gray-600 mb-2">
                          <FaMapMarkerAlt className="text-blue-500 mr-2" />
                          <span className="text-sm">{location.district}</span>
                        </div>

                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center">
                            <FaStar className="text-yellow-400 mr-1" />
                            <span className="text-sm font-medium text-gray-700">{location.rating}</span>
                            <span className="text-gray-500 text-sm ml-1">({location.reviews})</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <FaClock className="text-green-500 mr-1" />
                            <span className="text-sm">{location.hours}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {location.services.slice(0, 3).map((s) => <span key={s} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">{s}</span>)}
                          {location.services.length > 3 && <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">+{location.services.length - 3} more</span>}
                        </div>
                      </button>
                    </motion.div>
                  ))}
              </div>
            </div>
          </motion.div>

          {/* Map and details */}
          <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-[700px]">
              <MapContainer
                center={mapCenter}
                zoom={mapZoom}
                style={{ height: "100%", width: "100%" }}
                whenCreated={(mapInstance) => {
                  mapRef.current = mapInstance;
                }}
                scrollWheelZoom={false}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; OpenStreetMap contributors' />

                <MapViewUpdater center={mapCenter} zoom={mapZoom} />

                {/* User marker */}
                {userLocation && (
                  <Marker position={userLocation} icon={userLocationIcon}>
                    <Popup>
                      <div>
                        <strong>Your Location</strong>
                        <div className="text-sm text-gray-600">Showing nearest service centers</div>
                      </div>
                    </Popup>
                  </Marker>
                )}

                {/* Service markers */}
                {filteredLocations.map((location) => (
                  <Marker
                    key={location.id}
                    position={location.position}
                    icon={location.isPremium ? premiumServiceIcon : serviceIcon}
                    eventHandlers={{
                      click: () => handleLocationClick(location),
                    }}
                  >
                    <Popup>
                      <div style={{ minWidth: 180 }}>
                        <strong>{location.name}</strong>
                        <div className="text-xs text-gray-600">{location.address}</div>
                        <div className="mt-2 flex items-center justify-between">
                          <span style={{ color: "#0ea5a4" }}><FaStar /> {location.rating}</span>
                          <button onClick={() => getDirections(location.position)} style={{ color: "#2563eb" }} className="text-sm">
                            <FaDirections /> Directions
                          </button>
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                ))}

              </MapContainer>
            </div>

            {/* Selected location details */}
            {selectedLocation && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-lg p-6 mt-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{selectedLocation.name}</h3>
                    <div className="flex items-center text-gray-600 mb-1"><FaMapMarkerAlt className="text-blue-500 mr-2"/> {selectedLocation.address}, {selectedLocation.district}</div>
                    {userLocation && <div className="flex items-center text-green-600 mb-1"><FaRoute className="mr-2"/> <span className="font-semibold">{calculateDistance(userLocation[0], userLocation[1], selectedLocation.position[0], selectedLocation.position[1]).toFixed(1)} km from your location</span></div>}
                    <div className="flex items-center gap-2 mt-2">
                      {selectedLocation.isPremium && <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">Premium Center</span>}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-sm text-gray-500 mb-2">Rating</div>
                    <div className="text-lg font-semibold">{selectedLocation.rating} <span className="text-gray-400 text-sm">({selectedLocation.reviews})</span></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3">Contact Information</h4>
                    <div className="space-y-2">
                      <div className="flex items-center"><FaPhone className="text-green-500 mr-3"/> <span className="text-gray-600">{selectedLocation.phone}</span></div>
                      <div className="flex items-center"><FaDirections className="text-blue-500 mr-3"/> <span className="text-gray-600">{selectedLocation.email}</span></div>
                      <div className="flex items-center"><FaClock className="text-purple-500 mr-3"/> <span className="text-gray-600">{selectedLocation.hours}</span></div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3">Services Offered</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedLocation.services.map((s) => <span key={s} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">{s}</span>)}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => getDirections(selectedLocation.position)} className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                    <FaDirections /> Get Directions
                  </motion.button>

                  <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href={`tel:${selectedLocation.phone}`} className="flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                    <FaPhone /> Call Now
                  </motion.a>
                </div>
              </motion.div>
            )}

          </motion.div>
        </div>
      </div>
    </div>
  );
}
