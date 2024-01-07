import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { itemData } from "../util/data";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export function cns(...classes: []) {
  return classes.filter(Boolean).join(" ");
}

export function filteredData(appState: itemData[], selected: string) {
  let filteredProducts = appState;

  if (selected) {
    filteredProducts = filteredProducts.filter(
      ({ houseType }: { houseType: string }) => houseType === selected
    );
  }
  return filteredProducts;
}
