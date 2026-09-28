import { inject, Injectable } from '@angular/core'
import { Category } from './category.model';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  HttpClient = inject(HttpClient);
  baseUrl = environment.apiUrl + '/categories';

  getCategory(){
    return this.HttpClient.get<Category[]>(this.baseUrl);
  }

}
