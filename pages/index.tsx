import Head from 'next/head'
import Image from 'next/image'

import styles from '@/pages/index.module.css'
import Link from "next/link";

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
                <Link href='/add'>
                    <button>
                        ADD
                    </button>
                </Link>

            </main>

        </div>
    )
}
