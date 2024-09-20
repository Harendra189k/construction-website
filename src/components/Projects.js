import React from "react";
import constructionManag from "../assets/images/constructioManag.jpg";
import { FaSearch } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="portfolio">
      <div className="container portfolio_area text-center">
        <h2>Made with love</h2>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit,
        </p>

        <div id="filters">
          <button className="button is-checked" data-filter="*">
            Show All
          </button>
          <button className="button" data-filter=".buildings">
            Buildings
          </button>
          <button className="button" data-filter=".interior">
            Interior Design
          </button>
          <button className="button" data-filter=".isolation">
            Isolation
          </button>
          <button className="button" data-filter=".plumbing">
            Plumbing
          </button>
        </div>
        <div className="grid">
          <div className="grid-sizer"></div>
          <div className="grid-item grid-item--width2 grid-item--height2 buildings plumbing interior">
            <img alt="" src={constructionManag} />
            <div className="portfolio_hover_area">
              <a
                className="fancybox"
                href="images/highligh_img.jpg"
                data-fancybox-group="gallery"
                title="Lorem ipsum dolor sit amet"
              >
                <span className="fa fa-search">
                  <FaSearch />
                </span>
              </a>
              {/* <a href="#">
                <span className="fa fa-link"></span>
              </a> */}
            </div>
          </div>

          <div className="grid-item buildings interior isolation">
            <img alt="" src={constructionManag} />
            <div className="portfolio_hover_area">
              <a
                className="fancybox"
                href="images/portfolio1.jpg"
                data-fancybox-group="gallery"
                title="Lorem ipsum dolor sit amet"
              >
                <span className="fa fa-search">
                  <FaSearch />
                </span>
              </a>
              {/* <a href="#">
                <span className="fa fa-link"></span>
              </a> */}
            </div>
          </div>

          <div className="grid-item interior plumbing isolation">
            <img alt="" src={constructionManag} />
            <div className="portfolio_hover_area">
              <a
                className="fancybox"
                href="images/portfolio2.jpg"
                data-fancybox-group="gallery"
                title="Lorem ipsum dolor sit amet"
              >
                <span className="fa fa-search">
                  <FaSearch />
                </span>
              </a>
              {/* <a href="#">
                <span className="fa fa-link"></span>
              </a> */}
            </div>
          </div>

          <div className="grid-item isolation buildings">
            <img alt="" src={constructionManag} />
            <div className="portfolio_hover_area">
              <a
                className="fancybox"
                href="images/portfolio3.jpg"
                data-fancybox-group="gallery"
                title="Lorem ipsum dolor sit amet"
                    >
                <span className="fa fa-search">
                  <FaSearch />
                </span>
              </a>
              {/* <a href="#">
                <span className="fa fa-link"></span>
              </a> */}
            </div>
          </div>

          <div className="grid-item plumbing isolation">
            <img alt="" src={constructionManag} />
            <div className="portfolio_hover_area">
              <a
                className="fancybox"
                href="images/portfolio4.jpg"
                data-fancybox-group="gallery"
                title="Lorem ipsum dolor sit amet"
              >
                <span className="fa fa-search">
                  <FaSearch/>
                </span>
              </a>
              {/* <a href="#">
                <span className="fa fa-link"></span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

