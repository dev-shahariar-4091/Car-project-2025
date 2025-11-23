export default function About() {
  const features = [
    { title: "Fully Insured", description: "All vehicles come with full insurance coverage." },
    { title: "24/7 Support", description: "Our team is available anytime you need help." },
    { title: "Easy Payments", description: "Flexible payment options for your convenience." },
    { title: "Multiple Locations", description: "Nationwide coverage with pickup/drop at any branch." },
    { title: "Premium Cars", description: "Drive top-tier vehicles with luxury and comfort." },
    { title: "Flexible Cancellation", description: "Plans changed? Cancel anytime with ease." },
    { title: "Trusted Drivers", description: "Experienced, verified drivers for your safety." },
    { title: "Instant Booking", description: "Book your car in seconds, no delays." },
  ];

  return (
    <section className="pt-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-brand-600 mb-4">About AutoCar</h2>
      <p className="text-gray-600 mb-8 leading-relaxed">
        AutoCar operates across multiple locations, offering flexible booking options, transparent pricing,
        and 24/7 support if you need assistance on the road. Your comfort and security are our top priorities.
      </p>

      {/* Feature Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-4 flex flex-col items-start gap-2 hover:shadow-lg transition"
          >
            <div className="bg-brand-100 text-brand-600 p-2 rounded-full">
              ✅
            </div>
            <h4 className="font-semibold text-brand-700">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}