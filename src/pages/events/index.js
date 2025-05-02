// EventsPage.jsx
import React from 'react';
import './events.css';
import Layout from '../../components/Layout';

const EventsPage = () => (
  <Layout>
    <section className="section events-section">
      <div className="container">
        <div className="content">
          <h1>Event Calendar</h1>
          <div className="calendar-wrapper">
            <iframe
              className="responsive-iframe"
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FKolkata&showPrint=0&mode=AGENDA&showNav=0&showTitle=0&showDate=0&showCalendars=0&src=Y18xZjI4NTYzYjUyZjNhMDFmOGY3Y2VlZTljMzM5NzAwZThkYmIyNTZhMzk4NTcxZjEzMWRiMGVjMzUxYzIxNGRlQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23795548"
              frameBorder="0"
              scrolling="no"
              title="Events Calendar"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default EventsPage;
