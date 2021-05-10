# ngb-material-datepicker

## Dependencies

-   [calendarize](https://github.com/lukeed/calendarize)
-   [date-fns](https://github.com/date-fns/date-fns)
-   [wcag-contrast](https://github.com/tmcw/wcag-contrast)

## Quick start

```shell
$ npm install --save ngb-material-datepicker
```

## Usage

```typescript
import { NgbMaterialDatepickerService } from 'ngb-material-datepicker';

@Component({
    selector: 'app-example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.scss'],
})
export class AppComponent {
    constructor(private _datepicker: NgbMaterialDatepickerService) {}

    public open() {
        this._datepicker.open();
    }
}
```

## Configuration

## Development Roadmap

## Development
