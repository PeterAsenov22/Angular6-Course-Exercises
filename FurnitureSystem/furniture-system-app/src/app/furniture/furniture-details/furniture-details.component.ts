import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { FurnitureModel } from '../models/furniture.model'
import { FurnitureService } from '../furniture.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-furniture-details',
  templateUrl: './furniture-details.component.html',
  styleUrls: ['./furniture-details.component.css']
})
export class FurnitureDetailsComponent implements OnInit {
  furniture$: Observable<FurnitureModel>
  id: string

  constructor(private route: ActivatedRoute, private furnitureService: FurnitureService) {
    this.id = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit () {
    this.furniture$ = this.furnitureService.getFurnitureDetails(this.id)
  }
}
