import { jwtDecode } from "jwt-decode";

interface DecodedTokenProps {
  exp: number;
}

const decodeToken = (token: string) => jwtDecode(token);

//returns true, 3 minutes before token expires
export const isExpired = (token: string) => {
  const { exp } = decodeToken(token) as DecodedTokenProps;
  return new Date().getTime() / 1000 + 150 >= exp;
};
