import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import usersRoutes from './routes/user.routes.js';

import connectToDB from './db/connectToDB.js';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', usersRoutes);

// app.get('/', (req, res) => {
// 	res.send('Hello World!');
// });

app.listen(PORT, () => {
	connectToDB();
	console.log(`Server is running on the port ${PORT}`);
});
