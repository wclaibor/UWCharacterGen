import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { IconGeneratorComponent } from './icon-generator.component'

describe('IconGeneratorComponent', () => {
  let component: IconGeneratorComponent
  let fixture: ComponentFixture<IconGeneratorComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconGeneratorComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(IconGeneratorComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
