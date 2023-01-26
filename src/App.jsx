import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import logo from './assets/nav-logo.png';
import imgOne from './assets/nest-vision.jpg';

function App() {
  return (
    <div>
      <header class='header'>
        <a href='#'>
          <img class='logo' alt='Omnifood logo' src={logo} />
        </a>

        <nav class='main-nav'>
          <ul class='main-nav-list'>
            <li>
              <a class='main-nav-link' href='#about'>
                About
              </a>
            </li>
            <li>
              <a class='main-nav-link' href='#impact'>
                Impact
              </a>
            </li>
            <li>
              <a class='main-nav-link' href='#Programs'>
                Programs
              </a>
            </li>
            <li>
              <a class='main-nav-link' href='#pricing'>
                Pricing
              </a>
            </li>
            <li>
              <a class='main-nav-link nav-cta' href='#cta'>
                Donate
              </a>
            </li>
          </ul>
        </nav>

        <button class='btn-mobile-nav'>
          <ion-icon class='icon-mobile-nav' name='menu-outline'></ion-icon>
          <ion-icon class='icon-mobile-nav' name='close-outline'></ion-icon>
        </button>
      </header>

      <main>
        <section className='section-hero'>
          <div class='hero'>
            <video className='hero-video' id='video-bg' controls>
              <source
                src='https://digitalnest.org/wp-content/uploads/2022/11/Untitled-3.mp4'
                type='video/mp4'
              />
            </video>
          </div>
        </section>

        <section class='section-how' id='how'>
          <div class='container grid grid--2-cols grid--center-v'>
            <div class='step-text-box'>
              <p class='step-number'>Our Vision</p>
              <h3 class='heading-primary'>NEST Vision</h3>
              <p class='step-description'>
                Latinx youth deserve the same access to resources to nurture
                their talents, wisdom, and passions as their middle-class,
                upper-class peers. Yet, these under-resourced communities remain
                less likely to acquire career-building skills and graduate from
                college or have robust networks to help them secure well-paying
                jobs.
              </p>

              <p className='step-description-secondary'>
                Digital NEST creates sustainable and scalable technology
                learning centers for Latinx youth to provide the skills,
                network, and resources to foster economic equality.We achieve
                this by teaching our members the technical and soft skills to be
                competitive in our digital world,
              </p>
              <a class='main-nav-link nav-cta' href='#cta'>
                Donate
              </a>
            </div>

            <div className='step-img-box'>
              <img src={imgOne} class='step-img' alt='' />
              <p className='step-description-tertiary'>
                Providing mentors, and broadening networks to gain sustainable
                employment.
              </p>
            </div>

            <div class='step-img-box'>
              <img src='img/app/app-screen-2.png' class='step-img' alt='' />
            </div>
            <div class='step-text-box'>
              <p class='step-number'>Impact</p>
              <h3 class='heading-tertiary'>Digital NEST Stories</h3>
              <p class='step-description'>
                It’s time to offer an even playing ground for our young people
                and time to invest in a model proven to keep our youth home and
                in successful career-track jobs!
              </p>
            </div>

            <div class='step-text-box'>
              <p class='step-number'>Connect</p>
              <h3 class='heading-tertiary'>Get Involved</h3>
              <p class='step-description'>
                Digital NEST doesn’t just connect youth to the internet and
                workforce training but to a broad network of local businesses,
                elected leaders, community organizations and neighbors who
                experience the ripple effects of opportunity and optimism seeded
                at the NEST.
              </p>
            </div>
            <div class='step-img-box'>
              <img src='' class='step-img' alt='' />
            </div>
          </div>
        </section>

        <section class='section-how'>
          <div class='container grid grid--3-cols'>
            <div class='card'>
              <div class='card-container'>
                <img
                  src='https://digitalnest.org/wp-content/uploads/2022/10/PPL_thumb.png'
                  alt=''
                />
                <div class='meta'>
                  <h2>People, Projects & Leadership</h2>
                  <h3>People, Projects & Leadership</h3>
                  <p>
                    Lead teams, manage projects effectively, create influential
                    marketing campaigns & coordinate events.
                  </p>
                  <button type='button'>Learn more</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section class='section-featured'>
          <div class='container'>
            <h2 class='heading-featured-in'>As featured in</h2>
            <div class='logos'>
              <img src='img/logos/techcrunch.png' alt='Techcrunch logo' />
              <img
                src='img/logos/business-insider.png'
                alt='Business Insider logo'
              />
              <img
                src='img/logos/the-new-york-times.png'
                alt='The New York Times logo'
              />
              <img src='img/logos/forbes.png' alt='Forbes logo' />
              <img src='img/logos/usa-today.png' alt='USA Today logo' />
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}

export default App;
