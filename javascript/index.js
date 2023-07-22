const Range = document.querySelector(".Range");
const Value = document.querySelector(".Value");

const values = 80;

Value.textContent = values + "%";


const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['20', '25', '30', '35', '40', '60','65'],
      datasets: [{
        data: [12, 19, 3, 5, 2, 3,5,6,7],
        data: [5, 10, 15, 20, 25, 30,34,56,],
        backgroundColor: [
          'rgba(28, 103, 225, 0.96)',
          
          
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          labels:[]
        }
      }
    }
  });
   