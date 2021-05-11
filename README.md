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
    public date: string;

    constructor(private _datepicker: NgbMaterialDatepickerService) {}

    public open() {
        // Open Datepicker.
        const datepickerRef = this._datepicker.open({
            //
            outputFormat: 'yo/MMM/do H:mo:so',
        });

        // Receive value
        datepickerRef.subscribe((v) => {
            // Null if closed or canceld.
            if (v == null) {
                return;
            }

            this.date = v;
        });
    }
}
```

## Configuration

| Name            | Type                    | Default                          | Description                                                                                                                                           |
| --------------- | ----------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| initializeValue | Date &#124; undefined   | Current time                     | Initial value when opening Datepicker.                                                                                                                |
| headerColor     | string &#124; undefined | #8CC24A                          | Set the background color of the header.                                                                                                               |
| headerTextColor | string &#124; undefined | #000000(Black) or #FFFFFF(White) | Set the text color of the header. <br>If not specified, the appropriate color will be generated from the contrast ratio with the background color.    |
| dateColor       | string &#124; undefined | #689F37                          | Set the background color of the date area.                                                                                                            |
| dateTextColor   | string &#124; undefined | #000000(Black) or #FFFFFF(White) | Set the text color of the date area. <br>If not specified, the appropriate color will be generated from the contrast ratio with the background color. |
| outputFormat    | string &#124; undefined | yyyy-MM-dd HH:mm:ss              | Sets the output format for the selected date. Please use [the format date-fns](https://date-fns.org/v2.21.2/docs/format).                             |

## Development Roadmap

## Development
