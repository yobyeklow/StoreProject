import createApiClient from "./api.service"

class UserService {
    constructor(baseUrl = "/api") {
        this.api = createApiClient(baseUrl);
    }
   
    async create(data) {
        return (await this.api.post("/user/register", data)).data;
    }
    async login(data) {
        return (await this.api.post("/user/login",data)).data;
    }
    
}

export default new UserService();