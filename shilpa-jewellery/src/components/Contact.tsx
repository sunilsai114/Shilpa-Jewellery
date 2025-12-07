import React, { useState, ChangeEvent, FormEvent } from 'react';

function renderBoldMarkdown(text: string) {
    const parts: React.ReactNode[] = [];
    const re = /\*\*(.+?)\*\*/g;
    let lastIndex = 0;
    let m: RegExpExecArray | null;
    let i = 0;
    while ((m = re.exec(text)) !== null) {
        if (m.index > lastIndex) parts.push(text.slice(lastIndex, m.index));
        parts.push(<strong key={`b-${i++}`}>{m[1]}</strong>);
        lastIndex = m.index + m[0].length;
    }
    if (lastIndex < text.length) parts.push(text.slice(lastIndex));
    return parts;
}

// 💡 Interface for the form state
interface FormData {
    name: string;
    phone: string;
    message: string;
}

export const Contact: React.FC = () => {
    // 💡 Initialize state with the defined interface
    const [formData, setFormData] = useState<FormData>({ name: '', phone: '', message: '' });
    const [status, setStatus] = useState<string>('');

    // 💡 Type the event for form input changes
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 💡 Type the event for form submission
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!formData.name || !formData.phone || !formData.message) {
            setStatus('Error: Please fill in all fields.');
            return;
        }

        console.log('Form Submitted:', formData);
        
        setStatus('Success! Your message has been sent. We will contact you shortly.');
        setFormData({ name: '', phone: '', message: '' });
    };

  return (
    <section id="contact" className="contact" style={{backgroundColor: '#F7F1E9'}}>
      <h2 className="section-title">Visit & Contact Us</h2>
      
      <div className="contact-grid">
        {/* Contact Info content remains the same */}
        <div className="contact-info">
            <h3>Store Details</h3>
                        {
                            /* Small helper to render **bold** segments */
                        }
                        <p>
                            <strong>Address:</strong><br/>
                            #12-34-56, Main Road,<br/>
                            {renderBoldMarkdown('Near Clock Tower, **Vijayawada, Andhra Pradesh, 520002**')}
                        </p>

                        <p><strong>Business Hours:</strong><br/>
                                Mon - Sat: 10:00 AM - 8:00 PM<br/>
                                Sunday: Closed
                        </p>

                        <p>
                            {renderBoldMarkdown('**Call:** +91 98765 43210')}<br/>
                            {renderBoldMarkdown('**Email:** info@shilpajewellery.in')}
                        </p>
            
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                WhatsApp Us Now
            </a>

            <div className="contact-map-placeholder">
                [Google Maps Embed Placeholder]
            </div>

        </div>

        <div className="contact-form">
            <h3>Send us a Message</h3>
            <form onSubmit={handleSubmit} data-netlify="true" name="contact">
                <input type="hidden" name="form-name" value="contact" /> 
                <label htmlFor="name">Name</label>
                {/* Input types are explicitly HTMLInputElement or HTMLTextAreaElement */}
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />

                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required></textarea>

                <button type="submit" className="btn btn-primary">
                    Send Inquiry
                </button>
            </form>
            {status && <p style={{marginTop: '15px', fontWeight: 'bold', color: status.startsWith('Success') ? 'var(--color-secondary)' : 'var(--color-primary)'}}>{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;