import './About.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-main-container">
        <h1 className="aboutpage-title">About Page</h1>
        <p className="aboutpage-note">Need to Modify the About us Section as below</p>

        {/* Mission Section */}
        <div className="about-flex-section alt-normal">
          <div className="about-image-box">
            <img src="/ztoFrontend/public/HeroCarousel_1.jpg" alt="Mission" className="about-main-image" />
          </div>
          <div className="about-content-box">
            <h2 className="about-content-title">Mission</h2>
            <div className="about-content-text">
              <p>The Zonal Talent Olympiad (ZTO) began in 2018. Our main goal is to find students who have special talents and help them do even better. We want to give every student, no matter where they live, a fair chance to show what they can do. By supporting students and giving them good opportunities, we hope to help them reach their dreams.</p>
            </div>
          </div>
        </div>

        {/* History Section */}
        <div className="about-flex-section alt-reverse">
          <div className="about-content-box">
            <h2 className="about-content-title">History</h2>
            <div className="about-content-text">
              <p>We held our first ZTO exam in 2018, and it was a big success. Many students took part, and everything went smoothly because our team worked hard. After a short break, we brought the Olympiad back in 2025. This time, even more students joined, and we made sure the event was well-organized and fair for everyone. Our team's dedication helped make both events great experiences for all the students.</p>
            </div>
          </div>
          <div className="about-image-box">
            <img src="/ztoFrontend/public/PrimaryExams.jpg" alt="History" className="about-main-image" />
          </div>
        </div>

        {/* Benefits Section */}
        <div className="about-flex-section alt-normal">
          <div className="about-image-box">
            <img src="/ztoFrontend/public/OurTeams.jpg" alt="Benefits" className="about-main-image" />
          </div>
          <div className="about-content-box">
            <h2 className="about-content-title">Benefits</h2>
            <div className="about-content-text">
              <p>ZTO gives students a special chance to show their skills and be recognized for their hard work. By taking part, students can win awards, learn new things, and meet other talented students. We make sure our exams are fair and helpful, so every student can learn, grow, and feel proud of what they achieve.</p>
            </div>
          </div>
        </div>

        {/* Founders Section */}
        <div className="about-flex-section alt-reverse">
          <div className="about-content-box">
            <h2 className="about-content-title">Our Founders</h2>
            <div className="about-content-text">
              <p>ZTO was started by four friends: Mohammad Farhan (Software Engineer), Ashish Maurya (DevOps Engineer), Mohammad Rizwan (Electronics Engineer), and Saurabh Yadav (IT Engineer). All of them grew up in small towns, so they understood the problems and challenges that students from these areas face. They saw that many talented students were missing out on good opportunities. That's why they decided to create ZTO—to help students like themselves get a fair chance to learn, grow, and succeed.</p>
            </div>
          </div>
          <div className="about-image-box">
            <img src="/ztoFrontend/public/ContactUs.jpg" alt="Founders" className="about-main-image" />
          </div>
        </div>

        <hr className="about-divider" />
      </div>
      <Footer />
    </>
  );
};

export default About;