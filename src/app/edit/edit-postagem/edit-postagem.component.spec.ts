import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPostagemComponent } from './edit-postagem.component';

describe('EditPostagemComponent', () => {
  let component: EditPostagemComponent;
  let fixture: ComponentFixture<EditPostagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPostagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
