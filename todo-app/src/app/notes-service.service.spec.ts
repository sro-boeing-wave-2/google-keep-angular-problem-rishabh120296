import { TestBed, inject } from '@angular/core/testing';
import { NotesServiceService } from './notes-service.service';
import { ApiService } from './api.service';
import { ApiMockService } from './api-mock.service';

describe('NotesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NotesServiceService,
        {
          provide: ApiService,
          useClass: ApiMockService
        }
      ]
    });
  });

  it('should ...', inject([NotesServiceService], (service: NotesServiceService) => {
    expect(service).toBeTruthy();
  }));

});
