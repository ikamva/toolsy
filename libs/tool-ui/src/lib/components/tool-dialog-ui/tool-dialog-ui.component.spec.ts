import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolDialogUiComponent } from './tool-dialog-ui.component';

describe('ToolDialogUiComponent', () => {
  let component: ToolDialogUiComponent;
  let fixture: ComponentFixture<ToolDialogUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolDialogUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolDialogUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
