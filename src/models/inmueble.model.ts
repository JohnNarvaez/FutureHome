import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Ciudad} from './ciudad.model';
import {Solicitud} from './solicitud.model';

@model()
export class Inmueble extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;

  @property({
    type: 'number',
    required: true,
  })
  valor: number;

  @property({
    type: 'string',
    required: true,
  })
  estadoVenta: string;

  @property({
    type: 'string',
    required: true,
  })
  imagen: string;

  @property({
    type: 'string',
    required: true,
  })
  video: string;

  @property({
    type: 'string',
    required: true,
  })
  venta: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaVenta: string;

  @property({
    type: 'number',
    required: true,
  })
  porcentajeExtra: number;

  @belongsTo(() => Ciudad)
  ciudadId: string;

  @hasMany(() => Solicitud)
  solicituds: Solicitud[];

  constructor(data?: Partial<Inmueble>) {
    super(data);
  }
}

export interface InmuebleRelations {
  // describe navigational properties here
}

export type InmuebleWithRelations = Inmueble & InmuebleRelations;
