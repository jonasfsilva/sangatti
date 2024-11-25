import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SectionService {
  private apiBanner =
    "https://octopus-app-yiik3.ondigitalocean.app/sangatti/api/v1/sections/";

  private apiUrl =
    "https://octopus-app-yiik3.ondigitalocean.app/sangatti/api/v1/sections/nossos-servicos-e-solucoes";
  private apiProjetos =
    "https://octopus-app-yiik3.ondigitalocean.app/sangatti/api/v1/sections/projetos-mecanicos";
  private apiNr =
    "https://octopus-app-yiik3.ondigitalocean.app/sangatti/api/v1/sections/adequacao-de-nr12";
  private apiMap =
    "https://octopus-app-yiik3.ondigitalocean.app/sangatti/api/v1/sections/mapa-direita";
  private apiLinha =
    "https://octopus-app-yiik3.ondigitalocean.app/sangatti/api/v1/sections/linha-de-vida";

  private apiInstalacao =
    "https://octopus-app-yiik3.ondigitalocean.app/sangatti/api/v1/sections/projeto-e-instalacao";
  private apiLaudos =
    "https://octopus-app-yiik3.ondigitalocean.app/sangatti/api/v1/sections/laudos-e-inspecoes";
  private apiTestimonials =
    "https://octopus-app-yiik3.ondigitalocean.app/sangatti/api/v1/testimonials/";
  private apiClima =
    "https://octopus-app-yiik3.ondigitalocean.app/sangatti/api/v1/sections/projeto-de-climatizacao";
  private apiPost =
    "https://octopus-app-yiik3.ondigitalocean.app/sangatti/api/v1/posts/";
  private apiLogos =
    "https://octopus-app-yiik3.ondigitalocean.app/sangatti/api/v1/sections/atendemos-empresas-nacionais-e-multinacionais-em-todo-o-brasil";
  private apiMenu =
    "https://octopus-app-yiik3.ondigitalocean.app/sangatti/api/v1/menu-items/";
  private apiAbout =
    "https://octopus-app-yiik3.ondigitalocean.app/sangatti/api/v1/sections/sobre-nos";

  constructor(private http: HttpClient) {}

  getSectionData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getSectionProjetos(): Observable<any> {
    return this.http.get<any>(this.apiProjetos);
  }
  getSectionNr(): Observable<any> {
    return this.http.get<any>(this.apiNr);
  }
  getMap(): Observable<any> {
    return this.http.get<any>(this.apiMap);
  }
  getLinha(): Observable<any> {
    return this.http.get<any>(this.apiLinha);
  }
  getInstalacao(): Observable<any> {
    return this.http.get<any>(this.apiInstalacao);
  }
  getLaudos(): Observable<any> {
    return this.http.get<any>(this.apiLaudos);
  }
  getTestemunhas(): Observable<any> {
    return this.http.get<any>(this.apiTestimonials);
  }
  getClima(): Observable<any> {
    return this.http.get<any>(this.apiClima);
  }

  getPost() {
    return this.http.get<any>(this.apiPost);
  }
  getLogos() {
    return this.http.get<any>(this.apiLogos);
  }
  getMenu() {
    return this.http.get<any>(this.apiMenu);
  }
  getAbout() {
    return this.http.get<any>(this.apiAbout);
  }
  getBanners() {
    return this.http.get<any>(this.apiBanner);
  }
}
