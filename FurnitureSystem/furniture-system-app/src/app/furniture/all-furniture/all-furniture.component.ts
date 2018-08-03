import { Component, OnInit } from '@angular/core'
import { FurnitureModel } from '../models/furniture.model'
import { FurnitureService } from '../furniture.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-all-furniture',
  templateUrl: './all-furniture.component.html',
  styleUrls: ['./all-furniture.component.css']
})
export class AllFurnitureComponent implements OnInit {
  furnitures$: Observable<FurnitureModel[]>
  pageSize = 3
  currentPage = 1

  constructor (private furnitureService: FurnitureService) { }

  ngOnInit () {
    this.furnitures$ = this.furnitureService.getAllFurnitures()
  }

  changePage (page) {
    this.currentPage = page
  }
}
