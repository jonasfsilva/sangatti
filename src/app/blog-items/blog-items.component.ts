import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NewsService } from "./posts.service";
import { SectionService } from "../services/services.service";

@Component({
  selector: "app-blog-items",
  templateUrl: "./blog-items.component.html",
  styleUrls: ["./blog-items.component.css"],
})
export class BlogItemsComponent {
  posts: any;
  constructor(
    private router: Router,
    private newsService: NewsService,
    private sectionService: SectionService
  ) {}

  ngOnInit() {
    this.sectionService.getPost().subscribe(
      (response) => {
        this.posts = response;
      },
      (error) => {
        console.error("Erro ao carregar notícias:", error);
      }
    );
  }
}
