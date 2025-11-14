import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { CeCoreService, CeNgReallyModule } from '@codeffekt/ce-core';
import { AssetElt } from '@codeffekt/ce-core-data';
import { PlotlyModule } from 'angular-plotly.js';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Layout } from 'plotly.js-dist-min';

@Component({
  selector: 'ce-media-plotly',
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

  @Input() mode: 'minimal' | 'view' | 'edit' = 'edit';
  @Input() elt!: AssetElt;
  @Output() delete: EventEmitter<AssetElt> = new EventEmitter();

  hasDataError = false;

  private coreService = inject(CeCoreService);
  private elementRef = inject(ElementRef);

  public graph: any;

  public layout!: Layout;

  ngOnInit(): void {
    this.retrieveGraphData();
  }

  doDelete() {
    this.delete.next(this.elt);
  }

  doDownload() {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([JSON.stringify(this.graph, undefined, 4)], { type: `text/json` }));
    a.download = this.elt.originalname ?? this.elt.name;
    a.click();
  }

  doFullscreen() {
    if (!document.fullscreenElement) {
      // If the document is not in full screen mode
      // make the video full screen
      this.elementRef.nativeElement.requestFullscreen();
    } else {
      // Otherwise exit the full screen
      document.exitFullscreen?.();
    }
  }

  private async retrieveGraphData() {
    const response = await fetch(this.coreService.urlFromAssetId(this.elt.id));
    const graphContent = await response.json();
    this.graph = graphContent;
    this.layout = this.graph.layout;
  }

}
