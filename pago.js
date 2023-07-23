        // Obtener los parámetros de la URL
        const urlParams = new URLSearchParams(window.location.search);

        // Obtener el nombre y precio del paquete seleccionado de la URL
        const packageName = urlParams.get('package');
        const packagePrice = urlParams.get('price');

        // Mostrar los datos del paquete en el formulario de pago
        document.getElementById('package-name').textContent = packageName;
        document.getElementById('package-price').textContent = packagePrice;
        document.getElementById('package-name-input').value = packageName;
        document.getElementById('package-price-input').value = packagePrice;

        /// Verificar disponibilidad de fecha y hora
function checkAvailability() {
    const selectedDate = document.getElementById('consulting-date').value;
    const selectedTime = document.getElementById('consulting-time').value;
  
    // Simular verificación de disponibilidad (aquí debes implementar tu propia lógica)
    const availableDates = ['2022-01-01', '2022-01-02', '2022-01-03'];
    const availableTimes = ['09:00', '10:00', '11:00'];
  
    const calendarDays = document.querySelectorAll('.calendar-day');
  
    calendarDays.forEach(day => {
      const date = day.getAttribute('data-date');
      if (!availableDates.includes(date)) {
        day.classList.add('unavailable');
      } else {
        day.classList.remove('unavailable');
      }
    });
  
    if (availableDates.includes(selectedDate) && availableTimes.includes(selectedTime)) {
      document.getElementById('availability-message').textContent = 'Fecha y hora disponibles';
      document.getElementById('consulting-date-input').value = selectedDate;
      document.getElementById('consulting-time-input').value = selectedTime;
    } else {
      document.getElementById('availability-message').textContent = 'Fecha y hora no disponibles';
      document.getElementById('consulting-date-input').value = '';
      document.getElementById('consulting-time-input').value = '';
    }
  }
  
        