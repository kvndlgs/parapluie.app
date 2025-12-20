import { useRouteError } from 'react-router-dom';

export function NotFound() {
    const error = useRouteError();
    return (
        <section>
            <h1>404 - Page introuvable</h1>
            <p> { error ==  '404' ? "La page que vous cherchez n'existe pas." : "" }  </p>
        </section>
    )
}
