export default function formatTimestamp(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
};