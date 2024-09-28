// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

export const hotelsLoader = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {});
  });

  return loading;
};
