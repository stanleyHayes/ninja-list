export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(ninja => {
        return {params: {id: ninja.id.toString()}}
    });

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (ctx) => {
    const id = ctx.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    return {
        props: {ninja: data}
    }
}

const NinjaDetailPage = ({ninja}) => {
    return (
        <div>
            <h1>{ninja.name}</h1>
            <p>{ninja.address.city}</p>
            <p>{ninja.website}</p>
            <p>{ninja.phone}</p>
        </div>
    )
}

export default NinjaDetailPage;