import Head from "next/head";

import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
          molestias quaerat suscipit vel magnam ad sint dolorum officiis alias
          eveniet iure sed eos iste veritatis illo, fugiat odit modi ullam.
        </p>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          voluptatibus, consequatur asperiores dolor nihil quae, fuga in id
          harum veniam voluptate. Maiores nesciunt obcaecati repellat.
          Consequatur ab eum dolor aperiam.
        </p>

        <Link href="/ninja">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
