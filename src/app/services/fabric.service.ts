import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FabricService {
  // Fabric types
  types: string[] = ['Cotton', 'Silk', 'Wool', 'Polyester', 'Linen', 'Denim', 'Rayon'];

  // Textures
  textures: string[] = ['Smooth', 'Rough', 'Wrinkled', 'Silky', 'Thick', 'Soft', 'Stiff'];

  // Thickness
  thicknesses: string[] = ['Thin', 'Medium', 'Thick'];

  // Stretchability
  stretchabilities: string[] = ['High', 'Medium', 'Low', 'None'];

  // Colors
  colors: string[] = ['Red', 'Blue', 'Green', 'Yellow', 'Black', 'White', 'Brown', 'Purple', 'Orange', 'Grey'];

  // Patterns
  patterns: string[] = ['Plain', 'Striped', 'Dotted', 'Floral', 'Geometric', 'Camouflage', 'Animal print'];

  // Washing methods
  washingMethods: string[] = ['Machine wash', 'Hand wash', 'Dry clean', 'Do not wash'];

  // Resistance
  resistances: string[] = ['High', 'Medium', 'Low', 'Water-resistant', 'Tear-resistant', 'Wrinkle-resistant'];

  // Transparency
  transparencies: string[] = ['Opaque', 'Translucent', 'Transparent'];

  // Finish
  finishes: string[] = ['Matte', 'Glossy', 'Natural', 'Rough', 'Textured'];

  // Origins
  origins: string[] = ['Asia', 'Europe', 'Africa', 'America', 'Australia'];


  constructor() { }
}
