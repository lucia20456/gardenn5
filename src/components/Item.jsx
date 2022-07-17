export default function Item({ item }) {
    return (
      <div className="item">
        <img src={item.pictureUrl} alt={item.title} />
        <li>{item.title}</li>
        <li>${item.price}</li>
      </div>
    );
  }
  