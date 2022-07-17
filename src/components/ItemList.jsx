import Item from "./Item";

export default function ItemList({ items }) {
  return (
    <div className="item-container">
      {items.length === 0 ? (
        <div>cargando...</div>
      ) : (
        <>
          <h1>REMERAS</h1>
          <ul className="list">
            {items
              .filter((item) => item.category === "Remeras")
              .map((item) => (
                <Item key={item.id} item={item} />
              ))}
          </ul>
          <h1>BUZOS</h1>
          <ul className="list">
            {items
              .filter((item) => item.category === "Buzos")
              .map((item) => (
                <Item key={item.id} item={item} />
              ))}
          </ul>
        </>
      )}
    </div>
  );
}
