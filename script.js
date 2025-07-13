/* =========  LISTA COMPLETA DE RAMOS + REQUISITOS  ========= */
const courses = [
  /* –– I SEMESTRE –– */
  {id:"principios_matematicos",           name:"Principios Matemáticos",            semester:1, prereqs:[]},
  {id:"biologia_celular",                 name:"Biología Celular",                  semester:1, prereqs:[]},
  {id:"quimica_general",                  name:"Química General",                   semester:1, prereqs:[]},
  {id:"introduccion_a_la_tecnologia_medica", name:"Introducción a la Tecnología Médica", semester:1, prereqs:[]},
  {id:"taller_de_competencias_comunicativas", name:"Taller de Competencias Comunicativas", semester:1, prereqs:[]},
  {id:"taller_de_competencias_para_el_aprendizaje", name:"Taller de Competencias para el Aprendizaje", semester:1, prereqs:[]},
  {id:"taller_de_desarrollo_personal_i",  name:"Taller de Desarrollo Personal I",   semester:1, prereqs:[]},

  /* –– II –– */
  {id:"biofisica",                        name:"Biofísica",                         semester:2, prereqs:["principios_matematicos"]},
  {id:"proc_de_enfermeria_y_primeros_auxilios", name:"Proc. de Enfermería y Primeros Auxilios", semester:2, prereqs:[]},
  {id:"quimica_organica",                 name:"Química Orgánica",                  semester:2, prereqs:["quimica_general"]},
  {id:"anatomia",                         name:"Anatomía",                          semester:2, prereqs:[]},
  {id:"histologia",                       name:"Histología",                        semester:2, prereqs:[]},
  {id:"taller_de_desarrollo_personal_ii", name:"Taller de Desarrollo Personal II",  semester:2, prereqs:[]},
  {id:"cultura_y_valores",                name:"Cultura y Valores",                 semester:2, prereqs:[]},

  /* –– III –– */
  {id:"estadisticas_para_la_ciencia_de_la_salud", name:"Estadísticas para la Ciencia de la Salud", semester:3, prereqs:["principios_matematicos"]},
  {id:"inmunologia_basica",               name:"Inmunología Básica",                semester:3, prereqs:["histologia"]},
  {id:"fundamentos_en_bioquimica",        name:"Fundamentos en Bioquímica",         semester:3, prereqs:["quimica_organica"]},
  {id:"fisiologia",                       name:"Fisiología",                        semester:3, prereqs:["anatomia"]},
  {id:"bioseguridad",                     name:"Bioseguridad",                      semester:3, prereqs:[]},
  {id:"persona_y_sentido",                name:"Persona y Sentido",                 semester:3, prereqs:[]},
  {id:"ingles_basico_i",                  name:"Inglés Básico I",                   semester:3, prereqs:[]},

  /* –– IV –– */
  {id:"fundamentos_en_salud_publica",     name:"Fundamentos en Salud Pública",      semester:4, prereqs:["estadisticas_para_la_ciencia_de_la_salud"]},
  {id:"etica_en_salud",                   name:"Ética en Salud",                    semester:4, prereqs:[]},
  {id:"morfofisiologia_del_sistema_visual", name:"Morfofisiología del Sistema Visual", semester:4, prereqs:["inmunologia_basica"]},
  {id:"fisiopatologia",                   name:"Fisiopatología",                    semester:4, prereqs:["fisiologia"]},
  {id:"fisica_oftalmica",                 name:"Física Oftálmica",                  semester:4, prereqs:["biofisica"]},
  {id:"atencion_primaria_oftalmologica",  name:"Atención Primaria Oftalmológica",   semester:4, prereqs:[]},
  {id:"ingles_basico_ii",                 name:"Inglés Básico II",                  semester:4, prereqs:["ingles_basico_i"]},

  /* –– V –– */
  {id:"oftalmologia_general",             name:"Oftalmología General",              semester:5, prereqs:["morfofisiologia_del_sistema_visual","fisiopatologia","fisica_oftalmica"]},
  {id:"morfofisiopatologia_del_sistema_visual", name:"Morfofisiopatología del Sistema Visual", semester:5, prereqs:["morfofisiologia_del_sistema_visual","fisiopatologia","fisica_oftalmica"]},
  {id:"vision_binocular",                 name:"Visión Binocular",                  semester:5, prereqs:["morfofisiologia_del_sistema_visual","fisiopatologia","fisica_oftalmica"]},
  {id:"oftalmofarmacologia",              name:"Oftalmofarmacología",               semester:5, prereqs:["morfofisiologia_del_sistema_visual","fisiopatologia","fisica_oftalmica"]},
  {id:"gestion_en_salud",                 name:"Gestión en Salud",                  semester:5, prereqs:[]},

  /* –– VI –– */
  {id:"estudio_del_campo_visual",         name:"Estudio del Campo Visual",          semester:6, prereqs:["oftalmologia_general","morfofisiopatologia_del_sistema_visual","vision_binocular"]},
  {id:"estrabismo_y_ortoptica",           name:"Estrabismo y Ortóptica",            semester:6, prereqs:["oftalmologia_general","morfofisiopatologia_del_sistema_visual","vision_binocular"]},
  {id:"optometria_clinica_basica",        name:"Optometría Clínica Básica",         semester:6, prereqs:["oftalmologia_general","morfofisiopatologia_del_sistema_visual","vision_binocular","oftalmofarmacologia"]},
  {id:"electivo_i",                       name:"Electivo I",                        semester:6, prereqs:[]},

  /* –– VII –– */
  {id:"neuroftalmologia",                 name:"Neuroftalmología",                  semester:7, prereqs:["estrabismo_y_ortoptica"]},
  {id:"imagenologia_ocular",             name:"Imagenología Ocular",               semester:7, prereqs:["estudio_del_campo_visual"]},
  {id:"ecobiometria_ocular",             name:"Ecobiometría Ocular",               semester:7, prereqs:["oftalmologia_general"]},
  {id:"optometria_clinica_avanzada",     name:"Optometría Clínica Avanzada",       semester:7, prereqs:["optometria_clinica_basica"]},

  /* –– VIII –– */
  {id:"metodologia_de_la_investigacion", name:"Metodología de la Investigación",    semester:8, prereqs:["ecobiometria_ocular"]},
  {id:"retina_clinica",                  name:"Retina Clínica",                     semester:8, prereqs:["imagenologia_ocular"]},
  {id:"apoyo_en_cirugia_refractiva",     name:"Apoyo en Cirugía Refractiva",        semester:8, prereqs:["ecobiometria_ocular"]},
  {id:"electivo_ii",                     name:"Electivo II",                        semester:8, prereqs:["electivo_i"]},

  /* –– IX –– */
  {id:"seminario_de_investigacion",      name:"Seminario de Investigación",         semester:9, prereqs:["metodologia_de_la_investigacion","retina_clinica","apoyo_en_cirugia_refractiva"]},
  {id:"clinica_oftalmica",               name:"Clínica Oftálmica",                  semester:9, prereqs:[]},
  {id:"electivo_iii",                    name:"Electivo III",                       semester:9, prereqs:[]},

  /* –– X –– */
  {id:"internado_profesional_i",         name:"Internado Profesional I",            semester:10, prereqs:[]},
  {id:"internado_profesional_ii",        name:"Internado Profesional II",           semester:10, prereqs:[]},
  {id:"internado_profesional_iii",       name:"Internado Profesional III",          semester:10, prereqs:[]},
  {id:"internado_profesional_iv",        name:"Internado Profesional IV",           semester:10, prereqs:[]},
  {id:"actividad_de_titulacion",         name:"Actividad de Titulación",            semester:10, prereqs:[]},
];

