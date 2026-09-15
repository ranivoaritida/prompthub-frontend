import { Component, computed, signal } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { PromptList } from "./prompts/prompt-list/prompt-list";
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [FormsModule, PromptList]
})
export class App {
}
