import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { SectionService } from "../services/services.service";

@Component({
  selector: "app-sobre-nos",
  templateUrl: "./sobre-nos.component.html",
  styleUrls: ["./sobre-nos.component.scss"],
})
export class SobreNosComponent {
  about: any;
  constructor(
    private sectionService: SectionService,
    private http: HttpClient
  ) {}
  ngOnInit() {
    this.goMenu();
  }

  goMenu() {
    this.sectionService.getAbout().subscribe(
      (data) => {
        this.about = data;
        console.log("Section menu:", data);
      },
      (error) => {
        console.error("Error fetching section data:", error);
      }
    );
  }
}
