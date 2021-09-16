import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  sections;
  base_url: string = "http://localhost:8000/api/sections";

  constructor(private auth: AuthenticationService) { }

  async getAll() {
    if (this.sections) {
      return this.sections;
    }

    this.sections = await this.auth.http.Get(this.base_url).toPromise();
    return this.sections;
  }

  update(section) {
    return this.auth.http.Put(this.base_url + `/${section.id}`, section);
  }

  create(section) {
    return this.auth.http.Post(this.base_url, {"section_name": section});
  }

  delete(id) {
    return this.auth.http.Delete(this.base_url + `/${id}`);
  }
}
