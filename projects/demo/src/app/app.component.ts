import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CeAssetsService, CeCoreModule, CeCoreService, SpaceFormPathService } from '@codeffekt/ce-core';
import { FakeCeCoreService } from './fake-ce-core.service';
import { FakeSpaceFormPathService } from './fake-space-form-path.service';
import { FakeAssetsService } from './fake-assets.service';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [
        CommonModule,
        RouterOutlet,        
    ],
    providers: [
        {
            provide: CeCoreService,
            useClass: FakeCeCoreService,
        },
        {
            provide: SpaceFormPathService,
            useClass: FakeSpaceFormPathService,
        },
        {
            provide: CeAssetsService,
            useClass: FakeAssetsService,
        }
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {    
  
}
