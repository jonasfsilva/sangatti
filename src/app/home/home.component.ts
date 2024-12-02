import { Component, HostListener } from "@angular/core";
import { SectionService } from "../services/services.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
interface SectionLinha {
  main_text: string; // Required property
  secondary_text: string;
  topics: Topic[];
  images: any;
  slug: any;
}
interface Topic {
  id: number;
  main_text: string;
  secondary_text: string;
  order: number;
}

interface SectionProjetos {
  title: string;
  slug: any;
  secondary_text: string;
  images: { image: string }[]; // Array de objetos de imagens
  topics: Topic[]; // Reutilizando a interface Topic já definida
}
interface Topic {
  id: number;
  title: any;
  main_text: string;
  secondary_text: string;
  order: number;
}
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  title = "engenharia";
  isMobile: boolean = false;
  sectionData: any;
  sectionProjetos: SectionProjetos = {
    title: "",
    slug: "",
    secondary_text: "",
    images: [],
    topics: [],
  };
  sectionNr: any;

  sectionLinha: SectionLinha = {
    main_text: "",
    secondary_text: "",
    topics: [],
    images: [],
    slug: "",
  };
  sectionInstalacao: any;
  intervalId: any;

  expanded = false;
  contactForm: FormGroup;
  currentSlideLogo = 0;
  sectionMap: any;
  listTestemunhas: any;
  currentSlideNr: number = 0;

  sliders: any[] = [];
  currentSlide: { [key: string]: number } = {};
  intervals: { [key: string]: any } = {};

  constructor(
    private fb: FormBuilder,
    private sectionService: SectionService,
    private http: HttpClient
  ) {
    this.contactForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", Validators.required],
      company: [""],
      text: ["", Validators.required],
    });
    this.sliders.forEach((slider) => {
      this.currentSlide[slider.id] = 0;
      this.startAutoSlide(slider.id);
    });
  }

  logosList: any;
  currentIndex = 0;
  sectionLaudos: any;
  currentIndexComenter = 0;
  clima: any;
  auto: any;
  ngOnInit() {
    this.autoScroll();
    this.checkScreenSize();
    this.fetchSectionData();
    this.fetchProjetos();
    this.fetchNr();
    this.fetchMap();
    this.fetchLinha();
    this.fetchInstalacao();
    this.fetchLaudos();
    this.testemunhas();
    this.listClima();
    this.getLogos();
    this.getAuto();
  }
  ngOnDestroy(): void {
    // Clear interval when component is destroyed
    clearInterval(this.intervalId);
  }

  getAuto() {
    this.sectionService.getAuto().subscribe(
      (data) => {
        this.auto = data;
        console.log("Section Data:", data);
      },
      (error) => {
        console.error("Error fetching section data:", error);
      }
    );
  }

  getLogos() {
    this.sectionService.getLogos().subscribe(
      (data) => {
        this.logosList = data;
        console.log("Section Data:", data);
      },
      (error) => {
        console.error("Error fetching section data:", error);
      }
    );
  }
  listClima() {
    this.sectionService.getClima().subscribe(
      (data) => {
        this.clima = data;
        console.log("Section Data:", data);
      },
      (error) => {
        console.error("Error fetching section data:", error);
      }
    );
  }
  testemunhas() {
    this.sectionService.getTestemunhas().subscribe(
      (data) => {
        this.listTestemunhas = data;
      },
      (error) => {
        console.error("Error fetching section data:", error);
      }
    );
  }

  prevTestimonial() {
    this.currentTestimonialIndex =
      this.currentTestimonialIndex > 0
        ? this.currentTestimonialIndex - 1
        : this.listTestemunhas.length - 1;
  }

  nextTestimonial() {
    this.currentTestimonialIndex =
      this.currentTestimonialIndex < this.listTestemunhas.length - 1
        ? this.currentTestimonialIndex + 1
        : 0;
  }

  autoScroll() {
    const container = document.querySelector(".overflow-y-auto");
    if (container) {
      setInterval(() => {
        container.scrollTop += 1;
      }, 50);
    }
  }
  toggleMenu() {
    this.expanded = !this.expanded;
  }

  prevSlideLogo() {
    this.currentSlideLogo =
      (this.currentSlideLogo - 1 + this.logosList.length) %
      this.logosList.length;
  }

  nextSlideLogo() {
    this.currentSlideLogo = (this.currentSlideLogo + 1) % this.logosList.length;
  }
  currentTestimonialIndex: number = 0;

  @HostListener("window:resize", ["$event"])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 768; // Define mobile breakpoint
  }

  fetchSectionData() {
    this.sectionService.getSectionData().subscribe(
      (data) => {
        this.sectionData = data;
      },
      (error) => {
        console.error("Error fetching section data:", error);
      }
    );
  }
  fetchProjetos() {
    this.sectionService.getSectionData().subscribe(
      (data) => {
        this.sectionProjetos = data;
      },
      (error) => {
        console.error("Error fetching section data:", error);
      }
    );
  }
  fetchNr() {
    this.sectionService.getSectionNr().subscribe(
      (data) => {
        this.sectionNr = data;
        console.log("SectionNr Data:", data);

        const sliderId = "sectionNr"; // Unique ID for this slider
        if (this.sectionNr?.images?.length > 0) {
          this.currentSlide[sliderId] = 0; // Start from the first image
          this.startAutoSlide(sliderId); // Start auto-slide for this slider
        }
      },
      (error) => {
        console.error("Error fetching sectionNr data:", error);
      }
    );
  }

  fetchMap(): void {
    this.sectionService.getMap().subscribe(
      (data) => {
        console.log("Map Data:", data);
        this.sectionMap = data;

        if (this.sectionMap?.images?.length > 0) {
          const sliderId = "sectionMap"; // Unique ID for this slider
          this.currentSlide[sliderId] = 0; // Initialize to the first slide

          // Start auto-slide only if more than one image
          if (this.sectionMap.images.length > 1) {
            this.startAutoSlide(sliderId);
          }
        }
      },
      (error) => {
        console.error("Error fetching sectionMap data:", error);
      }
    );
  }

  startAutoSlide(sliderId: string): void {
    if (!this.intervals[sliderId]) {
      console.log(`Starting auto-slide for ${sliderId}`);
      this.intervals[sliderId] = setInterval(() => {
        const slider = this.sectionNr; // Assuming sliderId corresponds to sectionNr
        if (slider?.images?.length > 1) {
          // Update the slide index cyclically
          this.currentSlide[sliderId] =
            (this.currentSlide[sliderId] + 1) % slider.images.length;
          console.log(
            `Slider ${sliderId} moved to index ${this.currentSlide[sliderId]}`
          );
        } else {
          console.log(`Slider ${sliderId} has only one image, no auto-slide.`);
        }
      }, 5000); // Change every 5 seconds
    }
  }
  fetchLinha() {
    this.sectionService.getLinha().subscribe(
      (data) => {
        this.sectionLinha = data;
      },
      (error) => {
        console.error("Error fetching section data:", error);
      }
    );
  }
  fetchInstalacao() {
    this.sectionService.getInstalacao().subscribe(
      (data) => {
        this.sectionInstalacao = data;
      },
      (error) => {
        console.error("Error fetching section data:", error);
      }
    );
  }
  fetchLaudos() {
    this.sectionService.getLaudos().subscribe(
      (data) => {
        this.sectionLaudos = data;
      },
      (error) => {
        console.error("Error fetching section data:", error);
      }
    );
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log("Form Data:", this.contactForm.value); // Log the form data
      this.http
        .post(
          "https://octopus-app-yiik3.ondigitalocean.app/sangatti/api/v1/contacts/",
          this.contactForm.value
        )
        .subscribe(
          (response) => {
            console.log("Message sent successfully:", response);
            alert("Mensagem enviada com sucesso!");
            this.contactForm.reset();
          },
          (error) => {
            console.error("Error sending message:", error);
            alert(
              "Erro ao enviar mensagem. Verifique os dados e tente novamente."
            );
          }
        );
    } else {
      alert("Por favor, preencha todos os campos obrigatórios.");
    }
  }
}
