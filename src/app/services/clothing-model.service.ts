import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClothingModelService {

  // Clothing types
  types: string[] = ['Dress', 'T-shirt', 'Pants', 'Skirt', 'Jacket', 'Blazer', 'Sweater'];

  // Occasions
  occasions: string[] = ['Everyday', 'Work', 'Party', 'Sport', 'Relax', 'Wedding', 'Vacation'];

  // Styles
  styles: string[] = ['Casual', 'Formal', 'Business', 'Vintage', 'Bohemian', 'Punk', 'Urban'];

  // Lengths
  lengths: string[] = ['Short', 'Medium', 'Long'];

  // Fit types
  fits: string[] = ['Slim', 'Regular', 'Loose', 'Oversized', 'Bootcut', 'Flare'];

  // Neckline types
  necklines: string[] = ['Round', 'V', 'Turtleneck', 'Boat', 'Heart', 'Shirt'];

  // Sleeve types
  sleeveTypes: string[] = ['Short sleeve', 'Long sleeve', 'Sleeveless', 'Three quarter', 'Butterfly', 'Bell'];

  // Patterns
  patterns: string[] = ['Plain', 'Striped', 'Dotted', 'Floral', 'Geometric', 'Camouflage', 'Animal print'];

  // Decorations
  decorations: string[] = ['None', 'Embroidery', 'Sequins', 'Studs', 'Lace', 'Pearls', 'Decorative buttons'];

  // Closure types
  closures: string[] = ['Buttons', 'Zip', 'Velcro', 'Tie', 'Hooks', 'Elastic'];

  // Seasons
  seasons: string[] = ['Spring', 'Summer', 'Autumn', 'Winter'];

  constructor() { }
}
