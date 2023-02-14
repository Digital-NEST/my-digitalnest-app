import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import logo from './assets/nav-logo.png';
import imgOne from './assets/nest-vision.jpg';
import blogo from './assets/bizznest-logo.png';
import gdimg from './assets/gd-img.jpg';
import devimg from './assets/webdev-img.jpg';
import bizzimg from './assets/about-bizz.png';

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
            <div class='hero-text-box'>
              <img class='bizz-logo' alt='Omnifood logo' src={blogo} />
              <h1 className='heading-primary-white'>
                turn ideas into reality.
              </h1>
              <p class='hero-description'>
                bizzNEST is a team of young creatives who provide
                budget-friendly web design, video, graphic design and
                photography services that help propel businesses forward to
                achieve their goals.
              </p>
              <a href='#cta' class='btn btn--full margin-right-sm'>
                Start eating well
              </a>

              <a href='#how' class='btn btn--outline'>
                Learn more &darr;
              </a>
            </div>
          </div>
        </section>

        <section class='section-how' id='how'>
          <div class='container grid grid--2-cols grid--center-v'>
            <div class='step-text-box'>
              <p class='step-number'>WHAT WE DO</p>
              <h3 class='heading-primary'>About bizzNEST</h3>
              <p class='step-description'>
                Our bizzNEST interns are hired into a paid, in-house two year
                internship program that simulates a digital media agency. Our
                goal is to deliver high-quality digital media services that both
                empower your business or organization through creative marketing
                collateral and provide interns the opportunity to polish their
                technical and soft skills through on-the- job training and staff
                mentorship.
              </p>

              <a class='btn btn--outline' href='#cta'>
                Hire us &rarr;
              </a>
            </div>

            <div className='step-img-box'>
              {/* <img src={bizzimg} class='step-img' alt='' /> */}
            </div>
          </div>
        </section>

        <section className='section-meals' id='meals'>
          <div className='container center-text margin-bottom-md'>
            <span className='subheading'>WHAT WE CREATE</span>
            <h2 className='heading-primary'>Services</h2>
            <p className='step-description'>
              bizzNEST is a team of young creatives who provide budget-friendly
              web design, video, graphic design and photography services that
              help propel businesses forward to achieve their goals. bizzNEST
              youth have access to the latest software and camera equipment to
              deliver quality marketing services at below- market rates.
            </p>
          </div>

          <div class='container grid grid--3-cols margin-bottom-md'>
            <div class='meal'>
              <img src={gdimg} class='meal-img' alt='Japanese Gyozas' />
              <div class='meal-content'>
                <div class='meal-tags'>
                  <span class='tag tag--vegetarian'>Branding</span>
                </div>
                <p class='meal-title'>Graphic Design</p>
                <ul class='meal-attributes'>
                  <li class='meal-attribute'>
                    <ion-icon class='meal-icon' name='bulb-outline'></ion-icon>
                    <span>Logos</span>
                  </li>
                  <li class='meal-attribute'>
                    <ion-icon
                      class='meal-icon'
                      name='logo-instagram'
                    ></ion-icon>
                    <span>
                      <strong>Social Media</strong> Graphics
                    </span>
                  </li>
                  <li class='meal-attribute'>
                    <ion-icon class='meal-icon' name='map-outline'></ion-icon>
                    <span>Flyers</span>
                  </li>
                  <li class='meal-attribute'>
                    <ion-icon
                      class='meal-icon'
                      name='images-outline'
                    ></ion-icon>
                    <span>Business Cards</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class='meal'>
              <img src={devimg} class='meal-img' alt='Japanese Gyozas' />
              <div class='meal-content'>
                <div class='meal-tags'>
                  <span class='tag tag--vegetarian'>Branding</span>
                </div>
                <p class='meal-title'>Web Design & Development</p>
                <ul class='meal-attributes'>
                  <li class='meal-attribute'>
                    <ion-icon
                      class='meal-icon'
                      name='construct-outline'
                    ></ion-icon>

                    <span>Website Re-designs</span>
                  </li>
                  <li class='meal-attribute'>
                    <ion-icon
                      class='meal-icon'
                      name='desktop-outline'
                    ></ion-icon>
                    <span>
                      <strong>Front-end</strong> Development
                    </span>
                  </li>
                  <li class='meal-attribute'>
                    <ion-icon
                      class='meal-icon'
                      name='server-outline'
                    ></ion-icon>
                    <span>
                      <strong>Back-end</strong> Development
                    </span>
                  </li>
                  <li class='meal-attribute'>
                    <ion-icon
                      class='meal-icon'
                      name='logo-wordpress'
                    ></ion-icon>
                    <span>
                      <strong>WordPress</strong> & more
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class='meal'>
              <img src={gdimg} class='meal-img' alt='Japanese Gyozas' />
              <div class='meal-content'>
                <div class='meal-tags'>
                  <span class='tag tag--vegetarian'>Branding</span>
                </div>
                <p class='meal-title'>Video Production</p>
                <ul class='meal-attributes'>
                  <li class='meal-attribute'>
                    <ion-icon class='meal-icon' name='cut-outline'></ion-icon>
                    <span>Video Editing</span>
                  </li>
                  <li class='meal-attribute'>
                    <ion-icon
                      class='meal-icon'
                      name='megaphone-outline'
                    ></ion-icon>
                    <span>Promotional Videos</span>
                  </li>
                  <li class='meal-attribute'>
                    <ion-icon
                      class='meal-icon'
                      name='school-outline'
                    ></ion-icon>
                    <span>Instructional Videos</span>
                  </li>
                  <li class='meal-attribute'>
                    <ion-icon
                      class='meal-icon'
                      name='videocam-outline'
                    ></ion-icon>
                    <span>Testimonial Videos</span>
                  </li>
                </ul>
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
