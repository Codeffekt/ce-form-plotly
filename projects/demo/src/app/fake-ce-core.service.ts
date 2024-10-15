import { Injectable } from '@angular/core';
import { IndexType } from '@codeffekt/ce-core-data';

@Injectable({
  providedIn: 'root'
})
export class FakeCeCoreService {

  constructor() { }

  urlFromAssetId(assetId: IndexType): string {    
    return `${assetId}`;
  }
}
