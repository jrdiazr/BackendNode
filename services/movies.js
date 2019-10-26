const MongoLib = require('../lib/mongo');

class MoviesService {
  constructor() {
    this.collection = 'movies';
    this.mongoDB = new MongoLib();
  }
  async getMovies({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const movies = await this.mongoDB.getAll(this.collection, query);
    return movies || [];
  }

  async getMovie({ movieId }) {
    const movies = await this.mongoDB.get(this.collection, movieId);
    return movies || {};
  }

  async createMovie({ movie }) {
    const createMovieId = await this.mongoDB.create(this.collection, movie);
    return createMovieId || [];
  }

  async updateMovie({ movieId, movie } = {}) {
    const updateMovieId = await this.mongoDB.update(
      this.collection,
      movieId,
      movie
    );
    return updateMovieId || [];
  }

  async deleteMovie() {
    const deleteMovieId = await Promise.resolve(moviesMock[0].id);
    return deleteMovieId || [];
  }
}

module.exports = MoviesService;
