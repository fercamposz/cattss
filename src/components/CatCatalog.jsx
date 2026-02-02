import CardCats from "./CardCats";

export default function CatCatalog({ cats, onFavoritar, onAdotar }) {
  return (

    <section className="catalog">
      {cats.map((cat) => (
        <CardCats 
          key={cat.id} 
          cat={cat} 
          onFavoritar={onFavoritar}
          onAdotar={onAdotar}
        />
      ))}
    </section>
  );
}