import "aos/dist/aos.css";

import Aos from 'aos';

function MainPage() {
  Aos.init();
  return (
      <div>
        <div data-aos="fade-down-right"
        class="section-header">
            Hello<br></br>Hello,<br></br>
        </div>
        <div class="intro">I am <span class="handle">@smellslikekeenspirit</span> on all of web.</div>
        <div class="subtext" data-aos="fade-right">Allowing what one considers achievements
            <br></br>
            to testify for me is a trick I have not yet come to love,
            <br></br>
            but it is the most convenient metric to hand someone who has no other data.
        </div>
        <div>
            <p class="lol" data-aos="zoom-in"><span class="bullet">✦</span> I am currently a rising senior at Rochester studying Computer Science and Digital Humanities.
            I am very passionate about technology...when it is used to enhance the human experience instead of adding to its ills.
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
          <div class="social-bar">
          <a class="social" href="https://github.com/smellslikekeenspirit">GitHub</a>
          <a class="social" href="www.medium.com/@priontinasir">Medium</a>
          <a class="social" href="www.linkedin.com/in/prionti-nasir">LinkedIn</a>
          </div>
      </div>

  );
}

export default MainPage;