import "./Map.css"

const Map = () => {
  return (
    <section>
      <p className="ubication">Ubication</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15059.557972130877!2d-56.22847036885649!3d-32.78867301187497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1689219552678!5m2!1ses!2sar"
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Map;
