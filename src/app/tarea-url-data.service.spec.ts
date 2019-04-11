import { TestBed } from '@angular/core/testing';

import { TareaUrlDataService } from './tarea-url-data.service';

describe('TareaUrlDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TareaUrlDataService = TestBed.get(TareaUrlDataService);
    expect(service).toBeTruthy();
  });
});
