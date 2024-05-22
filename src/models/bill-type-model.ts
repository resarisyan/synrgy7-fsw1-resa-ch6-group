import { Model, ModelObject } from 'objection';
import { BillModel } from './bill-model';

export class BillTypeModel extends Model {
  id!: number;
  name!: string;
  price!: number;
  created_at!: Date;
  updated_at!: Date;

  static tableName = 'bill_types';

  static get relationMappings() {
    return {
      bills: {
        relation: Model.HasManyRelation,
        modelClass: BillModel,
        join: {
          from: 'bill_types.id',
          to: 'bills.bill_type_id',
        },
      },
    };
  }
}

export type BillType = ModelObject<BillTypeModel>;
