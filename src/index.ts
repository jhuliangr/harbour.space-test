const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
export function formatTimeDifference(dateString: string): string {
    const targetDate = new Date(dateString);

    const now = new Date();

    const differenceInMilliseconds = targetDate.getTime() - now.getTime();

    const totalSeconds = Math.floor(differenceInMilliseconds / 1000);

    const days = Math.floor(totalSeconds / (24 * 3600));
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${days} Day : ${hours} Hrs : ${minutes} Min : ${seconds} Seg`;
}

export function formatDateString(dateString: string, addYear: boolean = false): string {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
        throw new Error("Invalid date");
    }
    if (addYear) {
        date.setFullYear(date.getFullYear() + 1);
    }

    const day = date.getUTCDate();
    const monthIndex = date.getUTCMonth();
    const year = date.getUTCFullYear();

    return `${day} ${months[monthIndex]} ${year}`;
}