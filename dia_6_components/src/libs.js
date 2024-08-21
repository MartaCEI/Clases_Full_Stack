//LIBRERIAS EXTERNAS DE JavaScript
//EJEMPLO: 
export const sumar = (num1, num2) => {
    return num1+num2;
}

// getRelativeTime
export const getRelativeTime = (date) => {
    // obtener la fecha que le mando (date)

    const now = new Date();
    //restar las fechas
    //contar el tiempo que pasó desde una a otra
    const seconds = Math.round((now - date) / 1000);
    const minutes = Math.round(seconds / 60);
    const hours = Math.round(minutes / 60);
    const days = Math.round(hours / 24);
    const months = Math.round(days / 30);
    const years = Math.round(days / 365);

    const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

    if (Math.abs(seconds) < 60) {
        return rtf.format(-seconds, 'second');
    } else if (Math.abs(minutes) < 60) {
        return rtf.format(-minutes, 'minute');
    } else if (Math.abs(hours) < 24) {
        return rtf.format(-hours, 'hour');
    } else if (Math.abs(days) < 30) {
        return rtf.format(-days, 'day');
    } else if (Math.abs(months) < 12) {
        return rtf.format(-months, 'month');
    } else {
        return rtf.format(-years, 'year');
    }
}
