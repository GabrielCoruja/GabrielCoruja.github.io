let salarioBase = 5000;
let liquido = 0;

    if (salarioBase <= 1556.94){
        liquido = salarioBase * 0.92;
        console.log(liquido);
    }

    else if (salarioBase >= 1556.95 && salarioBase <= 2594.92){
        liquido = salarioBase * 0.91;
        console.log(liquido);
    }

    else if (salarioBase >= 2594.93 && salarioBase <= 5189.82){
        liquido = salarioBase * 0.89;
        console.log(liquido);
    }

    else {
        liquido = salarioBase - 570.88;
        console.log(liquido);
    }

        if (salarioBase <=1903.98){
            imposto = salarioBase * 0;
            console.log(imposto);
        }

        else if (salarioBase >= 1903.99 && salarioBase <= 2826.65){
            imposto = ((salarioBase * 0.075) - 142.80);
            console.log(imposto);
        }

        else if (salarioBase >= 2826.66 && salarioBase <= 3751.05){
            imposto = ((salarioBase * 0.15) - 354.80);
            console.log(imposto);
        }

        else if (salarioBase >= 3751.05 && salarioBase <= 4664.68){
            imposto = ((salarioBase * 0.225) - 636.13);
            console.log(imposto);
        }

        else{
            imposto = ((salarioBase * 0.275) - 869.36);
            console.log(imposto);
        }

console.log("O salário líquido do trabalhador com todos os descontos é", (liquido - imposto));



