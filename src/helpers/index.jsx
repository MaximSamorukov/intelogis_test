import React from "react";
import { Checkbox } from "antd";
import { difference } from "lodash";

export const getItems = (selected, setSelected) => (items) => {
  const normalizedArray = items.map(({ label, key, points }) => {
    return {
      key,
      label: (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Checkbox
            checked={key === selected}
            name={key}
            style={{ marginRight: "7px" }}
            onChange={(e) => {
              const { name, checked } = e.target;
              if (checked) {
                setSelected(name);
              } else {
                setSelected(null);
              }
            }}
          />
          {label}
        </div>
      ),
      children: points.map(getItemFromCoords(label)),
    };
  });
  return normalizedArray;
};

export const getItemFromCoords =
  (label) =>
  ({ lat, lng }, index) => {
    return {
      key: `${label}_${index}`,
      label: `lat: ${lat}; lng: ${lng}`,
    };
  };

export const getOpenKeys = (items) => items.map(({ key }) => key);

export const getDiff = (allKeys, restKeys) => {
  return difference(allKeys, restKeys)[0];
};
