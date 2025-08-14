import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../assets/styles/contact_css.css";

const Forms = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
        if (!formData.email.trim()) {
            newErrors.email = 'E-mail é obrigatório';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'E-mail inválido';
        }
        if (!formData.message.trim()) newErrors.message = 'Mensagem é obrigatória';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (validateForm()) {
            try {
                await emailjs.sendForm(
                    'service_6ngxrmg',
                    'template_r8zzhos',
                    e.target,
                    'x6lpyhnZocW4A2rOf'
                );
                alert('Mensagem enviada com sucesso!');
                setFormData({ name: '', email: '', message: '' });
            } catch (error) {
                console.error('Erro ao enviar:', error);
                alert('Ocorreu um erro. Tente novamente mais tarde.');
            }
        }
        setIsSubmitting(false);
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className={errors.name ? 'error-input' : ''}
                />
                {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seuemail@exemplo.com"
                    className={errors.email ? 'error-input' : ''}
                />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Sua mensagem..."
                    className={errors.message ? 'error-input' : ''}
                />
                {errors.message && <span className="error">{errors.message}</span>}
            </div>

            <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
        </form>
    );
};

export default Forms;
