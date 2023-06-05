// Solicitar el nombre del usuario
let nombreUsuario = prompt("Hola, bienvenido a tu entrenador virtual! Ingresa tu nombre:");

// Saludar al usuario
alert("¡Hola, " + nombreUsuario + "! Comenzaremos el simulador de examen.");




let temarios = ["Temario 1: SEGURIDAD", "Temario 2: DOCUMENTACION", "Temario 3: INTOXICACION", "Temario 4: VARIOS"];
let respuestasCorrectas = 0;
let puntaje;


let preguntas = [
    // Temario 1
    [
        {
            pregunta: "Pregunta 1: En un procedimiento judicial de un siniestro vial, al ser convocados en carácter de testigo, no es obligatorio presentarse a declarar en la Fiscalía correspondiente.",
            respuestas: ["A. Verdadero", "B. Falso"],
            respuestaCorrecta: "B"
        },
        {
            pregunta: "Pregunta 2: La persona que se da a la fuga en un siniestro vial, dejando a alguien herido, puede ser juzgada por el delito de abandono de persona.",
            respuestas: ["A. Verdadero", "B. Falso"],
            respuestaCorrecta: "A"
        },
        {
            pregunta: "Pregunta 3: En caso de participar de un siniestro vial, ¿de cuánto tiempo se dispone para dar aviso sobre el hecho a la compañía aseguradora del vehículo?",
            respuestas: ["A. 24 Horas", "B. 48 Horas", "C. 72 Horas"],
            respuestaCorrecta: "C"
        },
        {
            pregunta: "Pregunta 4: En caso de participar de un siniestro vial, ¿de cuánto tiempo se dispone para dar aviso sobre el hecho a la compañía aseguradora del vehículo?",
            respuestas: ["A. Detenerse inmediatamente y permanecer en el lugar del hecho", "B. Conducir hasta la comisaría más cercana", "C. Llamar al 911 y continuar el viaje"],
            respuestaCorrecta: "A"
        },
        {
            pregunta: "Pregunta 5: En caso de siniestro, el orden de actuación recomendado es…",
            respuestas: ["A. Alertar - Socorrer - Proteger", "B. Proteger - Alertar - Socorrer", "C. Socorrer - Proteger - Alertar"],
            respuestaCorrecta: "B"
        },
        {
            pregunta: "Pregunta 6: ¿Quién es el responsable civil por un incidente de tránsito producido por un menor de edad poseedor de una licencia de conducir?",
            respuestas: ["A. El que firmó la autorización para obtener la licencia", "B. El que lo acompaña", "C. El que le autorizó el uso del vehículo"],
            respuestaCorrecta: "A"
        },
        {
            pregunta: "Pregunta 7: En materia de Responsabilidad Civil, ¿qué es lo que se considera como factor determinante para dar inicio a una demanda?",
            respuestas: ["A. La intención de la conducta dañosa", "B. La existencia de un daño real, que afecte a algún particular, provocado como consecuencia del incidente", "C. Los antecedentes de la persona que provoca el daño"],
            respuestaCorrecta: "B"
        },
        {
            pregunta: "Pregunta 8: Frente a un incidente de tránsito, ¿puede transferirse la Responsabilidad Penal del conductor de un vehículo al dueño del mismo?",
            respuestas: ["A. No, porque la responsabilidad penal es intransferible", "B. Sí. Además, del dueño también puede transferirse a la Compañía de Seguros", "C. Lo resolverá el Juez, en función de la gravedad del incidente y sus consecuencias"],
            respuestaCorrecta: "A"
        },
        {
            pregunta: "Pregunta 9: En un incidente de tránsito, ¿qué significa que el conductor sea considerado responsable por negligencia?",
            respuestas: ["A. Que no ha respondido adecuadamente a una circunstancia del tránsito por falta de práctica en la conducción", "B. Que ha realizado un acto con su vehículo que las reglas de prudencia indican no hacer, o sea, que ha actuado peligrosamente", "C. Que ha actuado no conforme a las exigencias de la Ley"],
            respuestaCorrecta: "C"
        },
        {
            pregunta: "Pregunta 10: En caso de participar en un siniestro vial, en el que resultaron personas heridas, el personal policial que acuda al lugar se encargará de preservar la escena del hecho, brindando los medios para que los servicios de emergencia atiendan a los heridos y resguardando los ehículos y otras pruebas del incidente para una adecuada resolución del caso",
            respuestas: ["A. Verdadero", "B. Falso"],
            respuestaCorrecta: "A"
        },
    ],

    // Temario 2
    [
        {
            pregunta: "Pregunta 1: Al tener la licencia vencida, ¿por cuánto tiempo puede seguir conduciendo sin estar en infracción?",
            respuestas: ["A. 30 días corridos desde su vencimiento", "B. Hasta las 00 horas del día de cumpleaños", "C. No está permitido conducir con la licencia vencida"],
            respuestaCorrecta: "C"
        },
        {
            pregunta: "Pregunta 2: En caso de comprobar una falta, ¿puede un agente de tránsito retener la licencia de conducir?",
            respuestas: ["A. No, porque es un documento personal", "B. Sólo en los casos que la normativa vigente así lo indique", "C. Sólo en casos de incidentes que involucren a terceros"],
            respuestaCorrecta: "B"
        },
        {
            pregunta: "Pregunta 3: Cuando se vence la licencia de conducir, ¿cuánto tiempo puede transcurrir para su renovación antes de que se necesite tramitarla como si fuese un otorgamiento?",
            respuestas: ["A. 30 días corridos desde su vencimiento", "B. Para que se la pueda renovar, siempre debe hacerse antes de su vencimiento. Una vez vencida se la debe tramitar como licencia nueva", "C. 90 días corridos desde su vencimiento"],
            respuestaCorrecta: "B"
        },
        {
            pregunta: "Pregunta 4: ¿Cuántas “cédulas para autorizados a conducir” podrán otorgarse para un mismo vehículo?",
            respuestas: ["A. Sólo una", "B. La cantidad que solicite el titular del vehículo", "C. Hasta cinco"],
            respuestaCorrecta: "B"
        },
        {
            pregunta: "Pregunta 5: ¿Se puede manejar un vehículo con “cédula para autorizado a conducir” a nombre de otra persona?",
            respuestas: ["A. Siempre y cuando se encuentre vigente", "Sólo si es un familiar directo o tiene una relación laboral", "C. En ningún caso"],
            respuestaCorrecta: "C"
        },
        {
            pregunta: "Pregunta 6: El certificado del seguro de responsabilidad civil es obligatorio llevarlo ÚNICAMENTE  cuando se conduce por vías interurbanas",
            respuestas: ["A. Verdadero", "B. Falso"],
            respuestaCorrecta: "B"
        },
        {
            pregunta: "Pregunta 7: Todo vehículo debe estar cubierto por un seguro, ¿qué daños mínimamente debe cubrir?",
            respuestas: ["A. Eventuales daños causados a terceros transportados únicamente", "B. Eventuales daños causados a terceros transportados o no", "C. Daños causados a los vehículos únicamente"],
            respuestaCorrecta: "B"
        },
        {
            pregunta: "Pregunta 8: Al sufrir la pérdida de la placa de dominio de un vehículo, ¿dónde se puede solicitar su reposición?",
            respuestas: ["A. Se la puede solicitar en cualquier establecimiento comercial que la realice", "B. Se la debe solicitar en el Registro Nacional de la Propiedad del Automotor que corresponde al vehículo", "C. Ambas respuestas, la A y la B, son correctas"],
            respuestaCorrecta: "B"
        },
        {
            pregunta: "Pregunta 9: ¿Cuál es el objetivo de la Verificación Técnica Vehicular?",
            respuestas: ["A. Reducir la contaminación y mejorar la calidad del medio ambiente", "B. Garantizar el cumplimiento de las normas de seguridad de los vehículos", "C. Ambas respuestas, la A y la B, son correctas"],
            respuestaCorrecta: "C"
        },
        {
            pregunta: "Pregunta 10: Marque la documentación obligatoria que debe portar el conductor de un vehículo",
            respuestas: ["A. Título de propiedad del vehículo, D.N.I, comprobante de verificación técnica", "B. Carnet de manejar, botiquín de primeros auxilios, comprobante de patentes pagas", "C. Póliza de seguro vigente, tarjeta verde, licencia de conducir habilitante, DNI, Grabado de autopartes y vtv"],
            respuestaCorrecta: "C"
        },
    ],

    // Temario 3
    [
        {
            pregunta: "Pregunta 1: ¿Consumir cuál de estas sustancias pueden afectar la capacidad para conducir?",
            respuestas: ["A. Las drogas ilegales y algunas legales (como el alcohol y algunos medicamentos)", "B. Sólo las drogas ilegales", "C. Todo tipo de drogas (las legales e ilegales)"],
            respuestaCorrecta: "A"
        },
        {
            pregunta: "Pregunta 2: La persona que conduce bajo los efectos de estupefacientes…",
            respuestas: ["A. Se pone en grave riesgo a sí mismo y a todos los que lo rodean", "B. Sólo pone en riesgo su propia vida", "C. Al estar desinhibido, asume menos riesgos"],
            respuestaCorrecta: "A"
        },
        {
            pregunta: "Pregunta 3: ¿Cuál de estas sustancias pueden afectar negativamente la capacidad de conducir?",
            respuestas: ["A. Todos los medicamentos, de venta libre, que no necesitan receta", "B. Todos los medicamentos con efectos sedantes", "C. Ambas respuestas, la A y la B, son correctas"],
            respuestaCorrecta: "B"
        },
        {
            pregunta: "Pregunta 4: Cuando se consume alcohol, ¿se pueden producir alteraciones en la visión?",
            respuestas: ["A. Sí", "B. No, solamente afecta a la capacidad motora", "C. Sólo cuando se tiene más de 1 gramo de alcohol por litro de sangre"],
            respuestaCorrecta: "A"
        },
        {
            pregunta: "Pregunta 5: Una vez que dejó de ingerir alcohol, ¿qué sucede con la concentración de alcohol que tiene en su organismo?",
            respuestas: ["A. Comienza a disminuir de forma inmediata", "B. Continúa subiendo durante 1 hora y luego comienza a descender aulatinamente", "C. Se mantiene en el mismo valor durante 1 hora y luego comienza a descender"],
            respuestaCorrecta: "B"
        },
        {
            pregunta: "Pregunta 6: Consumir cerveza influye en la conducción de un vehículo, haciendo que el conductor reduzca su capacidad de reacción y aumentando el tiempo necesario para responder ante un estímulo",
            respuestas: ["A. Verdadero", "B. Falso"],
            respuestaCorrecta: "A"
        },
        {
            pregunta: "Pregunta 7: Conducir al día siguiente de una noche de consumo excesivo de alcohol es riesgoso porque:",
            respuestas: ["A. Los efectos del alcohol no terminan con la ingesta, sino que se extienden hasta haberlo eliminado del organismo", "B. Conducir con resaca es equiparable, por sus efectos en el organismo, a conducir alcoholizado", "C. Ambas respuestas, la A y la B, son correctas"],
            respuestaCorrecta: "C"
        },
        {
            pregunta: "Pregunta 8: ¿La resaca tiene efectos en el organismo que puedan afectar la conducción?",
            respuestas: ["A. Sí, pero sólo cuando la bebida alcohólica que se ingirió tiene un alto grado de concentración", "B. No, el nivel de alcohol se ve reducido en cuestión de horas, por ello conducir con resaca no altera las percepciones", "C. Sí, puede afectar la coordinación, la atención y el tiempo de reacción"],
            respuestaCorrecta: "C"
        },
        {
            pregunta: "Pregunta 9: ¿Es peligroso conducir con resaca?",
            respuestas: ["A. Sí, es peligroso porque tiene efectos en el organismo", "B. No, ya que los efectos del alcohol aparecen durante las primeras horas de su ingesta", "C. No, ya que los efectos de la resaca no intervienen en la conducción"],
            respuestaCorrecta: "A"
        },
        {
            pregunta: "Pregunta 10: Si el conductor de un vehículo se niega a realizar este test, ¿constituye ésto una falta?",
            respuestas: ["A. Sólo si se ha participado de un siniestro vial", "B. No. Sólo la prueba positiva, efectivamente realizada, se considera una falta", "C. Sí, la misma se toma como una presunción de alcoholemia positiva"],
            respuestaCorrecta: "C"
        },
    ],

    // Temario 4
    [
        {
            pregunta: "Pregunta 1: La Verificación Técnica vehicular:",
            respuestas: ["A. Es obligatoria para todos los vehículos", "B. Solamente para los destinados a transporte", "C. Para todos los vehículos, excepto las motos, triciclos y cuatriciclos"],
            respuestaCorrecta: "A"
        },
        {
            pregunta: "Pregunta 2: ¿ Que funcion cumplen las señales de prevencion?",
            respuestas: ["A. Indican lo que se puede hacer o lo que esta prohibido hacer durante la circulacion", "B. Avisan sobre riesgos eventuales al circular por la calle", "C. Informan sobre destinos y servicios"],
            respuestaCorrecta: "B"
        },
        {
            pregunta: "Pregunta 3: ¿A que grupo de señales pertenecen las que son (en su mayoria) de forma redonda, de colores rojas y blancas y figura negra?",
            respuestas: ["A. De informacion", "B. De reglamentacion", "C. De prevencion"],
            respuestaCorrecta: "B"
        },
        {
            pregunta: "Pregunta 4: Si desea girar a la izquierda desde una calle de sentido único, ¿qué maniobra debe realizar?",
            respuestas: ["A. Debo acercar el automóvil al centro de la calle y luego girar", "B. Debo acercarme al cordón de la misma mano para luego girar", "C. Debo acercar el automóvil a la derecha y luego girar"],
            respuestaCorrecta: "B"
        },
        {
            pregunta: "Pregunta 5: Comprobante de Seguro:",
            respuestas: ["A. Es optativo circular con el comprobante de seguro", "B. Es obligatorio circular con el comprobante de seguro", "C. Es obligatorio circular con el comprobante de seguro sólo en caso de conductores profesionales"],
            respuestaCorrecta: "B"
        },
        {
            pregunta: "Pregunta 6: Menores de edad:",
            respuestas: ["A. Los menores de hasta DIEZ (10) años deben viajar sujetos al asiento trasero con el correaje correspondiente", "B. Los menores de hasta OCHO (8) años deben viajar sujetos al asiento trasero con el correaje correspondiente", "C. Los menores de hasta SEIS (6) años deben viajar sujetos al asiento trasero con el correaje correspondiente"],
            respuestaCorrecta: "A"
        },
        {
            pregunta: "Pregunta 7: Exceso de velocidad:",
            respuestas: ["A. Se encuentra prohibido conducir con exceso de velocidad compitiendo con otros u otros vehículos", "B. Se encuentra prohibido conducir con exceso de velocidad compitiendo con otros u otros vehículos o animales", "C. Se encuentra prohibido conducir con exceso de velocidad compitiendo con otros vehículos preparados para carrera"],
            respuestaCorrecta: "B"
        },
        {
            pregunta: "Pregunta 8: Retención del vehiculo",
            respuestas: ["A. El vehículo será secuestrado y retenido por 10 días si el infractor fuere el propietario", "B. El vehículo será secuestrado y retenido por 30 días si el infractor fuere el propietario", "C. No es posible secuestrar el vehículo porque está prohibido legalmente"],
            respuestaCorrecta: "B"
        },
        {
            pregunta: "Pregunta 9: ¿Está permitido conducir en la vía pública con auriculares puestos?",
            respuestas: ["A. Si, ya que no genera impedimento visual ni físico", "B. No, está expresamente prohibido por la ley", "C. Depende la edad del conductor"],
            respuestaCorrecta: "B"
        },
        {
            pregunta: "Pregunta 10: Vencido el plazo para hacer la VTV se está en infracción pero podemos seguir circulando",
            respuestas: ["A. Verdadero", "B. Falso"],
            respuestaCorrecta: "B"
        },
    ]
];


