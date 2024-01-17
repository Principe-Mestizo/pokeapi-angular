import { Component,  HostBinding, OnInit, computed, signal  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-pokeapi';
  private darkMode = signal<boolean>(false);

  protected readonly darkmode$ = computed( () => this.darkMode())

  @HostBinding('class.dark') get mode(){
    return this.darkMode();
  }
  setDarkMode() {
    this.darkMode.set(!this.darkMode())
    
  }

  getIconPath(): string {
    return this.darkMode() ? 'assets/dark.svg' : 'assets/light.svg';
  }

}
