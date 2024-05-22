import { Model, ModelObject } from 'objection';
import { EnumRoleUser } from '../enums/role-user-enum';
import { TokenModel } from './token-model';
import { BillModel } from './bill-model';

export class UserModel extends Model {
  id!: number;
  username!: string;
  password!: string;
  name!: string;
  role!: EnumRoleUser;
  created_at!: Date;
  updated_at!: Date;

  static tableName = 'users';

  static get relationMappings() {
    return {
      token: {
        relation: Model.HasOneRelation,
        modelClass: TokenModel,
        join: {
          from: 'users.id',
          to: 'tokens.user_id',
        },
      },
      bill: {
        relation: Model.HasManyRelation,
        modelClass: BillModel,
        join: {
          from: 'users.id',
          to: 'bills.user_id',
        },
      },
    };
  }
}

export type User = ModelObject<UserModel>;
