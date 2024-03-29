import { Component, WritableSignal, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  yesButtonPressed: WritableSignal<boolean> = signal(false);
  numberOfNoClicked: WritableSignal<number> = signal(0);
  noText: string = 'No';

  pleaseSayYesStringArray: Array<string> = [
    'No',
    'Please say yes',
    'Really? Are you sure?',
    'Think again?',
    'Last chance?',
    'Surely not?',
    'You might regret it!',
    'Are you certain?',
    'Are you absolutely certain?',
    'This could be a mistake!',
    'Wouldnt you reconsider?',
    'Is that your final answer?',
    'Pretty pweasssee?',
    "Fine, I'll stop asking...",
    'Just kidding! PLEASE SAY YES!',
    "Okay, I'm really really sad now :'(",
    "You're breaking my kokoro ;(",
  ];

  public yesButtonClicked(): void {
    this.yesButtonPressed.set(true);
  }

  public noButtonClicked(): void {
    this.numberOfNoClicked.update((value: number) => value + 1);
  }

  public getNoText(): string {
    return this.pleaseSayYesStringArray[
      this.numberOfNoClicked() % this.pleaseSayYesStringArray.length
    ];
  }

  public calculateFontSize(): string {
    return (this.numberOfNoClicked() + 1) * 26 + 'px';
  }
}
