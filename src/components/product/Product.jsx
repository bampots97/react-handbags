function Product({isBestSeller, title, price, image, isNewCollection}) {
    return (
        <article>
          {isBestSeller && <span>Best Seller</span>}
            {isNewCollection && <span>New collection</span>}

            {image && <img src={image} alt="placeholder "/> }
            <p>{title}</p>
            <h4>€{price},-</h4>
        </article>
    )
}

export default Product