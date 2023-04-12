import "./Offices.css";

const imgLondon: string = new URL(
  `../../images/offices/london.jpg`,
  import.meta.url
).href;
const imgCalifornia: string = new URL(
  `../../images/offices/california.jpg`,
  import.meta.url
).href;

const Offices = () => {
  return (
    <section className="offices">
      <div className="office">
        <img src={imgLondon} alt="London" className="office__image" />
        <div className="office__info">
          <p className="office__country-label">United Kingdom</p>
          <h3 className="office__city-title">Canary Wharf, London</h3>
          <p className="office__address">
            Jubilee Place London
            <br />
            E14
            <br /> 5NY
          </p>
          <p className="office__opening-label">Opening times</p>
          <div className="office__opening-times">
            <p className="office__opening-time">Mon - Fri 08:00 to 22:00</p>
            <p className="office__opening-time">Sat - 09:00 to 20:00</p>
            <p className="office__opening-time">Sun - 12:00 to 18:00</p>
          </div>
        </div>
      </div>
      <div className="office">
        <img src={imgCalifornia} alt="California" className="office__image" />
        <div className="office__info">
          <p className="office__country-label">United States</p>
          <h3 className="office__city-title">Venice Beach, California</h3>
          <p className="office__address">
            9219 Old Kingston Street South
            <br /> El Monte, CA
            <br /> 91733
          </p>
          <p className="office__opening-label">Opening times</p>
          <div className="office__opening-times">
            <p className="office__opening-time">Mon - Wed 09:00 to 21:00</p>
            <p className="office__opening-time">Thu - Sat 09:00 to 22:00</p>
            <p className="office__opening-time">Sun - 10:00 to 19:00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offices;
