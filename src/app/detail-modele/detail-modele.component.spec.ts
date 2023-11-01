import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailModeleComponent } from './detail-modele.component';

describe('DetailModeleComponent', () => {
  let component: DetailModeleComponent;
  let fixture: ComponentFixture<DetailModeleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailModeleComponent]
    });
    fixture = TestBed.createComponent(DetailModeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
