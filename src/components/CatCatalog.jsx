import cats from "../data/Cats";
import CardCats from "./CardCats";

export default function CatCatalog() {
  return (
    <section className="catalog">
      {cats.map(cat => (
        <CardCats key={cat.id} cat={cat} />
      ))}
    </section>
  );
}
