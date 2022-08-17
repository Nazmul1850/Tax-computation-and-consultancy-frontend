import Card from "./Card";
function Services() {
  return (
        <div className="container services">
            <h2 className="main-title text-center">SERVICES</h2>
            <div className="card-cover">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-4 mb-2">
                            <Card title="Tax Computation" img="card1.png" text="Tax Computation? A messy work ? We will do that for u. " />
                        </div>
                        <div className="col-md-4 mb-2">
                        <Card title="Consultation" img="card2.png" text="Our expert lawyer can guide you. " />
                        </div>
                        <div className="col-md-4 mb-2">
                        <Card title="Tax Paying" img="card3.png" text="We will help you to pay your taxes" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}
export default Services;
