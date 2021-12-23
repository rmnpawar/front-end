import { Injectable } from '@angular/core';
import { AuthorizedHttpService } from '../authorized-http.service';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {



  constructor(private http: AuthorizedHttpService) { }

  allComplaints() {
    return this.http.Get("complaints");
  }

  createComplaint(value) {
    return this.http.Post("complaints/store", value);
  }

  closeComplaint(id) {
    return this.http.Get("complaints/" + id + "/close");
  }

  createComplaintAction(value, id) {
    return this.http.Post("complaints/" + id + "/action/create", value);
  }

  complaintActions(id) {
    return this.http.Get("complaints/" + id + "/actions");
  }
}
