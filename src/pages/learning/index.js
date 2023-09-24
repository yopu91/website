import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import book_data from '../../data/_learning_resource_books';
import event_data from '../../data/_learning_resource_events'

function LearningBanner() {
  return (
    <div className={styles.intro_banner}>
      <h1>Learning</h1>
      <p>Im a lifelong learner and I almost constantly look for new things to learn. On this side I'm collecting all the resources I think would be nice for anyone else to look into or read.</p>
    </div>
  )
}

function ResourceBox(props) {
  return (
    <div className={styles.resource_box}>
      <b>{props.data.title}</b>
      <br />
      <i>{props.data.author}</i>
    </div>)

}

function ResourceList() {
  let rList = book_data.map((props, idx) => {
    return (
      <ResourceBox key={idx} data={props} />
    )
  });
  return (
    <>
      <p>List of books:</p>
      {rList}
    </>
  )
}

function EventBox(props) {
  return (
    <div className={styles.resource_box}>
      <b>{props.data.title}</b>
      <br />
      <a href={props.data.link}>Link</a>
    </div>)

}

function EventList() {
  let rList = event_data.map((props, idx) => {
    return (
      <EventBox key={idx} data={props} />
    )
  });
  return (
    <div>
      <p>If you are located in our around Copenhagen I recommend checking out these events. I frequent them myself.</p>
      {rList}
    </div >
  )
}

export default function Home() {
  return (
    <Layout
      title={`Projects`}
      description="List of learning resources I have used and would recommend to others. Variety of sources, such as books, meetups and blogs">
      <header >
        <LearningBanner />
      </header>
      <section>
        <div className={styles.split_side}>
          <div className={styles.column}>
            <ResourceList />
          </div>
          <div className={styles.column}>
            <EventList />
          </div>
        </div>
      </section>
    </Layout>
  );
}

