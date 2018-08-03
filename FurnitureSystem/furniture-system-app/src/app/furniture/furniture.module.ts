import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

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
    RouterModule
  ],
  providers: [
    FurnitureService
  ]
})
export class FurnitureModul { }
