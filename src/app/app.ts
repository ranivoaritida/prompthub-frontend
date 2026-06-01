import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [FormsModule]
})
export class App {
count = 10
constructor(){
  setTimeout(() => {
    this.count = 20
  }, 2000)
}

onClick(){
  console.log('clicked')
}


}
