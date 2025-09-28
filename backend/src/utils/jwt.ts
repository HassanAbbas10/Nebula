import jwt, { JsonWebTokenError } from 'jsonwebtoken';
import logger from '../config/logger.ts';

const JWT_SECRET = 'MyChatApp';
const JWT_EXPIRES_IN = '1d';

export const jwt_token = {
  sign: (payload: any) => {
    try {
      return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
    } catch (error) {
      logger.error(`Error while signin the jwt token \n ${error}`);
      throw new JsonWebTokenError('jwt token sign failed');
    }
  },
  verify: (token: string) => {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (error) {
      logger.error(`Error while verifying the jwt token \n ${error}`);
      throw new JsonWebTokenError('Invalid token');
    }
  },
};
