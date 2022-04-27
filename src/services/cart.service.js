import createApiClient from "./api.service"

class CartService {
    constructor(baseUrl = "/api") {
        this.api = createApiClient(baseUrl);
    }
    async getItemsCart() {
        return (await this.api.get("/cart/")).data;
    }
    async addItem(data) {
        return (await this.api.post("/cart/addtocart", data)).data;
    }
    async removeItem(data){
        return (await this.api.post("/cart/delete",data)).data;
    }
    
}

export default new CartService();