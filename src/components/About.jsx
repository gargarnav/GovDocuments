
export function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                {/* EDIT SECTION 1: HEADER */}
                <h1>About GovDocs Assist</h1>

                {/* EDIT SECTION 2: INTRODUCTION */}
                <section className="about-section">
                    <h2>Our Mission</h2>
                    <p>
                        GovDocs Assist was created to simplify the often confusing process of gathering requirements for essential government services.
                        We believe that every citizen deserves clear, accessible, and accurate information about their rights and documentation needs.
                    </p>
                </section>

                {/* EDIT SECTION 3: WHAT WE DO */}
                <section className="about-section">
                    <h2>What We Do</h2>
                    <p>
                        We provide a centralized, easy-to-use platform where you can find document checklists,
                        file specification guides, and procedural overviews for services ranging from Passports and Aadhaar cards
                        to Driving Licenses and Tax filings.
                    </p>
                </section>

                {/* EDIT SECTION 4: DISCLAIMER */}
                <section className="about-section disclaimer">
                    <h3>Disclaimer</h3>
                    <p>
                        We are an independent informational platform and are <strong>not affiliated with the Government of India</strong>.
                        While we strive for accuracy, official rules may change. Please always verify with the respective official government portals.
                    </p>
                </section>
            </div>
        </div>
    );
}
