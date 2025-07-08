export default class GenericRepository {
    constructor(dao) {
        this.dao = dao;
    }

    async getAll(params) {
        return this.dao.get(params);
    }

    async getBy(params) {
        return this.dao.getBy(params);
    }

    async create(doc) {
        return this.dao.save(doc);
    }

    async createMany(items) {
        return this.dao.insertMany(items);
    }

    async update(id, doc) {
        return this.dao.update(id, doc);
    }

    async delete(id) {
        return this.dao.delete(id);
    }
}