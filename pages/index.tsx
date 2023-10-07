import Head from 'next/head'
import Image from 'next/image'

import styles from '@/pages/index.module.css'
import Link from "next/link";
import PlantCard from "../plant-card/plant-card";

export default function Home() {

    const onAddButtonClick = () => {

    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <div>
                    <PlantCard/>
                </div>

                <Link href='/add' aria-label='add-link'>
                    ADD
                </Link>

            </main>

        </div>
    )
}
