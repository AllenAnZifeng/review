

export interface Mention {
    color: string;
    type: "mention";
    title: string;
    variableType?: string;
    children: TextElement[];
    id: string;
    value: string;
}

export interface TextElement {
    text: string;
    bold?: boolean;
    underline?: boolean;
}

export interface ListItemContent {
    type: "lic";
    children: (TextElement|Mention)[];
}

export interface ListItem {
    type: "li";
    children: ListItemContent[];
}

export interface Clause {
    type: "clause";
    title: string;
    children: (Block|TextBlock|Paragraph|Clause)[];
}
export interface TextBlock {
    type:  "h1" | "h4";
    children: TextElement[];
}

export interface Paragraph {
    type: "p";
    text?: string;
    children?: (TextElement|Clause|Mention|Paragraph)[];
}

export interface Numbering{
    layer: number,
    number: number
}

export interface Block {
    title?: string;
    type: "block" | "ul";
    children: (Block | ListItem | Clause | Mention | TextBlock | Paragraph)[];
}

export type  Document = Block[];

