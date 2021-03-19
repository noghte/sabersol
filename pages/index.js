import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import {
  TabContent, TabPane, Nav, NavItem, NavLink, Card, CardImg, Button, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Row, Col, Container
} from 'reactstrap';

import classnames from 'classnames';
import Blog from '../components/Blog';

export default function Home() {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  const getStyle = colName => {
    return {
      borderRadius: 12,
      //display:colName === 'sharing'? 'none':'block'
    }

  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Saber Soleymani</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        <h1 className={styles.title}>
          Saber Soleymani
         </h1>

        <p className={styles.description}>
          CV, blog, likings, and {' '}
          <code className={styles.code}>code</code>
        </p>

        <Row>
          <Col xs="6">
          <Card style={getStyle('sharing')}>
          <CardBody>
          <img className={styles.icon} src="/img/blog.png" alt="Card image cap" />

                <CardTitle>Blog</CardTitle>
                <CardSubtitle>Click on titles</CardSubtitle>
                <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
              </CardBody>
     </Card>
          </Col>
          <Col xs="3">
          <Card style={getStyle('sharing')}>
                <CardBody>
                  <img className={styles.icon} src="/img/sharing.png" alt="Sharing" />
                  <CardTitle>Sharing</CardTitle>
                  <CardSubtitle>is caring</CardSubtitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                </CardBody>
              </Card>
          </Col>
          <Col xs="3">
          <Card>
                <CardBody>
                <img className={styles.icon} src="/img/sharing.png" alt="Sharing" />
                  <CardTitle>Photos</CardTitle>
                  <CardSubtitle>The photos</CardSubtitle>
                  <CardText>
                    carousel maybe?
                  </CardText>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                <img className={styles.icon} src="/img/sharing.png" alt="Tweets" />
                  <CardTitle>Tweets</CardTitle>
                  <CardSubtitle>twitter.com/sabersol</CardSubtitle>
                  <CardText>
                 tweets
                  </CardText>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                <img className={styles.icon} src="/img/code.png" alt="Tweets" />
                  <CardTitle>Code</CardTitle>
                  <CardSubtitle>github.com/noghte</CardSubtitle>
                  <CardText>code links to github</CardText>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                <img className={styles.icon} src="/img/cv.png" alt="CV" />
                  <CardTitle>CV</CardTitle>
                  <CardSubtitle>pdf</CardSubtitle>
                  <CardText>
                    cv contents
                  </CardText>
                </CardBody>
              </Card>
          </Col>
        </Row>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/img/vercel.svg" alt="NextJS Logo" className={styles.logo} />
        </a>
      </footer>
    </div>

  )
}
