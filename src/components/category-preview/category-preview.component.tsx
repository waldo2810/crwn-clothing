import { FC } from "react";
import { CategoryItem } from "../../store/categories/category.types";
import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
  CategoryHeader,
  SeeMore,
} from "./category-preview.styles";

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <CategoryHeader>
        <h2>{title.toUpperCase()}</h2>
        <div>
          <Link to={`${title}`}>
            <SeeMore>SEE MORE </SeeMore>
          </Link>
        </div>
      </CategoryHeader>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
