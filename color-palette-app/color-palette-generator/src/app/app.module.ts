import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { ColorService } from './color.service';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@NgModule({
  declarations: [
      // Declare the ColorPaletteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // Add FormsModule to imports
  ],
  providers: [ColorService],  // Add ColorService to providers
  bootstrap: []
})
export class AppModule { }


