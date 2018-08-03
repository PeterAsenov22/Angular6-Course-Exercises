import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AllFurnitureComponent } from './all-furniture/all-furniture.component'
import { MyFurnitureComponent } from './my-furniture/my-furniture.component'
import { CreateFurnitureComponent } from './create-furniture/create-furniture.component'
import { FurnitureDetailsComponent } from './furniture-details/furniture-details.component'

const furnitureRoutes: Routes = [
  { path: 'all', component: AllFurnitureComponent },
  { path: 'my', component: MyFurnitureComponent },
  { path: 'create', component: CreateFurnitureComponent },
  { path: 'details/:id', component: FurnitureDetailsComponent }
]

@NgModule({
  imports: [RouterModule.forChild(furnitureRoutes)],
  exports: [RouterModule]
})
export class FurnitureRoutingModule { }
