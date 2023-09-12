import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderfooterLayoutComponent } from './headerfooter-layout.component';

describe('HeaderfooterLayoutComponent', () => {
  let component: HeaderfooterLayoutComponent;
  let fixture: ComponentFixture<HeaderfooterLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderfooterLayoutComponent]
    });
    fixture = TestBed.createComponent(HeaderfooterLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
