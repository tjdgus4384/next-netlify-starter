import styles from "./index.module.css";

const ProductPage = () => {
  return (
    <div className={styles.productPage}>
      <div className={styles.pageHeading}>
        <div className={styles.defaultChip}>
          <div className={styles.default}>Default</div>
        </div>
        <div className={styles.aZChip}>
          <div className={styles.default}>A-Z</div>
        </div>
        <div className={styles.listChip}>
          <div className={styles.default}>List view</div>
        </div>
        <div className={styles.freshAugustContainer}>
          <span className={styles.fresh}>Fresh</span>
          <span className={styles.august212023}> — August 21, 2023</span>
        </div>
        <div className={styles.produce}>Produce</div>
        <div className={styles.divider} />
      </div>
      <div className={styles.navigation}>
        <div className={styles.worldPeas}>World Peas</div>
        <div className={styles.shop}>Shop</div>
        <div className={styles.newstand}>Newstand</div>
        <div className={styles.whoWeAre}>Who we are</div>
        <div className={styles.myProfile}>My profile</div>
        <button className={styles.cartButton}>
          <div className={styles.basket3}>Basket (3)</div>
        </button>
      </div>
      <div className={styles.tomato}>
        <div className={styles.heirloomTomato}>Heirloom tomato</div>
        <div className={styles.lb}>$5.99 / lb</div>
        <div className={styles.grownInSan}>
          Grown in San Juan Capistrano, CA
        </div>
        <img
          className={styles.edONeilAvvdzlhdowaUnsplashIcon}
          alt=""
          src="/edoneilavvdzlhdowaunsplash-1@2x.png"
        />
      </div>
      <div className={styles.ginger}>
        <div className={styles.heirloomTomato}>Organic ginger</div>
        <div className={styles.lb}>$12.99 / lb</div>
        <div className={styles.grownInSan}>Grown in Huntington Beach, CA</div>
        <img
          className={styles.edONeilAvvdzlhdowaUnsplashIcon}
          alt=""
          src="/noonbrewzicb4-ekmakunsplash@2x.png"
        />
      </div>
    </div>
  );
};

export default ProductPage;
