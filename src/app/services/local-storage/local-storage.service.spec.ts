import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService]
    });
    service = TestBed.inject(LocalStorageService);
    localStorage.clear(); // Clear localStorage before each test
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('saveData method', () => {
    it('should save data to localStorage', () => {
      const testData = [{ id: 1, name: 'Test' }];
      service.saveData(testData);
      const storedDataString = localStorage.getItem('historyLocationData');
      expect(storedDataString).toBeTruthy();
      if (storedDataString) {
        const storedData = JSON.parse(storedDataString);
        expect(storedData).toEqual(testData);
      }
    });
  });

  describe('getData method', () => {
    it('should return empty array if no data saved', () => {
      const data = service.getData();
      expect(data).toEqual([]);
    });

    it('should return saved data from localStorage', () => {
      const testData = [{ id: 1, name: 'Test' }];
      localStorage.setItem('historyLocationData', JSON.stringify(testData));
      const data = service.getData();
      expect(data).toEqual(testData);
    });
  });
});

