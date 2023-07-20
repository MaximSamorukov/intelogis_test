import React, { useState, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Menu } from "antd";
import { routes } from "../../constants";
import { getItems, getOpenKeys, getDiff } from "../../helpers";
import { selectRoute, deSelectRoute } from "../../state/route";

export const MenuTable = () => {
  const [items] = useState(routes);
  const currentRoute = useSelector((state) => state.route);
  const allRoutes = useSelector((state) => state.routes);
  const dispatch = useDispatch();
  const setSelected = useCallback(
    (name) => {
      if (name) {
        dispatch(
          selectRoute(allRoutes.find(({ key }) => key === name) || null)
        );
      } else {
        dispatch(deSelectRoute(null));
      }
    },
    [allRoutes, dispatch]
  );
  const data = useMemo(
    () => getItems(currentRoute?.selectedRoute, setSelected)(allRoutes),
    [allRoutes, currentRoute?.selectedRoute, setSelected]
  );
  const keys = useMemo(() => getOpenKeys(items), [items]);
  return (
    <Menu
      mode="inline"
      style={{ width: "95%" }}
      items={data}
      openKeys={keys}
      onOpenChange={(rest) => {
        setSelected(() => getDiff(keys, rest));
        const selectedRouteName = getDiff(keys, rest);
        const currentRouteRaw = allRoutes.find(
          (i) => i.key === selectedRouteName
        );
        dispatch(selectRoute(currentRouteRaw));
      }}
    />
  );
};
