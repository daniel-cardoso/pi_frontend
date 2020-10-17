import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostagemGeralComponent } from './postagem-geral.component';

describe('PostagemGeralComponent', () => {
  let component: PostagemGeralComponent;
  let fixture: ComponentFixture<PostagemGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostagemGeralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostagemGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
