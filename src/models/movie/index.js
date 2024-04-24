const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    releaseDate: { type: Date },
    status: { type: String, enum: ['To Watch', 'Watched'], default: 'To Watch' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
