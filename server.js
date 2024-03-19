import express from 'express';
import charactersRoutes from './routes/characters.js';
import weaponsRoutes from './routes/weapons.js';

const port = 3000;
const app = express();

app.use(express.json());

app.use('/api', charactersRoutes);
app.use('/api', weaponsRoutes);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});