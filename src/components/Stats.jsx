import React from "react";
import styles from "./stats.module.scss";
import groupimage from "../images/image-header-desktop.jpg";

function Stats() {
  return (
    <div className={styles.container}>
      <div className={styles.left__content}>
        <h1 className={styles.title}>
          Get <span className={styles.insights}> insights </span> that help your
          business grow.
        </h1>

        <div className={styles.description}>
          {" "}
          <p>
            {" "}
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
        </div>
        <div className={styles.stats}>
          <div className={styles.stats__content}>
            {" "}
            <h1>10k+</h1>
            <p>companies</p>{" "}
          </div>
          <div className={styles.stats__content}>
            <h1>314</h1> <p>templates</p>{" "}
          </div>
          <div className={styles.stats__content}>
            {" "}
            <h1>12m+</h1> <p>queries</p>
          </div>
        </div>
      </div>
      <div className={styles.right__content}>
        <img src={groupimage} alt="img" className="img" />
      </div>
    </div>
  );
}

export default Stats;
