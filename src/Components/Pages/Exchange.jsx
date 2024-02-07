const Exchange = () => {
          return (
            <div className="max-w-6xl mt-16 mx-auto p-8">
              <h1 className="text-3xl font-semibold mb-8 text-center">Exchange/Refund Policy</h1>
        
              <Section  title="Exchange/Return">
                <p>After receiving the product if you find your product is damaged, defective, incorrect, or incomplete, you may raise a complaint in <a href="" className="link">Complaint Portal</a>. Request must be raised within 48 hours with an invoice.</p>
              </Section>
        
              <Section title="Non Return/Refund Claim">
                <p>As your products are shipped from abroad, products once purchased will not be exchanged or returned if the buyer changes the mind or does not like the smell, texture, color, design, or size of the product.</p>
              </Section>
        
              <Section title="Valid Reason to Return">
                <ul className="section-content list-disc pl-8">
                  <li>Delivered product is damaged (i.e. physically worn-out or broken) / defective (e.g. unable to switch on).</li>
                  <li>Delivered product is incomplete (i.e. has missing items and/or accessories).</li>
                  <li>Delivered product is incorrect (i.e. wrong product/size/color, fake item, or expired).</li>
                  <li>Delivered product does not match product description or picture (i.e. product is not as advertised).</li>
                </ul>
              </Section>
        
              <Section title="Conditions for Returns">
                <ol className="section-content list-decimal pl-8">
                  <li>The product must be unused, unworn, unwashed, and without any flaws.</li>
                  <li>The product must include the original tags, user manuals, warranty cards, freebies, invoice, and accessories.</li>
                  <li>The product must be returned in the original and undamaged manufacturer's packaging/box. If the product was delivered in Aodour packaging/box, the same packaging/box should be returned. Do not put tape or stickers directly on the manufacturer's packaging / box.</li>
                </ol>
                <p>If your returned item does not meet the above requirements, we reserve the right to reject any request for a refund.</p>
              </Section>
        
              <Section title="Refund Time">
                <p>Once submitted complaint after validation customer will get a refund within 7 working days.</p>
              </Section>
            </div>
          );
        };
        
        const Section = ({ title, children }) => {
          return (
            <div className="section my-4">
              <h2 className="section-title text-xl font-semibold text-pink-400">{title}</h2>
              <div className="section-content text-lg">{children}</div>
            </div>
          );
        };
        
        export default Exchange;