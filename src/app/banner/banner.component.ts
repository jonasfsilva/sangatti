import { Component, OnInit, HostListener } from "@angular/core";
import { SectionService } from "../services/services.service";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.css"],
})
export class BannerComponent implements OnInit {
  banners: any[] = [];
  activeIndex: number = 0;
  autoSlideInterval: any;
  currentIndex = 0;
  isMobile = window.innerWidth <= 768;
  constructor(private sectionService: SectionService) {}

  ngOnInit(): void {
    this.sectionService.getBanners().subscribe(
      (data) => {
        this.banners = data;
        this.autoSlide();
      },
      (error) => console.error("Error fetching banners", error)
    );
  }
  @HostListener("window:resize", ["$event"])
  onResize() {
    this.updateIsMobile();
  }

  updateIsMobile() {
    this.isMobile = window.innerWidth <= 768;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.banners.length;
  }
  openLink(url: string) {
    console.log(url);
    window.open(url, "_blank");
  }
  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.banners.length) % this.banners.length;
  }
  autoSlide(): void {
    setInterval(() => {
      this.nextSlide();
    }, 8000);
  }
}
