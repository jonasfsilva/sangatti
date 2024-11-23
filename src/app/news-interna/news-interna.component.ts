import { Component, OnInit, SimpleChanges } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Meta, Title } from "@angular/platform-browser";
import { NewsService } from "./posts.service";

@Component({
  selector: "app-news-interna",
  templateUrl: "./news-interna.component.html",
  styleUrls: ["./news-interna.component.css"],
})
export class NewsInternaComponent implements OnInit {
  newsSlug: string | null = null;
  newsDetail: any = null;
  otherNews: any[] = [];
  currentUrl: string = "";

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private metaService: Meta,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.newsSlug = params.get("slug");
      if (this.newsSlug) {
        this.newsDetail = null;
        this.loadNewsDetail(this.newsSlug);
        this.loadOtherNews();
      }
      this.currentUrl = this.generateCurrentUrl();
    });
    this.scrollToTop();
  }

  loadNewsDetail(newsId: string): void {
    this.newsService.getNewsBySlug(newsId).subscribe(
      (data) => {
        this.newsDetail = data;
        this.updateMetaTags();
      },
      (error) => {
        console.error("Error loading news:", error);
      }
    );
  }

  updateMetaTags(): void {
    if (this.newsDetail) {
      const url = `http://localhost:4200/noticia/${this.newsSlug}`;
      this.titleService.setTitle(this.newsDetail.title);
      this.metaService.updateTag({
        property: "og:title",
        content: this.newsDetail.title,
      });
      this.metaService.updateTag({
        property: "og:description",
        content: this.newsDetail.description,
      });
      this.metaService.updateTag({
        property: "og:image",
        content: this.newsDetail.imageUrl,
      });
      this.metaService.updateTag({ property: "og:url", content: url });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.scrollToTop();
  }

  shareOnFacebook(): void {
    const currentUrl = this.generateCurrentUrl(); // Ensure this URL is valid
    const encodedUrl = encodeURIComponent(currentUrl);
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    window.open(facebookUrl, "_blank");
  }

  generateCurrentUrl(): string {
    const baseUrl = window.location.origin;
    const path = this.route.snapshot.url
      .map((segment) => segment.path)
      .join("/");

    return `${baseUrl}/#/${path}`;
  }

  shareOnWhatsApp(): void {
    const currentUrl = this.generateCurrentUrl();
    const encodedUrl = encodeURIComponent(currentUrl);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedUrl}`;
    window.open(whatsappUrl, "_blank");
  }

  loadOtherNews(): void {
    this.newsService.getPosts().subscribe(
      (data) => {
        this.otherNews = data;
      },
      (error) => {
        console.error("Erro ao carregar outras notícias:", error);
      }
    );
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
