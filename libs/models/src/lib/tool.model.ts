export interface ITool {
    name: string;
    media: IMedia;
    description: Description;
    tags: string[];
    web: IWeb;
}

interface IMedia {
    logo: string;
    snapshot: string[];
    videos: string[];
}


interface IWeb {
    url: string;
    website_name: string;
}

interface Description {
    line: string;
    full: string;
}