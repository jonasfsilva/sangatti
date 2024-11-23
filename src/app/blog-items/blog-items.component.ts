import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NewsService } from "./posts.service";

@Component({
  selector: "app-blog-items",
  templateUrl: "./blog-items.component.html",
  styleUrls: ["./blog-items.component.css"],
})
export class BlogItemsComponent {
  posts: any;
  constructor(private router: Router, private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getPosts().subscribe(
      (response) => {
        this.posts = response.slice(0, 4);
      },
      (error) => {
        console.error("Erro ao carregar notícias:", error);
      }
    );
  }
}
