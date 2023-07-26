import { format } from 'date-fns';

export function getFormattedDate(date) {
    return format(new Date(date), 'MMM dd, yyyy');
}
