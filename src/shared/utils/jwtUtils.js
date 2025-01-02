import { jwtDecode } from "jwt-decode";

import * as test from "jwt-decode";
import logger from "@shared/utils/logger";

export const validateJWTStructure = (token) => {
  const parts = token.split(".");
  return (
    parts.length === 3 && parts.every((part) => /^[A-Za-z0-9-_]+$/.test(part))
  );
};

export const isTokenExpired = (token) => {
  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    const booleanValue = decoded.exp && decoded.exp < currentTime;
    return booleanValue;
  } catch (err) {
    return true;
  }
};

export const decodeToken = (token) => {
  try {
    return jwtDecode(token);
  } catch (err) {
    return null;
  }
};
