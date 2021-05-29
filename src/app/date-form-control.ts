import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl{
    setValue(value: string, options: any) {
        // doesn't allow letters
        if (value.match(/[^0-9|\/]/gi)) {
            super.setValue(this.value, {...options, emitModelToViewChange: true})
            return;
        }
        // add a slash after 2 numbers have been added
        if(value.length === 2){
            super.setValue(value + '/', {...options, emitModelToViewChange: true});
            return;
        }
        super.setValue(value, {...options, emitModelToViewChange: true});
    }
}
