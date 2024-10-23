import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { CeCoreService, CeNgReallyModule } from '@codeffekt/ce-core';
import { AssetElt } from '@codeffekt/ce-core-data';
import { PlotlyModule } from 'angular-plotly.js';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'ce-media-plotly',
  standalone: true,
  imports: [
    CommonModule,
    PlotlyModule,
    CeNgReallyModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
  templateUrl: './media-plotly.component.html',
  styleUrl: './media-plotly.component.scss'
})
export class MediaPlotlyComponent implements OnInit {

  @Input() mode: 'view' | 'edit' = 'edit';
  @Input() elt!: AssetElt;
  @Output() delete: EventEmitter<AssetElt> = new EventEmitter();

  hasDataError = false;

  private coreService = inject(CeCoreService);

  public graph: any;

  ngOnInit(): void {
    this.retrieveGraphData();
  }

  doDelete() {
    this.delete.next(this.elt);
  }

  private async retrieveGraphData() {
    const response = await fetch(this.coreService.urlFromAssetId(this.elt.id));
    const graphContent = await response.json();
    this.graph = graphContent;
    console.log(this.graph);
  }

}
