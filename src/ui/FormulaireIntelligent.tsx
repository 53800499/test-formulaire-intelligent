/** @format */

"use client";
import React, { useState } from "react";
import InputField from "../composants/InputField";
import Alert from "../composants/Alert";
import "../styles/formulaire.css";
import {
  validateName,
  validateEmail,
  validatePhone,
  validatePassword,
  validateConfirmPassword
} from "../scripts/validation";

const initialState = {
  nom: "",
  prenom: "",
  email: "",
  telephone: "",
  password: "",
  confirmPassword: ""
};

const initialValid = {
  nom: false,
  prenom: false,
  email: false,
  telephone: false,
  password: false,
  confirmPassword: false
};

const FormulaireIntelligent: React.FC = () => {
  const [values, setValues] = useState(initialState);
  const [valid, setValid] = useState(initialValid);
  const [touched, setTouched] = useState(initialValid);
  const [success, setSuccess] = useState(false);

  const handleChange = (field: string, value: string) => {
    setValues({ ...values, [field]: value });
    setTouched({ ...touched, [field]: true });
    let isValid = false;
    switch (field) {
      case "nom":
      case "prenom":
        isValid = validateName(value);
        break;
      case "email":
        isValid = validateEmail(value);
        break;
      case "telephone":
        isValid = validatePhone(value);
        break;
      case "password":
        isValid = validatePassword(value);
        break;
      case "confirmPassword":
        isValid = validateConfirmPassword(values.password, value);
        break;
      default:
        break;
    }
    setValid({ ...valid, [field]: isValid });
  };

  const allValid = Object.values(valid).every(Boolean);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 10000);
  };

  return (
    <form className="formulaire-intelligent" onSubmit={handleSubmit}>
      <InputField
        label="Nom"
        type="text"
        value={values.nom}
        onChange={(v: string) => handleChange("nom", v)}
        show={true}
        touched={touched.nom}
        valid={valid.nom}
        minLength={6}
        errorMsg="Le nom doit comporter au moins 6 caractères."
        successMsg="Nom valide."
      />
      <InputField
        label="Prénom"
        type="text"
        value={values.prenom}
        onChange={(v: string) => handleChange("prenom", v)}
        show={valid.nom}
        touched={touched.prenom}
        valid={valid.prenom}
        minLength={6}
        errorMsg="Le prénom doit comporter au moins 6 caractères."
        successMsg="Prénom valide."
      />
      <InputField
        label="Email"
        type="email"
        value={values.email}
        onChange={(v: string) => handleChange("email", v)}
        show={valid.prenom}
        touched={touched.email}
        valid={valid.email}
        minLength={6}
        errorMsg="Adresse email invalide."
        successMsg="Email valide."
      />
      <InputField
        label="Téléphone"
        type="tel"
        value={values.telephone}
        onChange={(v: string) => handleChange("telephone", v)}
        show={valid.email}
        touched={touched.telephone}
        valid={valid.telephone}
        minLength={6}
        errorMsg="Le téléphone doit comporter au moins 6 caractères."
        successMsg="Téléphone valide."
      />
      <InputField
        label="Mot de passe"
        type="password"
        value={values.password}
        onChange={(v: string) => handleChange("password", v)}
        show={valid.telephone}
        touched={touched.password}
        valid={valid.password}
        minLength={12}
        errorMsg="Le mot de passe doit comporter 12 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial."
        successMsg="Mot de passe valide."
      />
      <InputField
        label="Confirmation mot de passe"
        type="password"
        value={values.confirmPassword}
        onChange={(v: string) => handleChange("confirmPassword", v)}
        show={valid.password}
        touched={touched.confirmPassword}
        valid={valid.confirmPassword}
        minLength={12}
        errorMsg="Les mots de passe ne correspondent pas."
        successMsg="Confirmation valide."
      />
      {allValid && (
        <button type="submit" className="btn-valider">
          Valider
        </button>
      )}
      {success && (
        <Alert
          type="success"
          message="Les informations ont été envoyées avec succès."
        />
      )}
    </form>
  );
};

export default FormulaireIntelligent;
