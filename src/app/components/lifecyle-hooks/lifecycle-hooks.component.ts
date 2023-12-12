import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, Input,
  OnChanges, OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() public value: string
  constructor() {
    console.log("constructor", this.value)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges", changes, this.value)
  }

  ngOnInit(): void {
    console.log("ngOnInit", this.value)
  }

  ngDoCheck() {
    console.log("ngDoCheck", this.value)
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit", this.value)
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked")
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit")
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked")
  }

  ngOnDestroy() {

    console.log("ngAfterViewChecked")
  }


}
