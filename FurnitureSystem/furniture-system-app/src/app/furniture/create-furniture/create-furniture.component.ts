import { Component } from '@angular/core'
import { CreateFurnitureModel } from '../models/create-furniture.model'
import { NgForm } from '@angular/forms'
import { FurnitureService } from '../furniture.service'

@Component({
  selector: 'app-create-furniture',
  templateUrl: './create-furniture.component.html'
})
export class CreateFurnitureComponent {
  public bindingModel: CreateFurnitureModel

  constructor(private furnitureService: FurnitureService) {
    this.bindingModel = new CreateFurnitureModel('', '', null , '', null, '')
  }

  create (form: NgForm) {
    if (form.invalid) {
      return
    }

    this.furnitureService
      .createFurniture(this.bindingModel)
      .subscribe()
  }
}
