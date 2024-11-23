import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {
  toggleChat() {
    window.open("https://wa.me/5511980720119", "_blank");
  }
}
