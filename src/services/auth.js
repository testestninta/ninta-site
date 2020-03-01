import jwt from 'jsonwebtoken';

class Auth {
  static isAuthenticated(token) {
    try {
      jwt.verify(token, process.env.REACT_APP_JWT_SECRET);
      return true;
    } catch (e) {
      return false;
    }
  }

  static getParams(token) {
    try {
      const decoded = jwt.decode(token);
      return decoded;
    } catch (e) {
      return null;
    }
  }
}

export default Auth;
