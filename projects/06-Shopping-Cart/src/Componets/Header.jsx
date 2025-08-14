import { Filters } from "./Filters";

export function Header({ changeFilters }) {
  return (
    <header>
      <h1>Shopping Cart</h1>
      <Filters changeFilters={changeFilters} />
    </header>
  );
}
