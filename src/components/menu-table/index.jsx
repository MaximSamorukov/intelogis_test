import React, { useState, useMemo } from "react";
import { Menu } from "antd";
import { routes } from "../../constants";
import { getItems, getOpenKeys } from "../../helpers";

export const MenuTable = () => {
  const [items] = useState(routes);
  const [selected, setSelected] = useState(null);
  const data = useMemo(
    () => getItems(selected, setSelected)(items),
    [items, selected, setSelected]
  );
  const keys = useMemo(() => getOpenKeys(items), [items]);
  return (
    <Menu mode="inline" style={{ width: "95%" }} items={data} openKeys={keys} />
  );
};
