import axios from "axios";
import { message } from "antd";
import { getStringWithCoords } from "../helpers";

export const getRoute = (points) => {
  const string = getStringWithCoords(points);
  return axios({
    method: "get",
    baseURL: "http://router.project-osrm.org",
    url: `route/v1/driving/${string}`,
    params: {
      alternatives: false,
      steps: true,
      geometries: "polyline",
      annotations: true,
    },
  }).catch((error) => message.error(error?.message || "Error!!!!"));
};
