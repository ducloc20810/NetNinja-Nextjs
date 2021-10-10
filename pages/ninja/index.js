import React, { useEffect, useState } from "react";
import styles from "../../styles/Ninja.module.css";
import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (res.status !== 200)
    return {
      props: {
        error: "Cannot fetch data",
      },
    };
  else {
    const data = await res.json();
    return {
      props: {
        ninjas: data,
      },
    };
  }
};
export default function Ninjas({ ninjas, error }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const search = query.get("search");
    if (search) {
      setData(ninjas.filter((ninja) => ninja.name.includes(search)));
    } else setData(ninjas);
  });

  return (
    <div>
      <h1>All Ninjas</h1>
      {data &&
        data.map((ninja) => (
          <Link href={"/ninja/" + ninja.id} key={ninja.id}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        ))}

      {error && <div>{error}</div>}
      {(data === null || data.length === 0) && <div>No ninja is found</div>}
    </div>
  );
}
