import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "cleanHtml",
})
export class CleanHtmlPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return "";

    // Remover classes
    let cleanedValue = value.replace(/class="[^"]*"/g, "");

    // Remover estilos inline
    cleanedValue = cleanedValue.replace(/style="[^"]*"/g, "");

    // Remover tags <p> e <span> mas manter o conteúdo
    cleanedValue = cleanedValue.replace(/<\/?(p|span)[^>]*>/g, "");

    return cleanedValue;
  }
}
