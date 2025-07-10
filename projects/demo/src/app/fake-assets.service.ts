import { Injectable } from '@angular/core';
import { DbArrayRes, FormInstance, FormQuery, IndexType } from '@codeffekt/ce-core-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeAssetsService {

  constructor() { }

  getAssetsArrayQuery(formId: IndexType, field: IndexType, query: FormQuery): Observable<DbArrayRes<FormInstance>> {
    return this.getFormsQuery(query);
  }

  getFormsQuery(query: FormQuery): Observable<DbArrayRes<FormInstance>> {
    return of({
      total: 2,
      limit: 0,
      offset: 0,
      elts: [{
        valid: true,
        ctime: Date.now(),
        title: 'graph-1',
        id: 'graph-1',
        root: 'form-asset',
        content: {
          id: {
            field: 'id',
            value: 'graph.json',
            type: 'index'
          },
          mimetype: {
            field: 'mimetype',
            type: "text",
            value: 'application/plotly'
          }
        }
      }, {
        valid: true,
        ctime: Date.now(),
        title: 'graph-2',
        id: 'graph-2',
        root: 'form-asset',
        content: {
          id: {
            field: 'id',
            value: 'line-chart.json',
            type: 'index'
          },
          mimetype: {
            field: 'mimetype',
            type: "text",
            value: 'application/plotly'
          }
        }
      }]
    });
  }
}
