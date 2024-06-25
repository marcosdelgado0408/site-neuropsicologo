
document.addEventListener('DOMContentLoaded', (event) => {

  document.getElementById('emailForm').addEventListener('submit', async (e) => {
   
    e.preventDefault(); // não deixar recarregar a página ao submeter o form
     
    const form = e.target;
    const data = new FormData(form);
    const formData = {};
    data.forEach((value, key) => {
      formData[key] = value;
    });
  
    // Mostrar o Spinner
    const spinner = document.getElementById('loadingSpinner');
    spinner.style.display = 'block';

    try {
      const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Esconder o Spinner
      spinner.style.display = 'none';

  
      if (response.ok) {
        const result = await response.text();
        alert(result);
      } else {
        const errorText = await response.text();
        alert('Erro ao enviar email: ' + errorText);
      }
    } 
    catch (error) {
        // Esconder o Spinner em caso de erro
        spinner.style.display = 'none';
        alert('Erro ao enviar email: ' + error.message);
    }
  });
  
});



