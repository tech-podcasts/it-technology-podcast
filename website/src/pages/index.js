import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div>
          
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/podcast">
            查看所有播客列表 🎧
          </Link>
        </div>
      </div>
    </header>
  );
}

const ContributorsWall = () => {
  const { siteConfig: {organizationName, projectName} } = useDocusaurusContext();
  const projectPath = `${organizationName}/${projectName}`
  return <div className={clsx("container", styles.heroBanner)}>
    <h2>贡献者</h2>
    <a href={`https://github.com/${projectPath}/graphs/contributors`}>
      <img src={`https://contrib.rocks/image?repo=${projectPath}`} />
    </a>

    <p>Made with <a href="https://contrib.rocks">contrib.rocks</a>.</p>
  </div>
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main >
        <ContributorsWall />
      </main>
    </Layout>
  );
}
