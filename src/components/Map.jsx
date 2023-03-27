import React from "react";

import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { useSelector } from "react-redux";

import { selectDestination, selectOrigin } from "../slices/navSlice";
import { getCoordinates } from "../utils/functions";

export function Map() {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  const originCoordinates = origin.location ? getCoordinates(origin.location) : null;
  const destinationCoordinates = destination?.location ? getCoordinates(destination.location) : null;

  return (
    <MapView
      className="flex-1"
      mapType="mutedStandard"
      initialRegion={{
        ...originCoordinates,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      { origin && destination && (
        <MapViewDirections
          origin={originCoordinates}
          destination={destinationCoordinates}
          apikey={process.env.GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )}
      { origin.location && (
        <Marker
            coordinate={originCoordinates}
        />
      )}
      { destination?.location && (
        <Marker
          coordinate={destinationCoordinates}
        />
      )}
    </MapView>
  );
}
