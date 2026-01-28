import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModoLabComponent } from './modo-lab.component';

describe('ModoLabComponent', () => {
  let component: ModoLabComponent;
  let fixture: ComponentFixture<ModoLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModoLabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModoLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
