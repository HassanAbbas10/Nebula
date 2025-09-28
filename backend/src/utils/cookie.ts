import type { Request, Response } from 'express';
export const cookies = {
  getOptions: () => ({
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict' as const,
    maxAge: 15 * 60 * 1000,
  }),
  set: (res: Response, name: string, value: string, options: object = {}) => {
    res.cookie(name, value, {
      ...cookies.getOptions(),
      ...options,
    });
  },

  clear: (res: Response, name: string, options = {}) => {
    res.clearCookie(name, { ...cookies.getOptions(), ...options });
  },

  get: (req: Request, name: string) => {
    return req.cookies[name];
  },
};
