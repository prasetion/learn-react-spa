import React, { Fragment } from "react";
import styles from "./buttonContoh.css";

export default function ButtonContoh() {
  return (
    <Fragment>
      <button className={styles.btn}>Berubah</button>
      <button className="btn-success">Tetap</button>
      <button className="btn-sm">Tetap</button>
    </Fragment>
  );
}
