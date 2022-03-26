import React, { useEffect, useState } from "react";
import "./styles.scss";
import axios from "axios";
type Category = {
  id: number;
  name: string;
};
export type SidebarProps = {
  categoryId: React.Dispatch<React.SetStateAction<number | undefined>>;
};
export const SideBar = ({ categoryId }: SidebarProps) => {
  const [categories, setCategories] = useState<Category[]>();

  useEffect(() => {
    axios.get(`https://api.thecatapi.com/v1/categories`).then((res) => {
      const data = res?.data;
      setCategories(data);
    });
  }, []);
  function onClickCategory(category: Category) {
    categoryId(category.id);
  }
  return (
    <div className="sidebar">
      <div className="categories">
        {categories?.map((category, index) => (
          <div
            key={index}
            className="category"
            onClick={() => onClickCategory(category)}
          >
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
};
