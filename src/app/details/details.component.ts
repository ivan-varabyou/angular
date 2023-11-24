import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { HousingService } from "../housing.service";
import { HousingLocation } from "../housing-location";

@Component({
  selector: "app-details",
  standalone: true,
  imports: [CommonModule],
  template: ` <article>
    <img class="listing-photo" [src]="housingLocation?.photo" />
    <section class="listing-description">
      <h2 class="listing-headong">{{ housingLocation?.name }}</h2>
      <p class="listing-location">
        {{ housingLocation?.city }}, {{ housingLocation?.state }},
      </p>
    </section>
    <section class="listing-features">
      <h2>About this housing location</h2>
      <ul>
        <li>Units available: {{ housingLocation?.availableUnits }}</li>
        <li>Does this location have wifi: {{ housingLocation?.wifi }}</li>
        <li>Does this location have laundry: {{ housingLocation?.laundry }}</li>
      </ul>
    </section>
    <section class="listing-apply">
      <h2 class="section-heading">Apply now to live here</h2>
      <button class="primary" type="button">Apply Now</button>
    </section>
  </article>`,
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
