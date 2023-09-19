import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"

const EXPRESS_URL = 'http://localhost:8888'

@Injectable({providedIn: 'root'})
export class ApiService {

    constructor(private http: HttpClient) {}

    getInventory() {
        return this.http.get(EXPRESS_URL+'/inventory')
    }

    submitPrompt(prompt: string) {
        this.http.post(EXPRESS_URL+'/prompt', prompt)
    }

}
