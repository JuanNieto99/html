import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailsWalletsComponent } from './show-details-wallets.component';

describe('ShowDetailsWalletsComponent', () => {
  let component: ShowDetailsWalletsComponent;
  let fixture: ComponentFixture<ShowDetailsWalletsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowDetailsWalletsComponent]
    });
    fixture = TestBed.createComponent(ShowDetailsWalletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
