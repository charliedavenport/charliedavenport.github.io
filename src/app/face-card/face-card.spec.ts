import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceCard } from './face-card';

describe('FaceCard', () => {
  let component: FaceCard;
  let fixture: ComponentFixture<FaceCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaceCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
