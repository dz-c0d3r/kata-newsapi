export interface GetNewsRequest {
  country?: string;
}

export interface GetNewsSuccess {
  status: string;
  totalResults: number;
  articles: Articles[];
}

export interface Articles {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
