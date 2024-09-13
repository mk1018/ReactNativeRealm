import Realm from 'realm';

export class ProfileModel extends Realm.Object<ProfileModel> {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  static schema: Realm.ObjectSchema = {
    name: 'Profile',
    properties: {
      _id: 'objectId',
      name: {type: 'string', indexed: 'full-text'},
    },
    primaryKey: '_id',
  };
}
