import Head from "next/head";
import {Fragment} from "react";
import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {ninjas: data}
    }
}

const NinjasPage = ({ninjas}) => {

    return (
        <Fragment>
            <Head>
                <title>Ninja List | Ninjas</title>
                <meta name="keywords" content="ninja list"/>
            </Head>
            <div>
                <h1>Ninjas</h1>
                {ninjas.map(ninja => {
                    return (
                        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
                            <a className={styles.single}>
                                <h3>{ninja.name}</h3>
                            </a>
                        </Link>
                    )
                })}
            </div>
        </Fragment>
    )
}

export default NinjasPage;