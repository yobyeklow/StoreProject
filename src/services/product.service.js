import createApiClient from "./api.service"

class ProductService {
    constructor(baseUrl = "/api") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        return (await this.api.get("/items/")).data;
    }
    async create(data) {
        return (await this.api.post("/user/register", data)).data;
    }
    async deleteAll() {
        return (await this.api.delete("/")).data;
    }
    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }
    async update(id, data) {
        return (await this.api.put(`/${id}`, data)).data;
    }
    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
}

export default new ProductService();