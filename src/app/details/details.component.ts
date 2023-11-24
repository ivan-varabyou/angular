import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { HousingService } from "../housing.service";
import { HousingLocation } from "../housing-location";

@Component({
  selector: "app-details",
  standalone: true,
  imports: [CommonModule],
  template: ` <p>{{ housingLocation?.name }} {{ housingLocation?.id }}</p> `,
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent {
  router: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  constructor() {
    const housingLocationId = Number(this.router.snapshot.params["id"]);
    this.housingLocation =
      this.housingService.getHousingLocationById(housingLocationId);
  }
}
