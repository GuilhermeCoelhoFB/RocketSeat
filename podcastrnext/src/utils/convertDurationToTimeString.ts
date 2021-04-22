export function convertDurationToTimeString(duration: number) {
    const hours = Math.floor(duration / (60 * 60));
    const minutos = Math.floor((duration % 3600) / 60);
    const seconds = Math.floor(duration % 60);

    const timeString = [hours, minutos, seconds]
        .map(unit => String(unit).padStart(2, '0'))
        .join(':');

    return timeString;
}