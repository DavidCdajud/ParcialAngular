export class Plantas {
    id: string;
    nombre_comun: string
    nombre_cientifico: string;
    tipo: string;
    altura_maxima: string;
    clima: string;
    sustrato_siembre: string;
    
    public constructor(id: string ,name: string, nombre_comun: string, nombre_cientifico: string, tipo: string, altura_maxima: string, clima: string, sustrato_siembre: string) {
        this.id = id;
        this.nombre_comun = nombre_comun;
        this.nombre_cientifico = nombre_cientifico;
        this.tipo = tipo;
        this.altura_maxima = altura_maxima;
        this.clima = clima;
        this.sustrato_siembre = sustrato_siembre;
        }
    }
    
    