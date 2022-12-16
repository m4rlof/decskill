export const counter = (date: Date) => {
    let seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
    return seconds
}