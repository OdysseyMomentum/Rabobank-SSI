
export class IDocument {
  id: string;
  name: string;
  issuers: IOrganisation[];
  description: string;
}

export class IOrganisation {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  keys?: string[];
}

export class ICategory {
  id: string;
  name: string;
  description: string;
  documents?: IDocument[];
}

export interface ISearchResult {
  documents: IDocument[];
  organisations: IOrganisation[];
  categories: ICategory[];
}
