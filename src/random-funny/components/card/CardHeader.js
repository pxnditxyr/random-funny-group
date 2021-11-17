

export const CardHeader = ({ urlImage, altImage }) => {
    return (
        <section className="card__header">
            <div className="card__image">
                <img src={ urlImage } alt={ altImage } />
            </div>
        </section>
    )
}
