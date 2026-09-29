import { inject, Injectable } from '@angular/core'
import { Prompt } from './prompt.model'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PromptService {
  HttpClient = inject(HttpClient);

  baseUrl = environment.apiUrl + '/prompts';

  getPrompts(){
    return this.HttpClient.get<Prompt[]>(this.baseUrl);
  }

  getPrompt(promptId: number){
    return this.HttpClient.get<Prompt>(`${this.baseUrl}/${promptId}`);
  }

  createCategory(prompt: {title: string,content: string, categoryId: number}){
    return this.HttpClient.post<Prompt>(this.baseUrl, prompt);
  }

  updatePrompt(promptId: number, prompt: {title: string, content: string, categoryId: number}){
    return this.HttpClient.put<Prompt>(`${this.baseUrl}/${promptId}`, prompt);
  }

}
