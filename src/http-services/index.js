import axios from "axios";
import { getStringWithCoords } from "../helpers";

export const getRoute = (points) => {
  const string = getStringWithCoords(points);
  return axios({
    method: "get",
    baseURL: "http://router.project-osrm.org",
    url: `route/v1/driving/${string}`,
  });
};
