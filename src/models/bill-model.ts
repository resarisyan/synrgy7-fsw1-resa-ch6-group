import { Model, ModelObject } from 'objection';
import { BillTypeModel } from './bill-type-model';
import { EnumStatusBill } from '../enums/status-bill-enum';
import { UserModel } from './user-model';

export class BillModel extends Model {
  id!: number;
  user_id!: number;
  bill_type_id!: number;
  total_amount!: number;
  status!: EnumStatusBill;
  user!: UserModel;
  billType!: BillTypeModel;
  created_at!: Date;
  updated_at!: Date;

  static tableName = 'bills';

  static get relationMappings() {
    return {
      billType: {
        relation: Model.BelongsToOneRelation,
        modelClass: BillTypeModel,
        join: {
          from: 'bills.bill_type_id',
          to: 'bill_types.id',
        },
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: 'bills.user_id',
          to: 'users.id',
        },
      },
    };
  }
}

export type Bill = ModelObject<BillModel>;
