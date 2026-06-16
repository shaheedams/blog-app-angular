import { CommonModule } from '@angular/common';
import { Component, input, model, output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [CommonModule, FormsModule],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  ptocData = input<string>('');
  cData = 'Hi from child';
  outputData = output<string>();

  modelData = model<string>('Model Data s');

  sendData() {
    this.outputData.emit(this.cData);
    this.modelData.set('new data');
  }
  constructor() {}
}
