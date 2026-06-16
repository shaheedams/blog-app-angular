import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsText } from './rxjs-text';

describe('RxjsText', () => {
  let component: RxjsText;
  let fixture: ComponentFixture<RxjsText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
