// Importation des modules nécessaires
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

// Importation des fichiers de configuration et de routes
require('dotenv').config(); // pour utiliser les variables d'environnement
require('./src/config/passport'); // configuration de Passport

// Importation des routeurs
const userRouter = require('./src/routes/users');
const productRouter = require('./src/routes/products');
const authRouter = require('./src/routes/auth');

// Initialisation de l'application Express
const app = express();

// Configuration du middleware pour analyser le JSON
app.use(express.json());

// Configuration du middleware pour Passport
app.use(passport.initialize());

// Connexion à MongoDB
mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)
    .then(() => console.log('MongoDB connected successfully.'))
        .catch(err => console.error('MongoDB connection error:', err));
// Définition des routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/auth', authRouter);

// Middleware pour gérer les erreurs 404
app.use((req, res, next) => {
    res.status(404).send('We think you are lost!');
});

// Middleware pour gérer les autres erreurs
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Démarrage du serveur
const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
