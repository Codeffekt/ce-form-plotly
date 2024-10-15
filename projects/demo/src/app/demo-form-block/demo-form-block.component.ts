import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { CeCoreModule, CeFormBlocksModule } from '@codeffekt/ce-core';
import { AssetElt, FormBlock } from '@codeffekt/ce-core-data';
import { CePlotlyModule } from '@codeffekt/ce-form-plotly';

@Component({
  selector: 'app-demo-form-block',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,        
    CeFormBlocksModule,
    CePlotlyModule,   
  ],
  templateUrl: './demo-form-block.component.html',
  styleUrl: './demo-form-block.component.scss'
})
export class DemoFormBlockComponent {

  form!: UntypedFormGroup;

  formBlock: FormBlock = {
    type: "asset",
    field: "asset",
    label: "Graph Plotly",
    value: {
      id: "graph.json",
      ctime: Date.now(),
      name: "Demo Plotly",
      mimetype: "application/plotly",
      size: 0,      
    } as AssetElt
  };

  private fb = inject(UntypedFormBuilder);

  ngOnInit(): void {
    this.form = this.fb.group({
      'asset': this.formBlock.value
    });  
  }

  onFormChanges(form: any) {
    console.log(form);
  }

}
