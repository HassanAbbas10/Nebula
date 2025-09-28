import type { Request, Response } from 'express';
import logger from '../config/logger.ts';

const getAllUsers = (_req: Request, res: Response): void => {
  try {
    res.json({
      success: true,
      message: 'Able to get all the users',
    });
  } catch (error) {
    logger.error(`Error while gwtting the users \n ${error}`);
    throw new Error(`Error while gwtting the users \n ${error}`);
  }
};

export default getAllUsers;
