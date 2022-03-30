import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.component.html',
  styleUrls: ['./base-button.component.scss'],
})
export class BaseButtonComponent {
  @Input() isDisabled!: boolean;
  @Input() isLoading!: boolean;
  @Input() buttonText!: string;
  @Input() loadingText!: string;
  @Input() buttonClass!: string;
  @Input() buttonIcon!: string;
  @Input() buttonType!: string;
  @Input() buttonColor!: string;
  @Input() color!: string;
}
