import { Component, HostListener } from "@angular/core";
import { SectionService } from "../services/services.service";
interface SectionLinha {
  main_text: string; // Required property
  secondary_text: string;
  topics: Topic[];
}

interface Topic {
  id: number;
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
  sectionProjetos: any;
  sectionNr: any;
  expanded = false;
  currentSlideLogo = 0;
  sectionMap: any;
  listTestemunhas: any;
  constructor(private sectionService: SectionService) {}
  logos = [
    {
      src: "https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/3/waverio.svg",
      alt: "Waverio",
    },
    {
      src: "https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/3/logoipsum.svg",
      alt: "Logoipsum",
    },
    {
      src: "https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/3/alterbone.svg",
      alt: "Alterbone",
    },
    {
      src: "https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/3/carbonia.svg",
      alt: "Carbonia",
    },
    {
      src: "https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/3/tinygone.svg",
      alt: "Tinygone",
    },
    {
      src: "https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/3/preso.svg",
      alt: "Preso",
    },
    {
      src: "https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/3/ridoria.svg",
      alt: "Ridoria",
    },
    {
      src: "https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/3/incanto.svg",
      alt: "Incanto",
    },
  ];

  currentIndex = 0;
  visibleLogos = this.logos.slice(0, 4);
  sectionLaudos: any;
  currentIndexComenter = 0;
  clima: any;
  ngOnInit() {
    this.autoScroll();
    this.checkScreenSize();
    this.startAutoScroll();
    this.fetchSectionData();
    this.fetchProjetos();
    this.fetchNr();
    this.fetchMap();
    this.fetchLinha();
    this.fetchInstalacao();
    this.fetchLaudos();
    this.testemunhas();
    this.listClima();
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
  projetos = [
    "../assets/images/projeto1.png",
    "../assets/images/projeto2.png",
    "../assets/images/projeto1.png",
  ];
  imagesLaudos = [
    "../assets/images/esva.png",
    "../assets/images/esva.png",
    "../assets/images/esva.png",
  ];
  images = [
    "../assets/images/s1.png",
    "../assets/images/s2.png",
    "../assets/images/s3.png",
  ];
  imgnr = [
    "../assets/images/NR2.png",
    "../assets/images/NR1.png",
    "../assets/images/NR2.png",
  ];
  logoss = [
    [
      {
        src: "../assets/images/logo9.jpg",
        alt: "Waverio",
      },
      {
        src: "../assets/images/logo13.jpg",
        alt: "Logoipsum",
      },
      {
        src: "../assets/images/logo7.jpg",
        alt: "Alterbone",
      },
      {
        src: "../assets/images/logo22.jpg",
        alt: "Carbonia",
      },
      {
        src: "../assets/images/logo15.jpg",
        alt: "Tinygone",
      },
      {
        src: "../assets/images/logo6.jpg",
        alt: "Preso",
      },
      {
        src: "../assets/images/logo11.jpg",
        alt: "Ridoria",
      },
      {
        src: "../assets/images/logo20.jpg",
        alt: "Incanto",
      },

      {
        src: "../assets/images/logo23.jpg",
        alt: "Preso",
      },
    ],
    [
      {
        src: "../assets/images/logo1.webp",
        alt: "Tinygone",
      },
      {
        src: "../assets/images/newhol.png",
        alt: "Preso",
      },
      {
        src: "../assets/images/logo16.jpg",
        alt: "Ridoria",
      },
      {
        src: "../assets/images/logo18.jpg",
        alt: "Incanto",
      },
      {
        src: "../assets/images/logo4.png",
        alt: "Tinygone",
      },
      {
        src: "../assets/images/logo28.jpg",
        alt: "Preso",
      },
      {
        src: "../assets/images/logo27.jpg",
        alt: "Ridoria",
      },
      {
        src: "../assets/images/logo12.jpg",
        alt: "Incanto",
      },
      {
        src: "../assets/images/logo2.webp",
        alt: "Tinygone",
      },
    ],
    [
      {
        src: "../assets/images/logo10.jpg",
        alt: "Ridoria",
      },
      {
        src: "../assets/images/logo8.jpg",
        alt: "Incanto",
      },
      {
        src: "../assets/images/logo3.png",
        alt: "Tinygone",
      },
      {
        src: "../assets/images/logo21.jpg",
        alt: "Preso",
      },
      {
        src: "../assets/images/logo5.webp",
        alt: "Incanto",
      },
      {
        src: "../assets/images/logo26.png",
        alt: "Incanto",
      },
      {
        src: "../assets/images/logo25.png",
        alt: "Incanto",
      },
      {
        src: "../assets/images/logo17.jpg",
        alt: "Incanto",
      },
      {
        src: "../assets/images/logo29.jpg",
        alt: "Incanto",
      },
    ],
  ];
  sectionLinha: SectionLinha = {
    main_text: "", // Provide a default empty string for main_text
    secondary_text: "",
    topics: [],
  };
  sectionInstalacao: any;
  currentSlide = 0;

  prevSlide() {
    this.currentSlide =
      this.currentSlide === 0 ? this.images.length - 1 : this.currentSlide - 1;
  }

  nextSlide() {
    this.currentSlide =
      this.currentSlide === this.images.length - 1 ? 0 : this.currentSlide + 1;
  }

  nextLogo() {
    this.currentIndex = (this.currentIndex + 1) % this.logos.length;
    this.updateVisibleLogos();
  }

  prevLogo() {
    this.currentIndex =
      (this.currentIndex - 1 + this.logos.length) % this.logos.length;
    this.updateVisibleLogos();
  }

  updateVisibleLogos() {
    const start = this.currentIndex;
    const end = (start + 4) % this.logos.length;
    if (end > start) {
      this.visibleLogos = this.logos.slice(start, end);
    } else {
      this.visibleLogos = [
        ...this.logos.slice(start),
        ...this.logos.slice(0, end),
      ];
    }
  }

  startAutoScroll() {
    setInterval(() => {
      this.nextLogo();
    }, 3000);
  }

  allImages = [
    { src: "../assets/images/esva.png", alt: "Image 1" },
    { src: "../assets/images/esva.png", alt: "Image 2" },
    { src: "../assets/images/esva.png", alt: "Image 3" },
  ];

  visibleImages = this.allImages.slice(0, 1); // Mostra a primeira imagem
  currentIndexImages = 0;

  prevImage() {
    this.currentIndexImages =
      (this.currentIndexImages - 1 + this.allImages.length) %
      this.allImages.length;
    this.updateVisibleImages();
  }

  nextImage() {
    this.currentIndexImages =
      (this.currentIndexImages + 1) % this.allImages.length;
    this.updateVisibleImages();
  }

  updateVisibleImages() {
    this.visibleImages = this.allImages.slice(
      this.currentIndexImages,
      this.currentIndexImages + 1
    );
    if (this.visibleImages.length < 1) {
      this.visibleImages = this.visibleImages.concat(
        this.allImages.slice(0, 1 - this.visibleImages.length)
      );
    }
  }

  prevSlideLogo() {
    this.currentSlideLogo =
      (this.currentSlideLogo - 1 + this.logoss.length) % this.logoss.length;
  }

  nextSlideLogo() {
    this.currentSlideLogo = (this.currentSlideLogo + 1) % this.logoss.length;
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
      },
      (error) => {
        console.error("Error fetching section data:", error);
      }
    );
  }
  fetchMap() {
    this.sectionService.getMap().subscribe(
      (data) => {
        this.sectionMap = data;
      },
      (error) => {
        console.error("Error fetching section data:", error);
      }
    );
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
}
