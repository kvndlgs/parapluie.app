import { useState } from "react";
import { useData } from 'vike-react/useData';
import type { Data } from './+data';


export default function Page() {
  
  const { faqItems } = useData<Data>();
  
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((current) => (current === i ? null : i));
  };
  

  return (
    <>
    <section className="max-w-3xl mx-auto px-6 py-16">
      
       <div className="inline-flex items-center gap-2 text-sm text-neutral-500">
            <a
         href="/support"
              className="hover:text-neutral-800 hover:underline underline-offset-2"
            >
              Support
            </a>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-700">FAQ</span>
          </div>


      <h1 className="text-4xl font-bold mt-6 mb-10 text-base-700">
        Foire aux questions
      </h1>

      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border border-base-200 rounded-xl bg-white shadow-sm"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-5 py-4 font-medium flex justify-between items-center"
            >
              {item.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>

            {openIndex === index && (
              <div className="px-5 pb-4 text-slate-600 border-t border-slate-100">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
    </>
  );
}