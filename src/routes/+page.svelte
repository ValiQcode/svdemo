<script>
  export let product = {
    name: "Awesome Product",
    description: "This is a fantastic product that you will love.",
    price: "$79.99",
    image: "static/image.jpg"
  };
</script>

<main>
  <img src={product.image} alt={product.name} />
  <h1>{product.name}</h1>
  <p>{product.description}</p>
  <h2>{product.price}</h2>
  <button>Add to Cart</button>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  img {
    width: 300px;
    height: auto;
    margin-bottom: 20px;
  }

  h1 {
    margin-bottom: 10px;
  }

  button {
    padding: 10px 20px;
    background-color: #0070f3;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0059c1;
  }
</style>
