function Footer() {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center flex-column text-center p-3"
        style={{
          backgroundColor: "#022c22",
          color: "#f7c948",
          zIndex: 1050,
        }}
      >
        <h5 className="fw-bold ">
          شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِّلنَّاسِ
          وَبَيِّنَاتٍ مِّنَ الْهُدَىٰ وَالْفُرْقَانِ
        </h5>
        <div className="d-flex gap-3">
          <a href="https://github.com/Mahmoudtarek944">
            <i className="bi bi-linkedin text-primary text-opacity-50"></i>
          </a>
          <a href="https://www.linkedin.com/in/mahmoud122tarek/">
            <i className="bi bi-github text-black"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
