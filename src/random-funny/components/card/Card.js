import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';

export const Card = ({ urlImage, altImage, text }) => {
    return (
        <article className="card">
            <CardHeader urlImage={ urlImage } altImage={ altImage } />
            <CardBody text={ text } />
        </article>
    )
}
