import Head from 'next/head'
import Image from 'next/image'

import styles from '@/pages/index.module.css'
import Link from "next/link";
import PlantCard from "../plant-card/plant-card";

export default function Home() {

    const onAddButtonClick = () => {

    }

    const plants = []

    const plantImageUrl = 'https://static.vecteezy.com/system/resources/previews/022/362/760/original/ficus-ginseng-or-banyan-tree-png.png';

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <div>
                    <PlantCard name="foobarname" imageUrl={plantImageUrl} daysLeftToWater={2}  />
                </div>

                <Link href='/add' aria-label='add-link'>
                    ADD
                </Link>

            </main>

        </div>
    )
}
