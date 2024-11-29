export type CategoryItem = {
  name: string;
  selected: boolean;
};

export type Categories = {
  [key: string]: CategoryItem[];
};

export type DataStructure = {
  categories: Categories;
};
