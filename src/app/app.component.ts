import { Component, Renderer2, ViewChild, OnInit } from '@angular/core'
import { MatSidenav } from '@angular/material/sidenav'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'at-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Arseniy Tsipenyuk'
  showFiller = false

  toggleValue: boolean = true
  toggleTheme() {
    if (this.toggleValue === true) {
      this._renderer.addClass(document.body, 'solarized-dark')
      this._renderer.removeClass(document.body, 'solarized-light')
    } else {
      this._renderer.addClass(document.body, 'solarized-light')
      this._renderer.removeClass(document.body, 'solarized-dark')
    }
    this.toggleValue = !this.toggleValue
  }

  // toggleTheme = new FormControl(false)

  constructor(private _renderer: Renderer2) {}

  ngOnInit() {
    // this.toggleTheme.valueChanges.subscribe((toggleValue) => {
    //   if (toggleValue === true) {
    //     this._renderer.addClass(document.body, 'solarized-dark')
    //     this._renderer.removeClass(document.body, 'solarized-light')
    //   } else {
    //     this._renderer.addClass(document.body, 'solarized-light')
    //     this._renderer.removeClass(document.body, 'solarized-dark')
    //   }
    // })
  }
}
