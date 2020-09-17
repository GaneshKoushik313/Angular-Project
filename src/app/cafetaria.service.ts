import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CafetariaService {

    url =  "http://localhost:3000/restaurants"
    constructor(private http:HttpClient) { }

    getData(){
        return this.http.get(this.url)
    }

    saveCafetariaData(data){
        return this.http.post(this.url,data)
    }

    deleteCafetariaData(id){
        return this.http.delete(`${this.url}/${id}`)
    }

    getCafetariaData(id){
        return this.http.get(`${this.url}/${id}`)
    }

    editCafetaria(id,data){
        return this.http.put(`${this.url}/${id}`,data)
    }
}
