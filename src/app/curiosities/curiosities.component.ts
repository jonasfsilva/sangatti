import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NewsService } from "../news-interna/posts.service";

@Component({
  selector: "app-curiosities",
  templateUrl: "./curiosities.component.html",
  styleUrls: ["./curiosities.component.css"],
})
export class CuriositiesComponent {
  posts: any[] = [];
  constructor(private router: Router, private newsService: NewsService) {}
  ngOnInit() {
    this.newsService.getPosts().subscribe(
      (response) => {
        this.posts = response;
      },
      (error) => {
        console.error("Erro ao carregar notícias:", error);
      }
    );
  }
}
