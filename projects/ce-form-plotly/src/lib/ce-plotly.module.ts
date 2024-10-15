import { NgModule } from "@angular/core";
import { MediaStoreService } from "@codeffekt/ce-core";
import { MediaPlotlyComponent } from "./media-plotly/media-plotly.component";

import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from "angular-plotly.js";

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
    imports: [        
        MediaPlotlyComponent,
    ]
})
export class CePlotlyModule {

    constructor(storeService: MediaStoreService) {

        storeService.setComponents({
            "application/plotly": {
                useClass: MediaPlotlyComponent,
            },
        });
    }
}