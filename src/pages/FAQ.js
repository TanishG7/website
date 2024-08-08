import React, { useState } from 'react';
import '../styles/FAQ.css';

const faqData = [
  { question: "What sets your company apart from other builders?", answer: "Our commitment to quality, transparency, and customer satisfaction sets us apart. With years of experience and a dedicated team of professionals, we ensure that each project is completed to the highest standards. We prioritize clear communication and work closely with our clients to bring their vision to life." },
  { question: "How long does it take to build a custom home?", answer: "The timeline for building a custom home varies based on the size and complexity of the project. On average, it takes between 9 to 12 months from the initial design phase to the final construction. We work diligently to ensure your project is completed on time." },
  { question: "How do I get started with building my custom home?", answer: "To get started, simply contact us to schedule an initial consultation. During this meeting, we will discuss your vision, budget, and timeline. From there, we will guide you through the design and planning phases, ensuring you are informed and comfortable every step of the way." },
  { question: "What is the Floor Area Ratio (FAR), and how do I calculate it?", answer: "The Floor Area Ratio (FAR) is the ratio of a building's total floor area to the size of the plot of land on which it is built. It is calculated by dividing the total floor area of the building by the total area of the plot. You can use our FAR calculator for a quick and accurate calculation." },
  { question: "Do you offer design services?", answer: "Yes, we offer comprehensive design services. Our in-house architects and designers work closely with you to create a home that meets your vision and requirements. We provide 3D renderings and detailed plans to ensure you are completely satisfied with the design." },
  { question: "What materials do you typically use in construction?", answer: "We use a variety of high-quality materials tailored to your specific needs and preferences. This includes options like hardwood flooring, granite countertops, energy-efficient windows, and sustainable building materials. We ensure that all materials meet our strict standards for durability and aesthetics." },
  { question: "What are the benefits of building a custom home versus buying an existing home?", answer: "Building a custom home allows you to create a space that perfectly fits your needs and preferences. You have complete control over the design, materials, and layout, ensuring that every aspect of the home reflects your lifestyle. Additionally, custom homes often incorporate the latest building technologies and energy-efficient features that may not be present in older, existing homes." },
  { question: "How do you ensure the quality of your construction?", answer: "Quality is our top priority. We follow rigorous quality control procedures throughout the construction process. This includes regular site inspections, using premium materials, and employing skilled craftsmen. Additionally, our project managers oversee each phase of the build to ensure everything meets our high standards." },
  {
    question: "What are the steps involved in the construction phase?",
    answer: "The construction phase typically includes the following steps:\n"+
            "<b>Site Preparation:</b> Clearing and grading the land.\n" +
            "<b>Foundation:</b> Pouring the foundation and setting the groundwork.\n" +
            "<b>Framing:</b> Building the structural framework of the home.\n" +
            "<b>Utilities Installation:</b> Installing plumbing, electrical, and HVAC systems.\n" +
            "<b>Exterior Work:</b> Adding roofing, siding, windows, and doors.\n" +
            "<b>Interior Work:</b> Drywall, flooring, and interior finishes.\n" +
            "<b>Final Touches:</b> Painting, cabinetry, and final inspections. We provide regular updates and walkthroughs during each phase to keep you informed."
  },  
  { question: "Do you handle permits and inspections?", answer: "Yes, we handle all necessary permits and inspections required for your building project. Our team is experienced in navigating local regulations and ensures that all aspects of the construction process comply with legal requirements." },
  { question: "Can I make changes to the design once construction has started?", answer: "While it is possible to make changes during construction, it can affect the timeline and cost of the project. We encourage finalizing the design before construction begins to minimize disruptions. However, we are flexible and will work with you to accommodate necessary changes." },
  { question: "Do you offer financing options?", answer: "While we do not directly offer financing, we can connect you with trusted financial partners who specialize in construction loans and mortgages. We work closely with these partners to help you secure the best financing options for your project." },
  { question: "Can you build on a lot that I already own?", answer: "Yes, we can build on a lot that you already own. Our team will conduct a thorough site evaluation to ensure the land is suitable for construction and help you understand any site-specific considerations that may affect the project." },
  { question: "How do you ensure that the final cost of the project stays within my budget?", answer: "We provide a detailed estimate at the beginning of the project and work closely with you to manage costs throughout the construction process. Regular budget reviews and transparent communication help ensure that any potential changes or additional costs are discussed and approved by you in advance." },
  { question: "How do you handle unexpected issues during construction?", answer: "Construction projects can sometimes encounter unforeseen challenges. We have a proactive approach to managing these issues, which includes having contingency plans and maintaining open communication with our clients. If an issue arises, we promptly inform you and work together to find the best solution while minimizing delays and additional costs." },
  { question: "What is the process for getting a custom home designed?", answer: "The process begins with an initial consultation where we discuss your vision, budget, and timeline. Our design team then creates preliminary sketches and 3D renderings based on your input. After feedback and revisions, we finalize the plans and move into the construction phase. We keep you informed and involved at every step to ensure the final product meets your expectations." },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(5);
  const [showMore, setShowMore] = useState(true);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleViewMore = () => {
    if (showMore) {
      setVisibleCount(faqData.length);
    } else {
      setVisibleCount(5);
    }
    setShowMore(!showMore);
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      {faqData.slice(0, visibleCount).map((item, index) => (
        <div key={index} className="faq-item-home">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {item.question}
            <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && (
            <div
              className="faq-answer"
              dangerouslySetInnerHTML={{
                __html: item.answer.replace(/\n/g, '<br />')
              }}
            />
          )}
        </div>
      ))}
      {faqData.length > 5 && (
        <button className="load-more" onClick={toggleViewMore}>
          {showMore ? 'View More' : 'View Less'}
        </button>
      )}
    </div>
  );
};

export default FAQ;
