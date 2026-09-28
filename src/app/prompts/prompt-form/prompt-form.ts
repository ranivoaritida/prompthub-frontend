import { Component, inject } from '@angular/core'
import { Card } from 'primeng/card';
import { Textarea } from 'primeng/textarea';
import { Select } from 'primeng/select';
import { CategoryService } from '../category-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { InputText } from 'primeng/inputtext';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from 'primeng/button';
import { PromptService } from '../prompt-service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-prompt-form',
  imports: [Card, Textarea, Select, InputText,ReactiveFormsModule, Button, RouterLink],
  templateUrl: './prompt-form.html',
  styleUrl: './prompt-form.scss',
})
export class PromptForm {

  router = inject(Router);
  categoryService = inject(CategoryService);
  promptService = inject(PromptService);

  categories = toSignal(this.categoryService.getCategory());

  form = new FormGroup({
    title: new FormControl('',{ validators: [Validators.required, Validators.maxLength(30)], nonNullable: true }),
    content: new FormControl('',{ validators: [Validators.required, Validators.minLength(10)], nonNullable: true }),
    categoryId: new FormControl(-1, { validators: [Validators.required], nonNullable: true })

  })

  submit(){

    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }

    console.log(this.form.value)
    const prompt = this.form.getRawValue();
    this.promptService.createCategory(prompt).subscribe(() =>{
      this.router.navigate(['/'])
    })
  }
}
