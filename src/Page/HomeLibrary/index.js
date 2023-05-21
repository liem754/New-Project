import "./homelibrary.css";
function HomeLibrary() {
  return (
    <div>
      <div className="library-tren">
        <div className="tren-trai">
          <h1 className="tren-tii">New in the Library</h1>
          <p>Newly added accessibility resources, guides, and more.</p>
        </div>
        <a href="" className="tren-link">
          VIEW ALL
        </a>
      </div>
      <div className="library-duoi">
        <a href="#" className="duoi-item">
          <div className="item-trong">
            <img
              src="https://res.cloudinary.com/stark-lab/image/upload/v1679345736/uni_profile_93228_9c84b19231.jpg"
              alt=""
              className="item-img"
            />
            <p className="item-box">Resources</p>
            <h2 className="item-h">Making Accessible Books</h2>
          </div>
        </a>
        <a href="#" className="duoi-item">
          <div className="item-trong">
            <img
              src="https://res.cloudinary.com/stark-lab/image/upload/v1679345547/daisy_high_e2e14faca3.jpg"
              alt=""
              className="item-img"
            />
            <p className="item-box">Resources</p>
            <h2 className="item-h">Making Accessible Books</h2>
          </div>
        </a>
        <a href="#" className="duoi-item">
          <div className="item-trong">
            <img
              src="https://res.cloudinary.com/stark-lab/image/upload/v1679345933/Screenshot_2023_03_20_at_3_58_45_PM_b615f86e7e.png"
              alt=""
              className="item-img"
            />
            <p className="item-box">Resources</p>
            <h2 className="item-h">Making Accessible Books</h2>
          </div>
        </a>
        <a href="#" className="duoi-item">
          <div className="item-trong">
            <img
              src="https://res.cloudinary.com/stark-lab/image/upload/v1679345736/uni_profile_93228_9c84b19231.jpg"
              alt=""
              className="item-img"
            />
            <p className="item-box">Resources</p>
            <h2 className="item-h">
              The DAISY Consortium’s Accessible Publishing Knowledge Base
            </h2>
          </div>
        </a>
        <a href="#" className="duoi-item">
          <div className="item-trong">
            <img
              src="https://res.cloudinary.com/stark-lab/image/upload/v1658845042/language_please_logo_d4b822280f.png"
              alt=""
              className="item-img"
            />
            <p className="item-box">Resources</p>
            <h2 className="item-h">
              Language, Please: Style Guide & Resources for journalists and
              storytellers
            </h2>
          </div>
        </a>
        <a href="#" className="duoi-item">
          <div className="item-trong">
            <img
              src="https://res.cloudinary.com/stark-lab/image/upload/v1653070254/library_author_google_7723cb132a.png"
              alt=""
              className="item-img"
            />
            <p className="item-box">Resources</p>
            <h2 className="item-h">
              4 steps to more inclusive, precise language
            </h2>
          </div>
        </a>
        <div className="row row1">
          <div className="col-lg-12 col-1">
            <h1 className="collec-h1">Featured Collections</h1>
            <p className="collec-p">
              Handpicked and curated collections around accessibility.
            </p>
          </div>
          <div className="col-lg-4 col-2">
            <a href="/" className="link-img">
              <h4 class="headline headline--4 text-type-blue text-type-blue relative z-10 block">
                Disability Employment
              </h4>
              <img
                src="https://res.cloudinary.com/stark-lab/image/upload/v1653845742/library_collection_Collection_Boundless_Disability_Employment_c297d236d9.png"
                alt=""
              />
            </a>
          </div>
          <div className="col-lg-4 col-2">
            <a href="/" className="link-img">
              <h4 class="headline headline--4 text-type-blue text-type-blue relative z-10 block">
                Making Accessible Color Combos
              </h4>
              <img
                src="https://res.cloudinary.com/stark-lab/image/upload/v1653845743/library_collection_making_accessible_color_combos_42c8d90a99.png"
                alt=""
              />
            </a>
          </div>
          <div className="col-lg-4 col-2">
            <a href="/" className="link-img">
              <h4 class="headline headline--4 text-type-blue text-type-blue relative z-10 block">
                Tips and Tricks for Inclusive Social Media
              </h4>
              <img
                src="https://res.cloudinary.com/stark-lab/image/upload/v1653845743/library_collection_Inclusive_Social_Media_b9669e6d39.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLibrary;
