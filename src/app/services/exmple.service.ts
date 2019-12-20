import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExmpleService {

  constructor(private httpClient: HttpClient) { }

  getSampleData() {
    return this.httpClient.get(environment.sampleUrl);
  }
}
