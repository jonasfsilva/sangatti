import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NewsService {
  private apiUrl = "https://shark-app-23npe.ondigitalocean.app/api/v1/posts/";
  id = "3496df27-764b-4f87-bd17-c1d7c128a734";
  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    const url = `${this.apiUrl}?client=${this.id}`;
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
