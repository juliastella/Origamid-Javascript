const bateria = 65;

if (bateria > 20) {
    console.log("Crítica");
} else if (bateria <= 20 && bateria >= 80){
    console.log("Moderada");
}
else{
    console.log("Cheia");
}