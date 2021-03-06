import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCellComponent } from './data-cell.component';

describe('DataCellComponentComponent', () => {
  let component: DataCellComponent;
  let fixture: ComponentFixture<DataCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
