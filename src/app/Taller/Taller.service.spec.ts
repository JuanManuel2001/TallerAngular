/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TallerService } from './Taller.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('Service: Taller', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TallerService]
    });
  });

  it('should ...', inject([TallerService], (service: TallerService) => {
    expect(service).toBeTruthy();
  }));
});
