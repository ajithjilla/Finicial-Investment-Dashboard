import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate',
  standalone: true
})
  export class CustomDatePipe implements PipeTransform {
    transform(value: any, format: string = 'mediumDate'): string {
      if (!value) return '';
  
      const date = new Date(value);
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
  
      // Customize the format as needed
      return date.toLocaleDateString('en-IN', options);
    }
  }