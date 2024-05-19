export interface Photo {
    id: string;
    alt_description: string;
    urls: {
        small: string;
        regular: string
    };
}

export interface FetchPhotosResponse {
  total_pages: number;
  results: Photo[];
}