export interface Banner {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  category: Category;
  name: string;
  isFeatured: boolean;
  images: Image[];
}
export interface Image {
  id: string;
  url: string;
}
