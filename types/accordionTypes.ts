export type AccordionItem = {
    title: string;
    content: string;
};

export type AccordionProps = {
    items: AccordionItem[];
    singleOpen?: boolean;
};