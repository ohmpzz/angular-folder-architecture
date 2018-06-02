import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComponent } from '../feature-a/components/a/a.component';
import { SService } from '@app/shared';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AComponent],
  providers: [SService]
})
export class FeatureAModule { }
