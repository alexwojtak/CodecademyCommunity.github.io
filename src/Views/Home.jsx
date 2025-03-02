import { Link } from 'react-router-dom';

export const Home = () => {
  const handleNavigate = () => window.scroll({ top: 0, left: 0 });

  return (
    <>
      <main>
        <section className="section has-background-white">
          <div className="container">
            <h2 className="is-size-1">Codecademy Community</h2>
            <p className="descriptiontext">
              Welcome to the Codecademy Discord Community! This is website of
              the official Codecademy Discord, run by volunteer moderators and
              community members. Our goal is to create a friendly place for all
              to converse, connecting over a common interest in coding.
              <br />
              This site contains guides and pages that users of the server (and
              the Codecademy community as a whole) might find useful.
            </p>
            <div className="joincontainer">
              <a
                className="joinlink"
                href="https://discord.com/invite/codecademy"
              >
                <button>Join Us!</button>
              </a>
            </div>
          </div>
        </section>
        <section className="pagelist">
          <h2 className="is-size-2 ">Pages</h2>
          <div className="pagecontainer tiles is-ancestor">
            <div className="tile is-parent">
              <Link
                className="pagetile tile is-child has-background-white"
                to="/staff"
                onClick={handleNavigate}
              >
                <h3 className="pagetitle">Server Staff</h3>
                <p className="pagedescriptor">Meet the server staff!</p>
              </Link>
            </div>
            <div className="tile is-parent">
              <Link
                className="pagetile tile is-child has-background-white"
                to="/sharing-code"
                onClick={handleNavigate}
              >
                <h3 className="pagetitle">Sharing Code</h3>
                <p className="pagedescriptor">
                  How to share code efficiently on the server.
                </p>
              </Link>
            </div>
            <div className="tile is-parent">
              <Link
                className="pagetile tile is-child has-background-white"
                to="/contact"
                onClick={handleNavigate}
              >
                <h3 className="pagetitle">Contact Us</h3>
                <p className="pagedescriptor">
                  How to contact server staff about moderation issues.
                </p>
              </Link>
            </div>
            <div className="tile is-parent">
              <Link
                className="pagetile tile is-child has-background-white"
                to="/getting-help"
                onClick={handleNavigate}
              >
                <h3 className="pagetitle">Getting Help</h3>
                <p className="pagedescriptor">
                  How to get coding help effectively on the server.
                </p>
              </Link>
            </div>
            <div className="tile is-parent">
              <Link
                className="pagetile tile is-child has-background-white"
                to="/faq"
                onClick={handleNavigate}
              >
                <h3 className="pagetitle">FAQs</h3>
                <p className="pagedescriptor">
                  Some of our frequently asked questions.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
