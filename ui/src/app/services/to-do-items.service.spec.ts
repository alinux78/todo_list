import { TestBed } from '@angular/core/testing';

import { ToDoItemsService } from "./to-do-items.service";

describe('ToDoItemsService', () => {
  let service: ToDoItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
