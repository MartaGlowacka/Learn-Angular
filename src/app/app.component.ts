import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  loeadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loeadedFeature = feature;
  }
}
