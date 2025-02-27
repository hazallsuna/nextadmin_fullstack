import React from 'react';

const Page = () => {
  const handleForm = async (event) => {
    "use server";
    event.preventDefault(); // Formun varsayılan gönderim davranışını durdurur
    const formData = new FormData(event.target);
    const username = formData.get("username");
    console.log("Hello", username);
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="text" name="username" />
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default Page;
