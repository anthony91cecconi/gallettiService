import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

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
  isSubmitting = false;

  constructor(private fb: FormBuilder, private router: Router) {
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
    if (this.contactForm.invalid || this.isSubmitting) return;

    this.isSubmitting = true; // 🔹 blocca invii multipli
    const formData = this.contactForm.value;

    const templateParams = {
      fullName: formData.fullName,
      subject: formData.subject,
      service: formData.service,
      address: formData.address,
      hasSolution: formData.hasSolution ? 'Sì' : 'No',
      solutionNumber: formData.solutionNumber,
      description: formData.description,
      image: this.imagePreview || ''
    };

    emailjs.send(
      environment.emailJsServiceId,
      environment.emailJsTemplateId,
      templateParams,
      environment.emailJsPublicKey
    )
    .then(() => {
      this.contactForm.reset();
      this.imagePreview = null;
      this.isSubmitting = false;
      this.router.navigate(['/success']); // 🔹 redirect pagina di ringraziamento
    })
    .catch((error) => {
      console.error('FAILED...', error);
      this.isSubmitting = false;

      // 🔹 Fallback con mailto (apre client email predefinito, es. Outlook/Windows Mail)
      const subject = encodeURIComponent(`Richiesta di intervento - ${formData.service || 'Servizio'}`);

      const body = encodeURIComponent(
        `Gentile Galletti Solutions SRL,\n\n` +
        `è stata inviata una nuova richiesta di intervento tramite il modulo di contatto.\n\n` +
        `Dettagli del cliente:\n` +
        `- Nome e Cognome: ${formData.fullName}\n` +
        `- Indirizzo: ${formData.address}\n` +
        (formData.hasSolution ? `- Soluzione attiva: Sì\n- Numero Soluzione: ${formData.solutionNumber}\n` : ``) +
        `\nServizio richiesto: ${formData.service}\n` +
        (formData.subject ? `Oggetto: ${formData.subject}\n` : ``) +
        `\nDescrizione del problema:\n${formData.description}\n\n` +
        `Cordiali saluti,\n` +
        `Sistema di contatto automatico - Galletti Solutions SRL`
      );

      const recipient = 'GallettiSolutions@gmail.com';
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

    });
  }

  // 🔹 Getter per semplificare il template
  get f() {
    return this.contactForm.controls;
  }
}
