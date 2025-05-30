import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavbarComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;
  imagePreview: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      subject: [''],
      service: ['', Validators.required],
      address: ['', Validators.required],
      hasSolution: [false],
      solutionNumber: [''],
      description: ['', Validators.required],
      image: [null]
    });

    this.toggleSolutionNumber();
  }

  private toggleSolutionNumber(): void {
    this.contactForm.get('hasSolution')?.valueChanges.subscribe((active: boolean) => {
      const solutionControl = this.contactForm.get('solutionNumber');
      if (active) {
        solutionControl?.setValidators([Validators.required]);
      } else {
        solutionControl?.clearValidators();
        solutionControl?.setValue('');
      }
      solutionControl?.updateValueAndValidity();
    });
  }

  onImageChange(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.contactForm.patchValue({ image: file });
      const reader = new FileReader();
      reader.onload = () => this.imagePreview = reader.result;
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    if (this.contactForm.invalid) return;

    const formData = this.contactForm.value;
    console.log('Form da inviare:', formData);

    // Qui inserirai la logica EmailJS
  }
}
