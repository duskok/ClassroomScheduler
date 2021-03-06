import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/finally';

import { Building } from 'models/building.model';
import { BuildingService } from 'services/building.service';

@Component({
  selector: 'crs-building-layout',
  templateUrl: './building-layout.component.html',
  styleUrls: ['./building-layout.component.scss']
})
export class BuildingLayoutComponent implements OnInit {

  public buildings: Building[] = [];
  public loading = true;

  constructor(private buildingService: BuildingService) { }

  ngOnInit() {
    this.getBuildings();
  }

  public getBuildings() {
    this.buildingService.getBuildings()
      .finally(() => this.loading = false)
      .subscribe(res => this.buildings = res, err => console.error(err));
  }

}
