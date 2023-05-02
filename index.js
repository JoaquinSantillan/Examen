const campos = document.getElementById('campos');
const agregarBtn = document.getElementById('agregar');

agregarBtn.addEventListener('click', () => {
      const nombre = document.getElementById('nombre').value;
      if (nombre) {
            const campo = document.createElement('li');
            const campoNombre = document.createElement('h2');
            const subcampos = document.createElement('ul');
            const subcampoForm = document.createElement('form');
            const subcampoNombre = document.createElement('label');
            const subcampoNombreInput = document.createElement('input');
            const subcampoBtn = document.createElement('button');
            
            campoNombre.textContent = nombre;
            subcampoNombre.textContent = 'Agregar subcampo:';
            subcampoNombre.htmlFor = `subcampo_${nombre}`;
            subcampoNombreInput.id = `subcampo_${nombre}`;
            subcampoNombreInput.name = 'subcampo';
            subcampoBtn.type = 'button';
            subcampoBtn.textContent = 'Agregar';
            
            subcampoForm.appendChild(subcampoNombre);
            subcampoForm.appendChild(subcampoNombreInput);
            subcampoForm.appendChild(subcampoBtn);
            
            campo.appendChild(campoNombre);
            campo.appendChild(subcampos);
            campo.appendChild(subcampoForm);
            
            campos.appendChild(campo);
            
            subcampoBtn.addEventListener('click', () => {
                  const subcampoNombre = subcampoNombreInput.value;
                  if (subcampoNombre) {
                        const subcampo = document.createElement('li');
                        subcampo.textContent = subcampoNombre;
                        subcampos.appendChild(subcampo);
                        subcampoNombreInput.value = '';
                  }
            });
            
            document.getElementById('nombre').value = '';
      }
});