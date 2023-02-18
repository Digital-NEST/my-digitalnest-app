import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import logo from './assets/nav-logo.png';
import blogo from './assets/bizznest-logo.png';
import gdimg from './assets/gd-img.jpg';
import devimg from './assets/webdev-img.jpg';
import bizzimg from './assets/image-programs-DN.png';
import bizzOne from './assets/img-bizznest-one.png';
import bizzTwo from './assets/img-bizznest-two.png';
import bizzThree from './assets/img-bizznest-three.png';

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

        <section class='section' id='how'>
          <div class='container grid grid--2-cols grid--center-v'>
            <div class='step-text-box'>
              <p class='subheading'>About</p>
              <h3 class='heading-primary-styled'>bizzNEST</h3>
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
              <img src={bizzimg} class='step-img' alt='' />
            </div>
          </div>
        </section>

        <section className='section-meals' id='meals'>
          <div className='container  margin-bottom-md'>
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
        <section class='section section-bg' id='how'>
          <div class='container'>
            <span class='subheading'>Become a client</span>
            <h2 class='heading-secondary'>
              Your daily dose of health in 3 simple steps
            </h2>
          </div>

          <div class='container grid grid--2-cols grid--center-v'>
            <div class='step-text-box'>
              <p class='step-number'>01</p>
              <h3 class='heading-tertiary'>Project Request</h3>
              <p class='step-description'>
                Please take the time to complete our screening form. Provide us
                with as much information as you can about what you would like
                our team to build. We guarantee a response within 48 business
                hours of submission.
              </p>
            </div>

            <div className='step-img-box'>
              <img src={bizzTwo} class='step-img big' alt='' />
            </div>

            {/* STEP 02 */}

            <div className='step-img-box'>
              <img src={bizzOne} class='step-img' alt='' />
            </div>

            <div class='step-text-box'>
              <p class='step-number'>02</p>
              <h3 class='heading-tertiary'>Client Intake Meeting</h3>
              <p class='step-description'>
                We'll get in touch with you and collect additional information
                to help us determine if we are able to accommodate your needs
                and ensure that the project is completed according to your
                timeline. <strong> (We stay bizzsy at BizzNEST!)</strong> Rest
                assured, we provide flexible timelines.
              </p>
            </div>

            {/* STEP 03 */}

            <div class='step-text-box'>
              <p class='step-number'>03</p>
              <h3 class='heading-tertiary'>Creat Contract</h3>
              <p class='step-description'>
                If you decide to work with us, we will craft a contract tailored
                to your needs and budget. Once you sign off, we will get to work
                right away!
              </p>
            </div>

            <div className='step-img-box'>
              <img src={bizzThree} class='step-img med' alt='' />
            </div>
          </div>
        </section>

        <section class='section-cta' id='cta'>
          <div class='container'>
            <div class='cta'>
              <div class='cta-text-box'>
                <h2 class='heading-secondary'>bizzNEST Project Request</h2>
                <p class='cta-text'>
                  First, we need you to ﬁll out our screening form. Once you
                  submit the form, we promise you will hear from us in 48 hours.
                  Thank you for choosing us for your next project!
                </p>

                <form
                  class='cta-form'
                  name='contact'
                  method='post'
                  data-netlify='true'
                  data-netlify-honeypot='bot-field'
                >
                  <div>
                    <label for='full-name'>Full Name</label>
                    <input
                      id='full-name'
                      type='text'
                      placeholder='John Smith'
                      name='full-name'
                      value='contact'
                      type='hidden'
                      required
                    />
                  </div>

                  <div>
                    <label for='email'>Email address</label>
                    <input
                      id='email'
                      type='email'
                      placeholder='me@example.com'
                      name='email'
                      required
                    />
                  </div>
                  <div>
                    <label for='company-name'>Company Information</label>
                    <input
                      id='company-name'
                      type='text'
                      placeholder='DigitalNEST'
                      name='company-name'
                      required
                    />
                  </div>

                  <div>
                    <label for='service-needed'>
                      What services do you need?
                    </label>
                    <select id='service-needed' name='service-needed' required>
                      <option value=''>Please choose one option:</option>
                      <option value='web-design'>Web Design</option>
                      <option value='graphic'>Graphic Design</option>
                      <option value='web-development'>Web Development</option>
                      <option value='Video'>Video Production</option>
                      <option value='multiple'>Multiple</option>
                    </select>
                  </div>

                  <button class='btn btn--form'>Sign up now</button>

                  {/* <input type='checkbox' />
                  <input type='number' /> */}
                </form>
              </div>
              <div class='cta-img-box' role='img' aria-label='bizzNEST'></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
