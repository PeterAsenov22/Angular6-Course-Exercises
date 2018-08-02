import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { FurnitureModel } from './models/furniture.model'
import { CreateFurnitureModel } from './models/create-furniture.model'

const createUrl = 'http://localhost:5000/furniture/create'
const allUrl = 'http://localhost:5000/furniture/all'
const myFurnitureUrl = 'http://localhost:5000/furniture/mine'
const detailsUrl = 'http://localhost:5000/furniture/details/'
const deleteUrl = 'http://localhost:5000/furniture/delete/'

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {
  constructor (private http: HttpClient) { }

  createFurniture (model: CreateFurnitureModel) {
    return this.http.post(createUrl, model)
  }

  getAllFurnitures () {
    return this.http.get<FurnitureModel[]>(allUrl)
  }

  getFurnitureDetails (id: string) {
    return this.http.get<FurnitureModel>(detailsUrl + id)
  }

  getMyFurniture () {
    return this.http.get<FurnitureModel[]>(myFurnitureUrl)
  }

  deleteFurniture (id: string) {
    return this.http.delete(deleteUrl + id)
  }
}
