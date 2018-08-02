import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { FurnitureModel } from '../models/furniture.model'
import { FurnitureService } from '../furniture.service'

@Component({
  selector: 'app-my-furniture',
  templateUrl: './my-furniture.component.html',
  styleUrls: ['./my-furniture.component.css']
})
export class MyFurnitureComponent implements OnInit {
  furnitures$: Observable<FurnitureModel[]>

  constructor(private furnitureService: FurnitureService) { }

  ngOnInit() {
    this.furnitures$ = this.furnitureService.getMyFurniture()
  }

  deleteItem (id: string) {
    this.furnitureService.deleteFurniture(id).subscribe(() => {
      this.furnitures$ = this.furnitureService.getMyFurniture()
    })
  }
}
