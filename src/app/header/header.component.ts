import { Component } from "@angular/core";
import { SectionService } from "../services/services.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  menus: any;
  showMenu = false;
  constructor(
    private sectionService: SectionService,
    private http: HttpClient
  ) {}
  ngOnInit() {
    this.goMenu();
  }
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  goMenu() {
    this.sectionService.getMenu().subscribe(
      (data) => {
        this.menus = data;
        console.log("Section menu:", data);
      },
      (error) => {
        console.error("Error fetching section data:", error);
      }
    );
  }
}
