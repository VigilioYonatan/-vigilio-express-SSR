import Counter from "~/components/Counter";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

function Home() {
    const data = useLoaderData();

    return (
        <>
            <Helmet>
                <title>Hola</title>
            </Helmet>
            {JSON.stringify(data)}
            <Counter />
        </>
    );
}

export default Home;
