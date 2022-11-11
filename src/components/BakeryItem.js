// TODO: create a component that displays a single bakery item
export default function BakeryItem({
  name,
  description,
  price,
  image,
  cart,
  updateCart,
}) {
  return (
    <div className="BakeryItem">
      <img src={image} alt={name} width="300px" height="300px" />
      <div className="Info">
        <p>{name}</p>
        <p>{description}</p>
        <p>${price}</p>
        <button
          onClick={() => {
            updateCart(name, price);
          }}
        >
          Add to Cart!
        </button>
      </div>
    </div>
  );
}
