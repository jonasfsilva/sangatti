import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NewsService {
  private apiUrl =
    "https://octopus-app-yiik3.ondigitalocean.app/sangatti/api/v1/posts/";

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.get<any>(url);
  }
  getNewsBySlug(slug: string): Observable<any> {
    const url = `${this.apiUrl}?slug=${slug}`;
    return this.http.get<any>(url);
  }
  getNewsById(id: string): Observable<any> {
    const url = `${this.apiUrl}${id}/`;
    return this.http.get<any>(url);
  }
}
