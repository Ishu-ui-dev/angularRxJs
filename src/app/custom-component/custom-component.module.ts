import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule, MatIconModule, MatTabsModule, MatButtonModule, MatSidenavModule, MatListModule, 
  MatInputModule, MatSliderModule, MatProgressSpinnerModule, MatCardModule, MatChipsModule,MatFormFieldModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule, 
    MatSliderModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule
  ],
  exports : [
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule
  ],
  declarations: []
})
export class CustomComponentModule { }
