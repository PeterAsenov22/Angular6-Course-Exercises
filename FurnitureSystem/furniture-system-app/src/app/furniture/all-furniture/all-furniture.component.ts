import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { FurnitureModel } from '../models/furniture.model'
import { FurnitureService } from '../furniture.service'
import { AuthService } from '../../authentication/auth.service'
import { ToastrService } from '../../../../node_modules/ngx-toastr'

@Component({
  selector: 'app-all-furniture',
  templateUrl: './all-furniture.component.html',
  styleUrls: ['./all-furniture.component.css']
})
export class AllFurnitureComponent implements OnInit {
  furnitures$: Observable<FurnitureModel[]>
  pageSize = 3
  currentPage = 1

  constructor (
    private furnitureService: FurnitureService,
    public authService: AuthService,
    private toastr: ToastrService) { }

  ngOnInit () {
    this.furnitures$ = this.furnitureService.getAllFurnitures()
  }

  changePage (page) {
    this.currentPage = page
  }

  deleteItem (id: string) {
    if (this.authService.isAdmin()) {
      this.furnitureService
        .deleteFurniture(id)
        .subscribe(() => {
          this.toastr.success('Furniture deleted successfully.')
          this.furnitures$ = this.furnitureService.getAllFurnitures()
        })
    }
  }
}
