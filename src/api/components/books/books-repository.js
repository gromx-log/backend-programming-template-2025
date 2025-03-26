const { Books } = require('../../../models');

async function getBooks(offset, limit) {
  return Books.find({}).skip(offset).limit(limit);
}

async function create(title) {
  return Books.create({ title });
}

module.exports = {
  getBooks,
  create,
};