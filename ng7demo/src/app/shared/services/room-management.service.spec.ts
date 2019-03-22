import { TestBed } from '@angular/core/testing';

import { RoomManagementService } from './room-management.service';

describe('RoomManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoomManagementService = TestBed.get(RoomManagementService);
    expect(service).toBeTruthy();
  });
});