/* =========  LÓGICA DE INTERACCIÓN  ========= */
document.addEventListener("DOMContentLoaded", () => {
  /* paleta pastel – sin colores fuertes */
  const palette = [
    "#f8bbd0","#f48fb1","#f06292","#e1bee7","#d1c4e9","#c5cae9",
    "#bbdefb","#b2dfdb","#c8e6c9","#ffecb3","#ffe0b2","#d7ccc8",
    "#f0f4c3","#e6ee9c","#ffccbc","#f9e79f","#f5c6cb","#d4e157"
  ];

  const mesh = document.getElementById("mesh");
  const completed = new Set();

  /* agrupar por semestre y pintar en el DOM */
  const semesters = [...new Set(courses.map(c => c.semester))].sort((a,b)=>a-b);
  semesters.forEach(sem => {
    const section   = document.createElement("section");
    section.className = "semester";

    const heading   = document.createElement("h2");
    heading.textContent = `Semestre ${sem}`;
    section.appendChild(heading);

    courses
      .filter(c => c.semester === sem)
      .forEach((c, i) => {
        const btn = document.createElement("button");
        btn.className = "course";
        btn.textContent = c.name;
        btn.dataset.id = c.id;
        btn.dataset.prereqs = c.prereqs.join(",");
        btn.style.setProperty("--border-color", palette[(i+sem)%palette.length]);

        if (c.prereqs.length) btn.classList.add("disabled");
        c.el = btn;               /* referencia rápida */

        section.appendChild(btn);
      });

    mesh.appendChild(section);
  });

  /* desbloqueo tras cada aprobación */
  function unlock() {
    courses.forEach(c => {
      if (completed.has(c.id)) return;              // ya aprobado
      if (c.prereqs.every(p => completed.has(p))) {
        c.el.classList.remove("disabled");
      }
    });
  }

  /* clic en un ramo */
  mesh.addEventListener("click", e => {
    const target = e.target.closest(".course");
    if (!target || target.classList.contains("disabled")) return;

    const id = target.dataset.id;
    if (completed.has(id)) return;                  // evitar doble clic

    /* marcar como aprobado */
    completed.add(id);
    target.classList.add("completed");
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = "✔";
    target.appendChild(badge);

    unlock();                                      // revisar ramas dependientes
  });
});
