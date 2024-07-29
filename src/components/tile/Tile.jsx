function Tile({ imageSrc, altText, title, children }) {
    return (
        <section>
            {imageSrc && <img src={imageSrc} alt={altText || 'Image'} />}
            {title && <h2>{title}</h2>}
            <section>
                {children}
            </section>
        </section>
    );
}
export default Tile