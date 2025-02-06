import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RevealSdkSettings, RevealViewOptions } from '@revealbi/ui';

@Component({
  selector: 'app-master-view',
  imports: [],
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MasterViewComponent {
  dashboardOptions: RevealViewOptions = {
    visualizations: {
      menu: {
        copy: false,
        duplicate: false
      }
    }
  };
  constructor() {
    RevealSdkSettings.serverUrl = 'https://samples.revealbi.io/upmedia-backend/reveal-api/';
  }
}
