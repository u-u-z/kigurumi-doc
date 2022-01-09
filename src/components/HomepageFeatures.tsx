import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '来自娃娃们的日常',
    image: '/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        由 Kigurumi 玩家收录、整理的一手资料，原汁原味 🍹！
      </>
    ),
  },
  {
    title: '收录更多娃娃',
    image: '/img/undraw_docusaurus_tree.svg',
    description: (
      <>
        收集、整理更多，来自娃娃们认为质量较优的娃娃！🌟
      </>
    ),
  },
  {
    title: '帮助更多娃娃',
    image: '/img/undraw_docusaurus_react.svg',
    description: (
      <>
        本站仅为收集资料开设，开源至 Github！随时收录，欢迎更多娃娃参与建设！🙏（欢迎来投稿资料换站点图片）
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
