import { SearchTextPipe } from './search-text.pipe';
import {ITableMeteoData} from "../typing/types";

describe('SearchTextPipe', () => {
  let pipe: SearchTextPipe;

  beforeEach(() => {
    pipe = new SearchTextPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return items unchanged when value is empty', () => {
    const items: ITableMeteoData[] = [
      { time: '12:00', rain: 52 },
      { time: '15:00', rain: 52 },
    ];
    const filteredItems = pipe.transform(items, { isTime: true }, '');
    expect(filteredItems).toEqual(items);
  });

  it('should filter items based on time property', () => {
    const items: ITableMeteoData[] = [
      { time: '12:00', rain: 52},
      { time: '15:00', rain: 62 },
      { time: '18:00', rain: 72 },
    ];
    const filteredItems = pipe.transform(items, { isTime: true }, '15');
    expect(filteredItems.length).toBe(1);
    expect(filteredItems[0].time).toBe('15:00');
  });

  it('should handle case where no items match the search', () => {
    const items: ITableMeteoData[] = [
      { time: '12:00', rain: 52 },
      { time: '15:00', rain: 52 },
    ];
    const filteredItems = pipe.transform(items, { isTime: true }, '18');
    expect(filteredItems.length).toBe(0);
  });
});
