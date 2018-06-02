import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';



const PROVIDERS = [AuthService, AuthGuard]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: PROVIDERS
})
export class CoreModule { }
