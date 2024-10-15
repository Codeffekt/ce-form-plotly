import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { CeCoreService } from '@codeffekt/ce-core';
import { AssetElt } from '@codeffekt/ce-core-data';
import { PlotlyModule } from 'angular-plotly.js';

@Component({
  selector: 'ce-media-plotly',
  standalone: true,
  imports: [
    CommonModule,
    PlotlyModule,
  ],
  templateUrl: './media-plotly.component.html',
  styleUrl: './media-plotly.component.css'
})
export class MediaPlotlyComponent implements OnInit {

  @Input() elt!: AssetElt;

  private coreService = inject(CeCoreService);

  public graph: any;

  ngOnInit(): void {
    this.retrieveGraphData();
  }

  private async retrieveGraphData() {
    const response = await fetch(this.coreService.urlFromAssetId(this.elt.id));
    const graphContent = await response.json();
    this.graph = graphContent;
    console.log(this.graph);
  }
}
