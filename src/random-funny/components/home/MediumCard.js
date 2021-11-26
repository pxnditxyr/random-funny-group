

export const MediumCard = ({ title, text }) => {
    return (
        <article className="card-welcome">
            <section className="card-welcome__header">
                <h3> { title } </h3>
            </section>
            <section className="card-welcome__body">
                <div className="card-welcome__text">
                    <p> { text } </p>
                </div>
            </section>
        </article>
    );
};
