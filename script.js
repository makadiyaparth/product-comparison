window.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('hide-checkbox');
    checkbox.addEventListener('change', function() {
      const rows = document.querySelectorAll('#product-table tbody tr');
      
      if (checkbox.checked) {
        rows.forEach(row => {
          const cells = Array.from(row.cells).slice(1);
          const values = cells.map(cell => cell.textContent);
          const uniqueValues = new Set(values);
          
          if (uniqueValues.size === 1) {
            row.style.display = 'none';
          } else {
            row.style.display = '';
          }
        });
      } else {
        rows.forEach(row => {
          row.style.display = '';
        });
      }
    });
  });
  