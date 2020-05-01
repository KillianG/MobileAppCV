import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CVPage } from './cv.page';

describe('CVPage', () => {
  let component: CVPage;
  let fixture: ComponentFixture<CVPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CVPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CVPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
