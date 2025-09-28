import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import logger from './config/logger.ts';
import 'dotenv/config';
import DB_connection from './config/database.ts';
import authRoutes from './routes/auth.routes.ts';
import userRoutes from './routes/user.routes.ts';

const app = express();

app.use(express.json());
app.use(
  morgan('combined', {
    stream: { write: (msg) => logger.info(msg.trim()) },
  }),
);
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

DB_connection();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`app is listening on http://localhost:${PORT}`);
});

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
