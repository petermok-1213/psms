import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Product } from "./classes/Product"

const EXPRESS_URL = 'http://localhost:8888'

@Injectable({providedIn: 'root'})
export class ApiService {


    constructor(private http: HttpClient) {}

    getInventory() {
        return this.http.get(EXPRESS_URL+'/inventory')
    }

    addProduct(product: Product) {
        return this.http.post(EXPRESS_URL+'/inventory', product)
    }

    updateProduct(product: Product) {
        return this.http.put(EXPRESS_URL+'/inventory', product)
    }

    deleteProduct(product: Product) {
        return this.http.delete(EXPRESS_URL+'/inventory/', {body: product})
    }

    submitPrompt(prompt: string) {
        this.http.post(EXPRESS_URL+'/prompt', prompt)
    }

}
