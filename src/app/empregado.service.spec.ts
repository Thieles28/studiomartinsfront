/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmpregadoService } from './empregado.service';

describe('Service: Empregado', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpregadoService]
    });
  });

  it('should ...', inject([EmpregadoService], (service: EmpregadoService) => {
    expect(service).toBeTruthy();
  }));
});
