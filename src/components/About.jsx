
export function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                {/* EDIT SECTION 1: HEADER */}
                <h1>About BharatApply</h1>

                {/* EDIT SECTION 2: INTRODUCTION */}
                <section className="about-section">
                    <h2>Our Mission</h2>
                    <p>
                        At BharatApply, our mission is to make Indian government documentation simple, clear, and accessible for everyone.

                        Many citizens face unnecessary delays and rejections due to unclear document requirements, changing guidelines,
                        and strict file upload rules. We aim to reduce this confusion by providing accurate, structured information in one place—so users can prepare the correct documents and
                        complete applications confidently.
                    </p>
                </section>

                {/* EDIT SECTION 3: WHAT WE DO */}
                <section className="about-section">
                    <h2>What We Do</h2>
                    <p>
                        We provide a citizen-friendly documentation guide for common Indian government services, including passport, Aadhaar, PAN, voter ID, driving license, certificates, and more.
                        On BharatApply, you can find:
                    </p>
                    <ul className="about-list">
                        <li>Document checklists for each service</li>
                        <li>Upload requirements, including file format and size limits</li>
                        <li>Photo & signature guidelines, where applicable</li>
                        <li>Step-by-step guidance for online applications (Future Plan)</li>
                        <li>Practical tips to help avoid errors, rejections, and delays</li>
                    </ul>
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
            <footer className="footer" style={{ marginTop: 'auto' }}>
                <p>© 2024 BharatApply. Not affiliated with the Government of India.</p>
            </footer>
        </div >
    );
}
