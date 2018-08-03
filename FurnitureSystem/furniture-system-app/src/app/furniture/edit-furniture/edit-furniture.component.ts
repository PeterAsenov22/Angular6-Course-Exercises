import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { FurnitureService } from '../furniture.service'
import { ToastrService } from '../../../../node_modules/ngx-toastr'
import { FurnitureModel } from '../models/furniture.model'

@Component({
  selector: 'app-edit-furniture',
  templateUrl: './edit-furniture.component.html'
})
export class EditFurnitureComponent implements OnInit {
  bindingModel: FurnitureModel

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private furnitureService: FurnitureService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.furnitureService
      .getFurnitureById(id)
      .subscribe(data => {
        this.bindingModel = data
      })
  }

  edit (form: NgForm) {
    if (form.invalid) {
      return
    }

    this.furnitureService
      .editFurniture(this.bindingModel.id, this.bindingModel)
      .subscribe(() => {
        this.toastr.success('Furniture edited successfully.')
        this.router.navigate(['/furniture/all'])
      })
  }
}
