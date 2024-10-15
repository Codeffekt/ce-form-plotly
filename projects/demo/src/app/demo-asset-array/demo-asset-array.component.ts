import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CeFormsModule } from '@codeffekt/ce-core';
import { FormInstance, FormWrapper } from '@codeffekt/ce-core-data';
import { CePlotlyModule } from '@codeffekt/ce-form-plotly';

@Component({
  selector: 'app-demo-asset-array',
  standalone: true,
  imports: [
    CommonModule,    
    CeFormsModule,
    CePlotlyModule,   
  ],
  templateUrl: './demo-asset-array.component.html',
  styleUrl: './demo-asset-array.component.scss'
})
export class DemoAssetArrayComponent {

  form: FormInstance = {
    id: "form-asset",
    root: "form-asset",
    ctime: 0,
    title: "Formulaires asset",
    valid: true,
    content: {
      data: {
        type: "assetArray",
        field: "data",
        label: "Graphes",
        value: "none"
      },
      text: {
        type: "text",
        field: "text",
        label: "Texte"
      }
    }
  };

  formWrapper = FormWrapper.fromForm(this.form);
}
