import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofpokemonComponent } from './listofpokemon.component';

describe('ListofpokemonComponent', () => {
  let component: ListofpokemonComponent;
  let fixture: ComponentFixture<ListofpokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListofpokemonComponent]
    });
    fixture = TestBed.createComponent(ListofpokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
