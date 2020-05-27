import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomelistComponent } from './welcomelist.component';

describe('WelcomelistComponent', () => {
  let component: WelcomelistComponent;
  let fixture: ComponentFixture<WelcomelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
