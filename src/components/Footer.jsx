export default function Footer() {
  return (
    <>
      <footer>
        <div class="footer-container">
          <div class="footer-section">
            <h3>Company</h3>
            <p>About us</p>
            <p>Careers</p>
            <p>Contact</p>
          </div>
          <div class="footer-section">
            <h3>Quick Links</h3>
            <p>Home</p>
            <p>Services</p>
            <p>Blog</p>
          </div>
          <div class="footer-section">
            <h3>Follow Us</h3>
            <div class="d-flex pt-2">
              <a class="btn btn-square btn-primary me-2" href="">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="btn btn-square btn-primary me-2" href="">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a class="btn btn-square btn-primary me-2" href="">
                <i class="fab fa-youtube"></i>
              </a>
              <a class="btn btn-square btn-primary me-2" href="">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>
            &copy; 2024 VXL Education Sri Lanka, All Right Reserved. Designed By{" "}
            <a
              class="border-bottom text-secondary"
              href="https://loopyholdings.com"
            >
              Loopy Holdings
            </a>
          </p>
        </div>
      </footer>
      {/* <!-- Back to Top --> */}
      <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i class="bi bi-arrow-up"></i>
      </a>
    </>
  );
}
