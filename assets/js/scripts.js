const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    /* Previne o comportamento padrão do evento submit do JS, ou seja,
    impede o recarregamento da página */
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    if (!isNaN(bmi)) {
        const value = document.getElementById('value');
        let description = '';

        value.classList.add('attention');

        
        
        document.getElementById('infos').classList.remove('hidden');
    
        if (bmi < 18.5){
            description = 'Vamos comer mais! Você está abaixo do peso!';
            value.classList.add('attention');
        } 

        else if (bmi >= 18.5 && bmi <= 25) {
            description = "Parabéns, mantenha o ritmo!Você está no peso ideal!";
            value.classList.remove('attention');
            value.classList.add('normal');
        }

        else if (bmi > 25 && bmi <= 30) {
            description = "Vamos comer menos! Você está com sobrepeso!";
        }

        else if (bmi > 30 && bmi <= 35) {
            description = "Atenção, vamos nos cuidar! Você está com obesidade moderada!";
        }

        else if (bmi > 35 && bmi <= 40) {
            description = "Cuidado! Você está com obesidade severa!";
            value.classList.remove('attention');
            value.classList.add('grave');
        }

        else {
            description = "Cuidado, procure um médico! Você está com obesidade morbida!";
            value.classList.remove('attention');
            value.classList.add('grave');
        }

        value.textContent = bmi.replace('.', ',');
        document.getElementById('description').textContent = description;
    }
});

form.addEventListener('keypress', function(event) {
    if (event.key === 'press') {
        document.getElementById('#calculate').click();
    }
});