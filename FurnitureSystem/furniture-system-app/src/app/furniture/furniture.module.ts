import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { FurnitureRoutingModule } from './furniture.routing'
import { NgxPaginationModule } from 'ngx-pagination'

import { furnitureComponents } from '.'

import { FurnitureService } from './furniture.service'

import { CustomMinDirective } from '../directives/custom-min-validator.directive'
import { CustomMaxDirective } from '../directives/custom-max.validator.directive'

@NgModule({
  declarations: [
    ...furnitureComponents,
    CustomMinDirective,
    CustomMaxDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    FurnitureRoutingModule,
    NgxPaginationModule
  ],
  providers: [
    FurnitureService
  ]
})
export class FurnitureModule { }