function obtenerRespuesta(mensaje) {
    return prompt(mensaje);
}


function mostrarResultado() {
    alert("Tu puntaje es: " + puntaje);

    if (puntaje < 6) {
        alert("Debes estudiar más " + nombreUsuario + ", de lo contrario no obtendrás tu licencia.");
    } else if (puntaje < 8) {
        alert("Vas bien " + nombreUsuario + ", pero debes esforzarte un poco más para aprobar.");
    } else if (puntaje < 10) {
        alert("¡Vas muy bien " + nombreUsuario + "! Si sigues así obtendrás tu licencia.");
    } else {
        alert("¡Excelente " + nombreUsuario + "! ¡Tendrás tu licencia!");
    }
}


function realizarCuestionario() {
    let temarioElegido = parseInt(obtenerRespuesta("Elige un temario:\n1. " + temarios[0] + "\n2. " + temarios[1] + "\n3. " + temarios[2] + "\n4. " + temarios[3]));

    // Validar el temario elegido
    if (temarioElegido < 1 || temarioElegido > 4 || isNaN(temarioElegido)) {
        alert("Opción inválida. Por favor, elige un número válido del 1 al 4.");
        return;
    }

    // Obtener las preguntas del temario elegido
    let preguntasTemario = preguntas[temarioElegido - 1];

    
    respuestasCorrectas = 0;

    for (let i = 0; i < 10; i++) {
        let pregunta = preguntasTemario[i];

        let respuesta = obtenerRespuesta(pregunta.pregunta + "\n" + pregunta.respuestas.join("\n"));

        // Validar la respuesta ingresada por el usuario
        if (respuesta.toUpperCase() === pregunta.respuestaCorrecta) {
            respuestasCorrectas++;
        }
    }

    puntaje = respuestasCorrectas; 
    mostrarResultado();

    // Preguntar al usuario si desea repetir el cuestionario
    let repetir = obtenerRespuesta("¿Deseas repetir el cuestionario O elegir un nuevo temario? (S/N)").toUpperCase();

    if (repetir === "S") {
        realizarCuestionario();
    } else {
        alert("¡Te espero pronto, " + nombreUsuario + "! ¡Aquí estaré si necesitas seguir practicando!");
    }
}


realizarCuestionario();
