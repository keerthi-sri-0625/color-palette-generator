import { Component, OnInit } from '@angular/core';
import { ColorService } from '../color.service';  // Import ColorService

@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.css']
})
export class ColorPaletteComponent implements OnInit {
  palette: string[] = [];  // Array to hold generated colors
  numberOfColors: number = 5;  // Default number of colors in the palette

  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.generatePalette();  // Generate palette on component initialization
  }

  // Function to generate a new color palette
  generatePalette(): void {
    this.palette = this.colorService.generateColorPalette(this.numberOfColors);
  }

  // Function to handle change in the number of colors input
  updatePaletteSize(event: any): void {
    this.numberOfColors = event.target.value;
    this.generatePalette();
  }
}

