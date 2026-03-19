import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much do packers and movers in Kochi cost?",
    answer: "The cost of house shifting depends on the volume of goods, distance, and floor level. Local shifting within Kochi starts at affordable rates. Contact us via WhatsApp for a precise and free instant quote."
  },
  {
    question: "Which areas in Kochi do you cover?",
    answer: "We provide comprehensive house shifting services across all major locations in Ernakulam, including Kakkanad, Edappally, Aluva, Vyttila, Palarivattom, and Fort Kochi."
  },
  {
    question: "Are my items safe during the move?",
    answer: "Absolutely. We use industry-grade packing materials (bubble wrap, corrugated boxes) and our professional team ensures careful loading, secure transport, and 100% damage-free delivery."
  },
  {
    question: "How far in advance should I book my move?",
    answer: "We recommend booking at least 3 to 5 days in advance, especially for weekend moves or month-end relocations, to ensure guaranteed availability."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground fade-up">Frequently Asked Questions</h2>
          <p className="text-muted-foreground fade-up" data-delay="100">
            Everything you need to know about our house shifting and packing services in Kochi.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full fade-up" data-delay="200">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
