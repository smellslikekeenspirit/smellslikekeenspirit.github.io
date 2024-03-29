import "aos/dist/aos.css";

import Aos from 'aos';

function MainPage() {
  Aos.init({easing: 'ease-out-back',
  duration: 1500,
  delay: 300});
  return (
      <div>
            <div class="social-bar">
            <a class="social" href="https://github.com/smellslikekeenspirit"
            onclick={() => window.open("https://github.com/smellslikekeenspirit")}>GitHub</a>
            <a class="social" href="https://www.medium.com/@priontinasir"
            onclick={() => window.open("https://www.medium.com/@priontinasir")}>Medium</a>
            <a class="social" href="https://www.linkedin.com/in/prionti-nasir"
            onclick={() => window.open("https://www.linkedin.com/in/prionti-nasir")}>LinkedIn</a>
            <a class="social" href="https://smellslikekeenspirit.github.io/files/PriontiNasirResume.pdf">Resume</a>
          </div>
            <div data-aos="fade-right"
            class="section-header">
                Hello<br></br>Hello,<br></br>
            </div>
            <div class="intro" data-aos="fade-right">I am <span class="handle">@smellslikekeenspirit</span> on all of web.
            <br></br><br></br>
            Allowing what one considers achievements
            to testify for me is a trick I have not yet come to love,
            but it is the most convenient metric to hand someone who has no other data.
            </div>
            <div>
              <p class="lol" data-aos="zoom-in-right"><span class="bullet">✦</span> I am currently a rising senior at Rochester studying Computer Science and Digital Humanities.
              I am very passionate about technology - when it is used to enhance the human experience instead of adding to its ills.
              </p>
              <p class="lol" data-aos="zoom-in"><span class="bullet">✦</span> It's summer 2021. I am an intern at Microsoft where I work in a full-stack role, developing an end-to-end project.
              I'm working with geospatial stores, using C# (of course) for backend, and Typescript for frontend.
              </p>
              <p class="lol" data-aos="zoom-in"><span class="bullet">✦</span> In the fall, I'll be at Spotify on one of their Personalization teams
              working with Java, Kafka and Scala in a more data-heavy role.</p>
              <p class="lol" data-aos="zoom-in"><span class="bullet">✦</span> Rewind to 2020. I worked at HubSpot as a software engineering intern
              on a team that develops data analytics tools. I used Elasticsearch for the first time and built a robust search feature,
              used React for the first time and built a UI for the tool too.</p>
              <p class="lol"  data-aos="zoom-in"><span class="bullet">✦</span> I am on the editorial team for Signatures, my college’s award-winning yearly magazine.
              Besides that, you can find my writing sprinkled around the virtual realm.
              <a class="link" href="www.medium.com/@priontinasir">Here's</a> one of the places I speak of.
              Poetry is usually kept more private.</p>
          </div>
      </div>

  );
}

export default MainPage;