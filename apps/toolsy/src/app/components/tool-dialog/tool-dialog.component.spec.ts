import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolDialogComponent } from './tool-dialog.component';

describe('ToolDialogComponent', () => {
  let component: ToolDialogComponent;
  let fixture: ComponentFixture<ToolDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
