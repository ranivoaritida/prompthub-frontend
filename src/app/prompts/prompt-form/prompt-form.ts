import { Component, inject } from '@angular/core'
import { Card } from 'primeng/card';
import { Textarea } from 'primeng/textarea';
import { Select } from 'primeng/select';
import { CategoryService } from '../category-service';
import { toSignal } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-prompt-form',
  imports: [Card, Textarea, Select],
  templateUrl: './prompt-form.html',
  styleUrl: './prompt-form.scss',
})
export class PromptForm {
  categoryService = inject(CategoryService);

  categories = toSignal(this.categoryService.getCategory());

}
