export type FaqItem = {
    type: string;
    question: string;
    answer:
    {
        type: string;
        data: string;
    }[]
}
